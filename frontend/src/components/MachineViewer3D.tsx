import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

type WorkVolume = {
  x: number; // max X in user units (e.g. mm)
  y: number; // max Y
  z: number; // max Z
};

type MachinePose = {
  x: number; // current X in user units
  y: number;
  z: number;
};

interface MachineViewer3DProps {
  workVolume: WorkVolume;
  pose: MachinePose;
}

/**
 * MachineViewer3D
 *
 * Simple CNC/pick-and-place digital twin viewer using raw Three.js.
 *
 * - workVolume defines the physical workspace (e.g. mm).
 * - pose is the current toolhead position in the same units.
 *
 * The volume is centered around the origin to keep camera/orbit sane.
 */
export const MachineViewer3D: React.FC<MachineViewer3DProps> = ({
  workVolume,
  pose,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const toolRef = useRef<THREE.Mesh | null>(null);

  // Scene scaling: how many scene units per mm
  const scale = 0.01; // 1 mm -> 0.01 scene units (adjust to taste)

  const volX = workVolume.x * scale;
  const volY = workVolume.y * scale;
  const volZ = workVolume.z * scale;

  // Clamp helper
  const clamp = (val: number, min: number, max: number) =>
    Math.min(Math.max(val, min), max);

  // ------------------------------
  //  Three.js scene bootstrap
  // ------------------------------
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#020617"); // zinc-950-ish

    // Camera
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 300;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);

    // Position the camera so we see the full volume
    const diag = Math.sqrt(volX * volX + volY * volY + volZ * volZ);
    camera.position.set(diag, diag, diag);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    container.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    const directional = new THREE.DirectionalLight(0xffffff, 0.8);
    directional.position.set(2, 4, 3);
    scene.add(directional);

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.target.set(0, 0, 0);

    // Base plane (machine bed)
    const bedGeometry = new THREE.PlaneGeometry(volX * 1.1, volY * 1.1);
    const bedMaterial = new THREE.MeshStandardMaterial({
      color: "#18181b",
      metalness: 0.2,
      roughness: 0.8,
      side: THREE.DoubleSide,
    });
    const bed = new THREE.Mesh(bedGeometry, bedMaterial);
    bed.rotation.x = -Math.PI / 2; // horizontal plane
    bed.position.set(0, -volZ / 2, 0);
    scene.add(bed);

    // Work volume bounding box (wireframe)
    const boxGeometry = new THREE.BoxGeometry(volX, volZ, volY);
    const boxMaterial = new THREE.MeshBasicMaterial({
      color: "#3f3f46",
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(box);

    // Axes helper (X=red, Y=green, Z=blue)
    const axes = new THREE.AxesHelper(Math.max(volX, volY, volZ));
    scene.add(axes);

    // Toolhead mesh (small cube)
    const toolSize = Math.max(volX, volY, volZ) * 0.05;
    const toolGeometry = new THREE.BoxGeometry(toolSize, toolSize, toolSize);
    const toolMaterial = new THREE.MeshStandardMaterial({
      color: "#22c55e",
      metalness: 0.6,
      roughness: 0.3,
    });
    const tool = new THREE.Mesh(toolGeometry, toolMaterial);
    toolRef.current = tool;
    scene.add(tool);

    // Initial tool position
    const initX = clamp(pose.x, 0, workVolume.x) * scale - volX / 2;
    const initY = clamp(pose.y, 0, workVolume.y) * scale - volY / 2;
    const initZ = clamp(pose.z, 0, workVolume.z) * scale - volZ / 2;
    tool.position.set(initX, initZ, initY); // map Y/Z -> vertical axis

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 400;
      const h = container.clientHeight || 300;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();

      bedGeometry.dispose();
      bedMaterial.dispose();
      boxGeometry.dispose();
      boxMaterial.dispose();
      toolGeometry.dispose();
      toolMaterial.dispose();

      scene.clear();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount

  // ------------------------------
  //  Update toolhead position when pose changes
  // ------------------------------
  useEffect(() => {
    if (!toolRef.current) return;

    const px = clamp(pose.x, 0, workVolume.x) * scale - volX / 2;
    const py = clamp(pose.y, 0, workVolume.y) * scale - volY / 2;
    const pz = clamp(pose.z, 0, workVolume.z) * scale - volZ / 2;

    // Note: scene Y axis = vertical (use pz), Z axis for machine Y
    toolRef.current.position.set(px, pz, py);
  }, [pose, workVolume, volX, volY, volZ]); // if you plan to change workVolume at runtime

  return (
    <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-zinc-100">
            Digital Twin (3D)
          </h3>
          <p className="text-[11px] text-zinc-400">
            Live toolhead position inside the machine work volume.
          </p>
        </div>
        <div className="text-[11px] text-zinc-400">
          <span className="font-mono">
            X: {pose.x.toFixed(2)} · Y: {pose.y.toFixed(2)} · Z:{" "}
            {pose.z.toFixed(2)}
          </span>{" "}
          <span className="text-zinc-500">(units)</span>
        </div>
      </div>

      <div
        ref={containerRef}
        className="h-72 w-full overflow-hidden rounded-xl bg-zinc-900"
      />
    </div>
  );
};
