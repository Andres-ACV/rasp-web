(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Hm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var yu={exports:{}},La={},Su={exports:{}},_t={};var Cp;function Qx(){if(Cp)return _t;Cp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function _(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function y(I,se,Ne){this.props=I,this.context=se,this.refs=b,this.updater=Ne||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,se){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,se,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=y.prototype;function N(I,se,Ne){this.props=I,this.context=se,this.refs=b,this.updater=Ne||S}var P=N.prototype=new g;P.constructor=N,M(P,y.prototype),P.isPureReactComponent=!0;var U=Array.isArray,G=Object.prototype.hasOwnProperty,L={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function J(I,se,Ne){var ze,je={},ne=null,le=null;if(se!=null)for(ze in se.ref!==void 0&&(le=se.ref),se.key!==void 0&&(ne=""+se.key),se)G.call(se,ze)&&!B.hasOwnProperty(ze)&&(je[ze]=se[ze]);var Se=arguments.length-2;if(Se===1)je.children=Ne;else if(1<Se){for(var Ie=Array(Se),Fe=0;Fe<Se;Fe++)Ie[Fe]=arguments[Fe+2];je.children=Ie}if(I&&I.defaultProps)for(ze in Se=I.defaultProps,Se)je[ze]===void 0&&(je[ze]=Se[ze]);return{$$typeof:s,type:I,key:ne,ref:le,props:je,_owner:L.current}}function C(I,se){return{$$typeof:s,type:I.type,key:se,ref:I.ref,props:I.props,_owner:I._owner}}function A(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function H(I){var se={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ne){return se[Ne]})}var Z=/\/+/g;function ie(I,se){return typeof I=="object"&&I!==null&&I.key!=null?H(""+I.key):se.toString(36)}function fe(I,se,Ne,ze,je){var ne=typeof I;(ne==="undefined"||ne==="boolean")&&(I=null);var le=!1;if(I===null)le=!0;else switch(ne){case"string":case"number":le=!0;break;case"object":switch(I.$$typeof){case s:case e:le=!0}}if(le)return le=I,je=je(le),I=ze===""?"."+ie(le,0):ze,U(je)?(Ne="",I!=null&&(Ne=I.replace(Z,"$&/")+"/"),fe(je,se,Ne,"",function(Fe){return Fe})):je!=null&&(A(je)&&(je=C(je,Ne+(!je.key||le&&le.key===je.key?"":(""+je.key).replace(Z,"$&/")+"/")+I)),se.push(je)),1;if(le=0,ze=ze===""?".":ze+":",U(I))for(var Se=0;Se<I.length;Se++){ne=I[Se];var Ie=ze+ie(ne,Se);le+=fe(ne,se,Ne,Ie,je)}else if(Ie=_(I),typeof Ie=="function")for(I=Ie.call(I),Se=0;!(ne=I.next()).done;)ne=ne.value,Ie=ze+ie(ne,Se++),le+=fe(ne,se,Ne,Ie,je);else if(ne==="object")throw se=String(I),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return le}function ce(I,se,Ne){if(I==null)return I;var ze=[],je=0;return fe(I,ze,"","",function(ne){return se.call(Ne,ne,je++)}),ze}function ue(I){if(I._status===-1){var se=I._result;se=se(),se.then(function(Ne){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ne)},function(Ne){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ne)}),I._status===-1&&(I._status=0,I._result=se)}if(I._status===1)return I._result.default;throw I._result}var de={current:null},V={transition:null},ae={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:V,ReactCurrentOwner:L};function ee(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:ce,forEach:function(I,se,Ne){ce(I,function(){se.apply(this,arguments)},Ne)},count:function(I){var se=0;return ce(I,function(){se++}),se},toArray:function(I){return ce(I,function(se){return se})||[]},only:function(I){if(!A(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},_t.Component=y,_t.Fragment=n,_t.Profiler=o,_t.PureComponent=N,_t.StrictMode=r,_t.Suspense=m,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,_t.act=ee,_t.cloneElement=function(I,se,Ne){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ze=M({},I.props),je=I.key,ne=I.ref,le=I._owner;if(se!=null){if(se.ref!==void 0&&(ne=se.ref,le=L.current),se.key!==void 0&&(je=""+se.key),I.type&&I.type.defaultProps)var Se=I.type.defaultProps;for(Ie in se)G.call(se,Ie)&&!B.hasOwnProperty(Ie)&&(ze[Ie]=se[Ie]===void 0&&Se!==void 0?Se[Ie]:se[Ie])}var Ie=arguments.length-2;if(Ie===1)ze.children=Ne;else if(1<Ie){Se=Array(Ie);for(var Fe=0;Fe<Ie;Fe++)Se[Fe]=arguments[Fe+2];ze.children=Se}return{$$typeof:s,type:I.type,key:je,ref:ne,props:ze,_owner:le}},_t.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},_t.createElement=J,_t.createFactory=function(I){var se=J.bind(null,I);return se.type=I,se},_t.createRef=function(){return{current:null}},_t.forwardRef=function(I){return{$$typeof:f,render:I}},_t.isValidElement=A,_t.lazy=function(I){return{$$typeof:x,_payload:{_status:-1,_result:I},_init:ue}},_t.memo=function(I,se){return{$$typeof:p,type:I,compare:se===void 0?null:se}},_t.startTransition=function(I){var se=V.transition;V.transition={};try{I()}finally{V.transition=se}},_t.unstable_act=ee,_t.useCallback=function(I,se){return de.current.useCallback(I,se)},_t.useContext=function(I){return de.current.useContext(I)},_t.useDebugValue=function(){},_t.useDeferredValue=function(I){return de.current.useDeferredValue(I)},_t.useEffect=function(I,se){return de.current.useEffect(I,se)},_t.useId=function(){return de.current.useId()},_t.useImperativeHandle=function(I,se,Ne){return de.current.useImperativeHandle(I,se,Ne)},_t.useInsertionEffect=function(I,se){return de.current.useInsertionEffect(I,se)},_t.useLayoutEffect=function(I,se){return de.current.useLayoutEffect(I,se)},_t.useMemo=function(I,se){return de.current.useMemo(I,se)},_t.useReducer=function(I,se,Ne){return de.current.useReducer(I,se,Ne)},_t.useRef=function(I){return de.current.useRef(I)},_t.useState=function(I){return de.current.useState(I)},_t.useSyncExternalStore=function(I,se,Ne){return de.current.useSyncExternalStore(I,se,Ne)},_t.useTransition=function(){return de.current.useTransition()},_t.version="18.3.1",_t}var Rp;function Yd(){return Rp||(Rp=1,Su.exports=Qx()),Su.exports}var Pp;function eg(){if(Pp)return La;Pp=1;var s=Yd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,p){var x,v={},_=null,S=null;p!==void 0&&(_=""+p),m.key!==void 0&&(_=""+m.key),m.ref!==void 0&&(S=m.ref);for(x in m)r.call(m,x)&&!l.hasOwnProperty(x)&&(v[x]=m[x]);if(f&&f.defaultProps)for(x in m=f.defaultProps,m)v[x]===void 0&&(v[x]=m[x]);return{$$typeof:e,type:f,key:_,ref:S,props:v,_owner:o.current}}return La.Fragment=n,La.jsx=u,La.jsxs=u,La}var Dp;function tg(){return Dp||(Dp=1,yu.exports=eg()),yu.exports}var O=tg(),Ht=Yd();const ng=Hm(Ht);var il={},Mu={exports:{}},Nn={},Eu={exports:{}},bu={};var Lp;function ig(){return Lp||(Lp=1,(function(s){function e(V,ae){var ee=V.length;V.push(ae);e:for(;0<ee;){var I=ee-1>>>1,se=V[I];if(0<o(se,ae))V[I]=ae,V[ee]=se,ee=I;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ae=V[0],ee=V.pop();if(ee!==ae){V[0]=ee;e:for(var I=0,se=V.length,Ne=se>>>1;I<Ne;){var ze=2*(I+1)-1,je=V[ze],ne=ze+1,le=V[ne];if(0>o(je,ee))ne<se&&0>o(le,je)?(V[I]=le,V[ne]=ee,I=ne):(V[I]=je,V[ze]=ee,I=ze);else if(ne<se&&0>o(le,ee))V[I]=le,V[ne]=ee,I=ne;else break e}}return ae}function o(V,ae){var ee=V.sortIndex-ae.sortIndex;return ee!==0?ee:V.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var m=[],p=[],x=1,v=null,_=3,S=!1,M=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(V){for(var ae=n(p);ae!==null;){if(ae.callback===null)r(p);else if(ae.startTime<=V)r(p),ae.sortIndex=ae.expirationTime,e(m,ae);else break;ae=n(p)}}function U(V){if(b=!1,P(V),!M)if(n(m)!==null)M=!0,ue(G);else{var ae=n(p);ae!==null&&de(U,ae.startTime-V)}}function G(V,ae){M=!1,b&&(b=!1,g(J),J=-1),S=!0;var ee=_;try{for(P(ae),v=n(m);v!==null&&(!(v.expirationTime>ae)||V&&!H());){var I=v.callback;if(typeof I=="function"){v.callback=null,_=v.priorityLevel;var se=I(v.expirationTime<=ae);ae=s.unstable_now(),typeof se=="function"?v.callback=se:v===n(m)&&r(m),P(ae)}else r(m);v=n(m)}if(v!==null)var Ne=!0;else{var ze=n(p);ze!==null&&de(U,ze.startTime-ae),Ne=!1}return Ne}finally{v=null,_=ee,S=!1}}var L=!1,B=null,J=-1,C=5,A=-1;function H(){return!(s.unstable_now()-A<C)}function Z(){if(B!==null){var V=s.unstable_now();A=V;var ae=!0;try{ae=B(!0,V)}finally{ae?ie():(L=!1,B=null)}}else L=!1}var ie;if(typeof N=="function")ie=function(){N(Z)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ce=fe.port2;fe.port1.onmessage=Z,ie=function(){ce.postMessage(null)}}else ie=function(){y(Z,0)};function ue(V){B=V,L||(L=!0,ie())}function de(V,ae){J=y(function(){V(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,ue(G))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function(V){switch(_){case 1:case 2:case 3:var ae=3;break;default:ae=_}var ee=_;_=ae;try{return V()}finally{_=ee}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,ae){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ee=_;_=V;try{return ae()}finally{_=ee}},s.unstable_scheduleCallback=function(V,ae,ee){var I=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?I+ee:I):ee=I,V){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=ee+se,V={id:x++,callback:ae,priorityLevel:V,startTime:ee,expirationTime:se,sortIndex:-1},ee>I?(V.sortIndex=ee,e(p,V),n(m)===null&&V===n(p)&&(b?(g(J),J=-1):b=!0,de(U,ee-I))):(V.sortIndex=se,e(m,V),M||S||(M=!0,ue(G))),V},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(V){var ae=_;return function(){var ee=_;_=ae;try{return V.apply(this,arguments)}finally{_=ee}}}})(bu)),bu}var Np;function rg(){return Np||(Np=1,Eu.exports=ig()),Eu.exports}var Up;function sg(){if(Up)return Nn;Up=1;var s=Yd(),e=rg();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function _(t){return m.call(v,t)?!0:m.call(x,t)?!1:p.test(t)?v[t]=!0:(x[t]=!0,!1)}function S(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M(t,i,a,c){if(i===null||typeof i>"u"||S(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(t,i,a,c,d,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new b(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,N);y[i]=new b(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,N);y[i]=new b(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,N);y[i]=new b(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,c)&&(a=null),c||d===null?_(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var U=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),L=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),H=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),V=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,I;function se(t){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ne=!1;function ze(t,i){if(!t||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var c=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){c=te}t.call(i.prototype)}else{try{throw Error()}catch(te){c=te}t()}}catch(te){if(te&&c&&typeof te.stack=="string"){for(var d=te.stack.split(`
`),h=c.stack.split(`
`),E=d.length-1,D=h.length-1;1<=E&&0<=D&&d[E]!==h[D];)D--;for(;1<=E&&0<=D;E--,D--)if(d[E]!==h[D]){if(E!==1||D!==1)do if(E--,D--,0>D||d[E]!==h[D]){var k=`
`+d[E].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=E&&0<=D);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?se(t):""}function je(t){switch(t.tag){case 5:return se(t.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return t=ze(t.type,!1),t;case 11:return t=ze(t.type.render,!1),t;case 1:return t=ze(t.type,!0),t;default:return""}}function ne(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case L:return"Portal";case C:return"Profiler";case J:return"StrictMode";case ie:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case Z:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ce:return i=t.displayName||null,i!==null?i:ne(t.type)||"Memo";case ue:i=t._payload,t=t._init;try{return ne(t(i))}catch{}}return null}function le(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(i);case 8:return i===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Fe(t){var i=Ie(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ht(t){t._valueTracker||(t._valueTracker=Fe(t))}function $t(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=Ie(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dt(t,i){var a=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function F(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Se(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function gt(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function mt(t,i){gt(t,i);var a=Se(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ke(t,i.type,a):i.hasOwnProperty("defaultValue")&&ke(t,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ct(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function ke(t,i,a){(i!=="number"||dt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Rt=Array.isArray;function Xe(t,i,a,c){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&c&&(t[a].defaultSelected=!0)}else{for(a=""+Se(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function at(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function R(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Rt(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:Se(a)}}function T(t,i){var a=Se(i.value),c=Se(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function K(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oe,qe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(oe=oe||document.createElement("div"),oe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=oe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ae(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var $e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys($e).forEach(function(t){Ye.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),$e[i]=$e[t]})});function _e(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||$e.hasOwnProperty(t)&&$e[t]?(""+i).trim():i+"px"}function we(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=_e(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,d):t[a]=d}}var it=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(t,i){if(i){if(it[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function De(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rt=null;function z(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,Ee=null,be=null;function ye(t){if(t=ga(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=_o(i),Ce(t.stateNode,t.type,i))}}function pe(t){Ee?be?be.push(t):be=[t]:Ee=t}function Be(){if(Ee){var t=Ee,i=be;if(be=Ee=null,ye(t),i)for(t=0;t<i.length;t++)ye(i[t])}}function ot(t,i){return t(i)}function Lt(){}var Et=!1;function On(t,i,a){if(Et)return t(i,a);Et=!0;try{return ot(t,i,a)}finally{Et=!1,(Ee!==null||be!==null)&&(Lt(),Be())}}function dn(t,i){var a=t.stateNode;if(a===null)return null;var c=_o(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Qs=!1;if(f)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){Qs=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{Qs=!1}function Ka(t,i,a,c,d,h,E,D,k){var te=Array.prototype.slice.call(arguments,3);try{i.apply(a,te)}catch(ge){this.onError(ge)}}var zn=!1,Ki=null,Cr=!1,ts=null,ns={onError:function(t){zn=!0,Ki=t}};function $a(t,i,a,c,d,h,E,D,k){zn=!1,Ki=null,Ka.apply(ns,arguments)}function is(t,i,a,c,d,h,E,D,k){if($a.apply(this,arguments),zn){if(zn){var te=Ki;zn=!1,Ki=null}else throw Error(n(198));Cr||(Cr=!0,ts=te)}}function mi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function ea(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Za(t){if(mi(t)!==t)throw Error(n(188))}function Gl(t){var i=t.alternate;if(!i){if(i=mi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var d=a.return;if(d===null)break;var h=d.alternate;if(h===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===a)return Za(d),t;if(h===c)return Za(d),i;h=h.sibling}throw Error(n(188))}if(a.return!==c.return)a=d,c=h;else{for(var E=!1,D=d.child;D;){if(D===a){E=!0,a=d,c=h;break}if(D===c){E=!0,c=d,a=h;break}D=D.sibling}if(!E){for(D=h.child;D;){if(D===a){E=!0,a=h,c=d;break}if(D===c){E=!0,c=h,a=d;break}D=D.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Ja(t){return t=Gl(t),t!==null?Qa(t):null}function Qa(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Qa(t);if(i!==null)return i;t=t.sibling}return null}var eo=e.unstable_scheduleCallback,to=e.unstable_cancelCallback,w=e.unstable_shouldYield,j=e.unstable_requestPaint,q=e.unstable_now,re=e.unstable_getCurrentPriorityLevel,X=e.unstable_ImmediatePriority,Te=e.unstable_UserBlockingPriority,Re=e.unstable_NormalPriority,He=e.unstable_LowPriority,Ue=e.unstable_IdlePriority,et=null,Ke=null;function Je(t){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(et,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Bt,At=Math.log,kt=Math.LN2;function Bt(t){return t>>>=0,t===0?32:31-(At(t)/kt|0)|0}var bt=64,Ze=4194304;function Pt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vt(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,d=t.suspendedLanes,h=t.pingedLanes,E=a&268435455;if(E!==0){var D=E&~d;D!==0?c=Pt(D):(h&=E,h!==0&&(c=Pt(h)))}else E=a&~d,E!==0?c=Pt(E):h!==0&&(c=Pt(h));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-st(i),d=1<<a,c|=t[a],i&=~d;return c}function Mn(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $i(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-st(h),D=1<<E,k=d[E];k===-1?((D&a)===0||(D&c)!==0)&&(d[E]=Mn(D,i)):k<=i&&(t.expiredLanes|=D),h&=~D}}function fn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zi(){var t=bt;return bt<<=1,(bt&4194240)===0&&(bt=64),t}function It(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Zt(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-st(i),t[i]=a}function An(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-st(a),h=1<<d;i[d]=0,c[d]=-1,t[d]=-1,a&=~h}}function en(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-st(a),d=1<<c;d&i|t[c]&i&&(t[c]|=i),a&=~d}}var ut=0;function rs(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var xi,Wl,lf,cf,uf,jl=!1,no=[],Ji=null,Qi=null,er=null,ta=new Map,na=new Map,tr=[],S0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function df(t,i){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":ta.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(i.pointerId)}}function ia(t,i,a,c,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:h,targetContainers:[d]},i!==null&&(i=ga(i),i!==null&&Wl(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function M0(t,i,a,c,d){switch(i){case"focusin":return Ji=ia(Ji,t,i,a,c,d),!0;case"dragenter":return Qi=ia(Qi,t,i,a,c,d),!0;case"mouseover":return er=ia(er,t,i,a,c,d),!0;case"pointerover":var h=d.pointerId;return ta.set(h,ia(ta.get(h)||null,t,i,a,c,d)),!0;case"gotpointercapture":return h=d.pointerId,na.set(h,ia(na.get(h)||null,t,i,a,c,d)),!0}return!1}function ff(t){var i=Rr(t.target);if(i!==null){var a=mi(i);if(a!==null){if(i=a.tag,i===13){if(i=ea(a),i!==null){t.blockedOn=i,uf(t.priority,function(){lf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function io(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Yl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);rt=c,a.target.dispatchEvent(c),rt=null}else return i=ga(a),i!==null&&Wl(i),t.blockedOn=a,!1;i.shift()}return!0}function hf(t,i,a){io(t)&&a.delete(i)}function E0(){jl=!1,Ji!==null&&io(Ji)&&(Ji=null),Qi!==null&&io(Qi)&&(Qi=null),er!==null&&io(er)&&(er=null),ta.forEach(hf),na.forEach(hf)}function ra(t,i){t.blockedOn===i&&(t.blockedOn=null,jl||(jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,E0)))}function sa(t){function i(d){return ra(d,t)}if(0<no.length){ra(no[0],t);for(var a=1;a<no.length;a++){var c=no[a];c.blockedOn===t&&(c.blockedOn=null)}}for(Ji!==null&&ra(Ji,t),Qi!==null&&ra(Qi,t),er!==null&&ra(er,t),ta.forEach(i),na.forEach(i),a=0;a<tr.length;a++)c=tr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<tr.length&&(a=tr[0],a.blockedOn===null);)ff(a),a.blockedOn===null&&tr.shift()}var ss=U.ReactCurrentBatchConfig,ro=!0;function b0(t,i,a,c){var d=ut,h=ss.transition;ss.transition=null;try{ut=1,Xl(t,i,a,c)}finally{ut=d,ss.transition=h}}function T0(t,i,a,c){var d=ut,h=ss.transition;ss.transition=null;try{ut=4,Xl(t,i,a,c)}finally{ut=d,ss.transition=h}}function Xl(t,i,a,c){if(ro){var d=Yl(t,i,a,c);if(d===null)uc(t,i,c,so,a),df(t,c);else if(M0(d,t,i,a,c))c.stopPropagation();else if(df(t,c),i&4&&-1<S0.indexOf(t)){for(;d!==null;){var h=ga(d);if(h!==null&&xi(h),h=Yl(t,i,a,c),h===null&&uc(t,i,c,so,a),h===d)break;d=h}d!==null&&c.stopPropagation()}else uc(t,i,c,null,a)}}var so=null;function Yl(t,i,a,c){if(so=null,t=z(c),t=Rr(t),t!==null)if(i=mi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=ea(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return so=t,null}function pf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(re()){case X:return 1;case Te:return 4;case Re:case He:return 16;case Ue:return 536870912;default:return 16}default:return 16}}var nr=null,ql=null,ao=null;function mf(){if(ao)return ao;var t,i=ql,a=i.length,c,d="value"in nr?nr.value:nr.textContent,h=d.length;for(t=0;t<a&&i[t]===d[t];t++);var E=a-t;for(c=1;c<=E&&i[a-c]===d[h-c];c++);return ao=d.slice(t,1<c?1-c:void 0)}function oo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function xf(){return!1}function kn(t){function i(a,c,d,h,E){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?lo:xf,this.isPropagationStopped=xf,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=kn(as),aa=ee({},as,{view:0,detail:0}),w0=kn(aa),$l,Zl,oa,co=ee({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oa&&(oa&&t.type==="mousemove"?($l=t.screenX-oa.screenX,Zl=t.screenY-oa.screenY):Zl=$l=0,oa=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:Zl}}),gf=kn(co),A0=ee({},co,{dataTransfer:0}),C0=kn(A0),R0=ee({},aa,{relatedTarget:0}),Jl=kn(R0),P0=ee({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),D0=kn(P0),L0=ee({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),N0=kn(L0),U0=ee({},as,{data:0}),_f=kn(U0),I0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=O0[t])?!!i[t]:!1}function Ql(){return z0}var k0=ee({},aa,{key:function(t){if(t.key){var i=I0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?F0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(t){return t.type==="keypress"?oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),B0=kn(k0),V0=ee({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vf=kn(V0),H0=ee({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),G0=kn(H0),W0=ee({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=kn(W0),X0=ee({},co,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y0=kn(X0),q0=[9,13,27,32],ec=f&&"CompositionEvent"in window,la=null;f&&"documentMode"in document&&(la=document.documentMode);var K0=f&&"TextEvent"in window&&!la,yf=f&&(!ec||la&&8<la&&11>=la),Sf=" ",Mf=!1;function Ef(t,i){switch(t){case"keyup":return q0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function $0(t,i){switch(t){case"compositionend":return bf(i);case"keypress":return i.which!==32?null:(Mf=!0,Sf);case"textInput":return t=i.data,t===Sf&&Mf?null:t;default:return null}}function Z0(t,i){if(os)return t==="compositionend"||!ec&&Ef(t,i)?(t=mf(),ao=ql=nr=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return yf&&i.locale!=="ko"?null:i.data;default:return null}}var J0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!J0[t.type]:i==="textarea"}function wf(t,i,a,c){pe(c),i=mo(i,"onChange"),0<i.length&&(a=new Kl("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var ca=null,ua=null;function Q0(t){Wf(t,0)}function uo(t){var i=fs(t);if($t(i))return t}function ex(t,i){if(t==="change")return i}var Af=!1;if(f){var tc;if(f){var nc="oninput"in document;if(!nc){var Cf=document.createElement("div");Cf.setAttribute("oninput","return;"),nc=typeof Cf.oninput=="function"}tc=nc}else tc=!1;Af=tc&&(!document.documentMode||9<document.documentMode)}function Rf(){ca&&(ca.detachEvent("onpropertychange",Pf),ua=ca=null)}function Pf(t){if(t.propertyName==="value"&&uo(ua)){var i=[];wf(i,ua,t,z(t)),On(Q0,i)}}function tx(t,i,a){t==="focusin"?(Rf(),ca=i,ua=a,ca.attachEvent("onpropertychange",Pf)):t==="focusout"&&Rf()}function nx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uo(ua)}function ix(t,i){if(t==="click")return uo(i)}function rx(t,i){if(t==="input"||t==="change")return uo(i)}function sx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ni=typeof Object.is=="function"?Object.is:sx;function da(t,i){if(ni(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(i,d)||!ni(t[d],i[d]))return!1}return!0}function Df(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lf(t,i){var a=Df(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Df(a)}}function Nf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Nf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Uf(){for(var t=window,i=dt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=dt(t.document)}return i}function ic(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function ax(t){var i=Uf(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Nf(a.ownerDocument.documentElement,a)){if(c!==null&&ic(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,h=Math.min(c.start,d);c=c.end===void 0?h:Math.min(c.end,d),!t.extend&&h>c&&(d=c,c=h,h=d),d=Lf(a,h);var E=Lf(a,c);d&&E&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>c?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ox=f&&"documentMode"in document&&11>=document.documentMode,ls=null,rc=null,fa=null,sc=!1;function If(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sc||ls==null||ls!==dt(c)||(c=ls,"selectionStart"in c&&ic(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),fa&&da(fa,c)||(fa=c,c=mo(rc,"onSelect"),0<c.length&&(i=new Kl("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=ls)))}function fo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var cs={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},ac={},Ff={};f&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function ho(t){if(ac[t])return ac[t];if(!cs[t])return t;var i=cs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ff)return ac[t]=i[a];return t}var Of=ho("animationend"),zf=ho("animationiteration"),kf=ho("animationstart"),Bf=ho("transitionend"),Vf=new Map,Hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,i){Vf.set(t,i),l(i,[t])}for(var oc=0;oc<Hf.length;oc++){var lc=Hf[oc],lx=lc.toLowerCase(),cx=lc[0].toUpperCase()+lc.slice(1);ir(lx,"on"+cx)}ir(Of,"onAnimationEnd"),ir(zf,"onAnimationIteration"),ir(kf,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(Bf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function Gf(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,is(c,i,void 0,t),t.currentTarget=null}function Wf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],d=c.event;c=c.listeners;e:{var h=void 0;if(i)for(var E=c.length-1;0<=E;E--){var D=c[E],k=D.instance,te=D.currentTarget;if(D=D.listener,k!==h&&d.isPropagationStopped())break e;Gf(d,D,te),h=k}else for(E=0;E<c.length;E++){if(D=c[E],k=D.instance,te=D.currentTarget,D=D.listener,k!==h&&d.isPropagationStopped())break e;Gf(d,D,te),h=k}}}if(Cr)throw t=ts,Cr=!1,ts=null,t}function Ot(t,i){var a=i[xc];a===void 0&&(a=i[xc]=new Set);var c=t+"__bubble";a.has(c)||(jf(i,t,2,!1),a.add(c))}function cc(t,i,a){var c=0;i&&(c|=4),jf(a,t,c,i)}var po="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[po]){t[po]=!0,r.forEach(function(a){a!=="selectionchange"&&(ux.has(a)||cc(a,!1,t),cc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[po]||(i[po]=!0,cc("selectionchange",!1,i))}}function jf(t,i,a,c){switch(pf(i)){case 1:var d=b0;break;case 4:d=T0;break;default:d=Xl}a=d.bind(null,i,a,t),d=void 0,!Qs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function uc(t,i,a,c,d){var h=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var D=c.stateNode.containerInfo;if(D===d||D.nodeType===8&&D.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;E=E.return}for(;D!==null;){if(E=Rr(D),E===null)return;if(k=E.tag,k===5||k===6){c=h=E;continue e}D=D.parentNode}}c=c.return}On(function(){var te=h,ge=z(a),ve=[];e:{var xe=Vf.get(t);if(xe!==void 0){var Le=Kl,Ve=t;switch(t){case"keypress":if(oo(a)===0)break e;case"keydown":case"keyup":Le=B0;break;case"focusin":Ve="focus",Le=Jl;break;case"focusout":Ve="blur",Le=Jl;break;case"beforeblur":case"afterblur":Le=Jl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=C0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=G0;break;case Of:case zf:case kf:Le=D0;break;case Bf:Le=j0;break;case"scroll":Le=w0;break;case"wheel":Le=Y0;break;case"copy":case"cut":case"paste":Le=N0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=vf}var Ge=(i&4)!==0,qt=!Ge&&t==="scroll",Y=Ge?xe!==null?xe+"Capture":null:xe;Ge=[];for(var W=te,$;W!==null;){$=W;var Me=$.stateNode;if($.tag===5&&Me!==null&&($=Me,Y!==null&&(Me=dn(W,Y),Me!=null&&Ge.push(ma(W,Me,$)))),qt)break;W=W.return}0<Ge.length&&(xe=new Le(xe,Ve,null,a,ge),ve.push({event:xe,listeners:Ge}))}}if((i&7)===0){e:{if(xe=t==="mouseover"||t==="pointerover",Le=t==="mouseout"||t==="pointerout",xe&&a!==rt&&(Ve=a.relatedTarget||a.fromElement)&&(Rr(Ve)||Ve[Ci]))break e;if((Le||xe)&&(xe=ge.window===ge?ge:(xe=ge.ownerDocument)?xe.defaultView||xe.parentWindow:window,Le?(Ve=a.relatedTarget||a.toElement,Le=te,Ve=Ve?Rr(Ve):null,Ve!==null&&(qt=mi(Ve),Ve!==qt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Le=null,Ve=te),Le!==Ve)){if(Ge=gf,Me="onMouseLeave",Y="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(Ge=vf,Me="onPointerLeave",Y="onPointerEnter",W="pointer"),qt=Le==null?xe:fs(Le),$=Ve==null?xe:fs(Ve),xe=new Ge(Me,W+"leave",Le,a,ge),xe.target=qt,xe.relatedTarget=$,Me=null,Rr(ge)===te&&(Ge=new Ge(Y,W+"enter",Ve,a,ge),Ge.target=$,Ge.relatedTarget=qt,Me=Ge),qt=Me,Le&&Ve)t:{for(Ge=Le,Y=Ve,W=0,$=Ge;$;$=us($))W++;for($=0,Me=Y;Me;Me=us(Me))$++;for(;0<W-$;)Ge=us(Ge),W--;for(;0<$-W;)Y=us(Y),$--;for(;W--;){if(Ge===Y||Y!==null&&Ge===Y.alternate)break t;Ge=us(Ge),Y=us(Y)}Ge=null}else Ge=null;Le!==null&&Xf(ve,xe,Le,Ge,!1),Ve!==null&&qt!==null&&Xf(ve,qt,Ve,Ge,!0)}}e:{if(xe=te?fs(te):window,Le=xe.nodeName&&xe.nodeName.toLowerCase(),Le==="select"||Le==="input"&&xe.type==="file")var We=ex;else if(Tf(xe))if(Af)We=rx;else{We=nx;var tt=tx}else(Le=xe.nodeName)&&Le.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(We=ix);if(We&&(We=We(t,te))){wf(ve,We,a,ge);break e}tt&&tt(t,xe,te),t==="focusout"&&(tt=xe._wrapperState)&&tt.controlled&&xe.type==="number"&&ke(xe,"number",xe.value)}switch(tt=te?fs(te):window,t){case"focusin":(Tf(tt)||tt.contentEditable==="true")&&(ls=tt,rc=te,fa=null);break;case"focusout":fa=rc=ls=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,If(ve,a,ge);break;case"selectionchange":if(ox)break;case"keydown":case"keyup":If(ve,a,ge)}var nt;if(ec)e:{switch(t){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else os?Ef(t,a)&&(lt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(yf&&a.locale!=="ko"&&(os||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&os&&(nt=mf()):(nr=ge,ql="value"in nr?nr.value:nr.textContent,os=!0)),tt=mo(te,lt),0<tt.length&&(lt=new _f(lt,t,null,a,ge),ve.push({event:lt,listeners:tt}),nt?lt.data=nt:(nt=bf(a),nt!==null&&(lt.data=nt)))),(nt=K0?$0(t,a):Z0(t,a))&&(te=mo(te,"onBeforeInput"),0<te.length&&(ge=new _f("onBeforeInput","beforeinput",null,a,ge),ve.push({event:ge,listeners:te}),ge.data=nt))}Wf(ve,i)})}function ma(t,i,a){return{instance:t,listener:i,currentTarget:a}}function mo(t,i){for(var a=i+"Capture",c=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=dn(t,a),h!=null&&c.unshift(ma(t,h,d)),h=dn(t,i),h!=null&&c.push(ma(t,h,d))),t=t.return}return c}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xf(t,i,a,c,d){for(var h=i._reactName,E=[];a!==null&&a!==c;){var D=a,k=D.alternate,te=D.stateNode;if(k!==null&&k===c)break;D.tag===5&&te!==null&&(D=te,d?(k=dn(a,h),k!=null&&E.unshift(ma(a,k,D))):d||(k=dn(a,h),k!=null&&E.push(ma(a,k,D)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var dx=/\r\n?/g,fx=/\u0000|\uFFFD/g;function Yf(t){return(typeof t=="string"?t:""+t).replace(dx,`
`).replace(fx,"")}function xo(t,i,a){if(i=Yf(i),Yf(t)!==i&&a)throw Error(n(425))}function go(){}var dc=null,fc=null;function hc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var pc=typeof setTimeout=="function"?setTimeout:void 0,hx=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,px=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(t){return qf.resolve(null).then(t).catch(mx)}:pc;function mx(t){setTimeout(function(){throw t})}function mc(t,i){var a=i,c=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){t.removeChild(d),sa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);sa(i)}function rr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Kf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ds=Math.random().toString(36).slice(2),gi="__reactFiber$"+ds,xa="__reactProps$"+ds,Ci="__reactContainer$"+ds,xc="__reactEvents$"+ds,xx="__reactListeners$"+ds,gx="__reactHandles$"+ds;function Rr(t){var i=t[gi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ci]||a[gi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Kf(t);t!==null;){if(a=t[gi])return a;t=Kf(t)}return i}t=a,a=t.parentNode}return null}function ga(t){return t=t[gi]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function _o(t){return t[xa]||null}var gc=[],hs=-1;function sr(t){return{current:t}}function zt(t){0>hs||(t.current=gc[hs],gc[hs]=null,hs--)}function Ft(t,i){hs++,gc[hs]=t.current,t.current=i}var ar={},xn=sr(ar),Cn=sr(!1),Pr=ar;function ps(t,i){var a=t.type.contextTypes;if(!a)return ar;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in a)d[h]=i[h];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Rn(t){return t=t.childContextTypes,t!=null}function vo(){zt(Cn),zt(xn)}function $f(t,i,a){if(xn.current!==ar)throw Error(n(168));Ft(xn,i),Ft(Cn,a)}function Zf(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,le(t)||"Unknown",d));return ee({},a,c)}function yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Pr=xn.current,Ft(xn,t),Ft(Cn,Cn.current),!0}function Jf(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=Zf(t,i,Pr),c.__reactInternalMemoizedMergedChildContext=t,zt(Cn),zt(xn),Ft(xn,t)):zt(Cn),Ft(Cn,a)}var Ri=null,So=!1,_c=!1;function Qf(t){Ri===null?Ri=[t]:Ri.push(t)}function _x(t){So=!0,Qf(t)}function or(){if(!_c&&Ri!==null){_c=!0;var t=0,i=ut;try{var a=Ri;for(ut=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Ri=null,So=!1}catch(d){throw Ri!==null&&(Ri=Ri.slice(t+1)),eo(X,or),d}finally{ut=i,_c=!1}}return null}var ms=[],xs=0,Mo=null,Eo=0,Xn=[],Yn=0,Dr=null,Pi=1,Di="";function Lr(t,i){ms[xs++]=Eo,ms[xs++]=Mo,Mo=t,Eo=i}function eh(t,i,a){Xn[Yn++]=Pi,Xn[Yn++]=Di,Xn[Yn++]=Dr,Dr=t;var c=Pi;t=Di;var d=32-st(c)-1;c&=~(1<<d),a+=1;var h=32-st(i)+d;if(30<h){var E=d-d%5;h=(c&(1<<E)-1).toString(32),c>>=E,d-=E,Pi=1<<32-st(i)+d|a<<d|c,Di=h+t}else Pi=1<<h|a<<d|c,Di=t}function vc(t){t.return!==null&&(Lr(t,1),eh(t,1,0))}function yc(t){for(;t===Mo;)Mo=ms[--xs],ms[xs]=null,Eo=ms[--xs],ms[xs]=null;for(;t===Dr;)Dr=Xn[--Yn],Xn[Yn]=null,Di=Xn[--Yn],Xn[Yn]=null,Pi=Xn[--Yn],Xn[Yn]=null}var Bn=null,Vn=null,Vt=!1,ii=null;function th(t,i){var a=Zn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function nh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Bn=t,Vn=rr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Bn=t,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Dr!==null?{id:Pi,overflow:Di}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Zn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Bn=t,Vn=null,!0):!1;default:return!1}}function Sc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mc(t){if(Vt){var i=Vn;if(i){var a=i;if(!nh(t,i)){if(Sc(t))throw Error(n(418));i=rr(a.nextSibling);var c=Bn;i&&nh(t,i)?th(c,a):(t.flags=t.flags&-4097|2,Vt=!1,Bn=t)}}else{if(Sc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Vt=!1,Bn=t}}}function ih(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bn=t}function bo(t){if(t!==Bn)return!1;if(!Vt)return ih(t),Vt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!hc(t.type,t.memoizedProps)),i&&(i=Vn)){if(Sc(t))throw rh(),Error(n(418));for(;i;)th(t,i),i=rr(i.nextSibling)}if(ih(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Vn=rr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Vn=null}}else Vn=Bn?rr(t.stateNode.nextSibling):null;return!0}function rh(){for(var t=Vn;t;)t=rr(t.nextSibling)}function gs(){Vn=Bn=null,Vt=!1}function Ec(t){ii===null?ii=[t]:ii.push(t)}var vx=U.ReactCurrentBatchConfig;function _a(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var d=c,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var D=d.refs;E===null?delete D[h]:D[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function To(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function sh(t){var i=t._init;return i(t._payload)}function ah(t){function i(Y,W){if(t){var $=Y.deletions;$===null?(Y.deletions=[W],Y.flags|=16):$.push(W)}}function a(Y,W){if(!t)return null;for(;W!==null;)i(Y,W),W=W.sibling;return null}function c(Y,W){for(Y=new Map;W!==null;)W.key!==null?Y.set(W.key,W):Y.set(W.index,W),W=W.sibling;return Y}function d(Y,W){return Y=mr(Y,W),Y.index=0,Y.sibling=null,Y}function h(Y,W,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<W?(Y.flags|=2,W):$):(Y.flags|=2,W)):(Y.flags|=1048576,W)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function D(Y,W,$,Me){return W===null||W.tag!==6?(W=pu($,Y.mode,Me),W.return=Y,W):(W=d(W,$),W.return=Y,W)}function k(Y,W,$,Me){var We=$.type;return We===B?ge(Y,W,$.props.children,Me,$.key):W!==null&&(W.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ue&&sh(We)===W.type)?(Me=d(W,$.props),Me.ref=_a(Y,W,$),Me.return=Y,Me):(Me=Ko($.type,$.key,$.props,null,Y.mode,Me),Me.ref=_a(Y,W,$),Me.return=Y,Me)}function te(Y,W,$,Me){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=mu($,Y.mode,Me),W.return=Y,W):(W=d(W,$.children||[]),W.return=Y,W)}function ge(Y,W,$,Me,We){return W===null||W.tag!==7?(W=Br($,Y.mode,Me,We),W.return=Y,W):(W=d(W,$),W.return=Y,W)}function ve(Y,W,$){if(typeof W=="string"&&W!==""||typeof W=="number")return W=pu(""+W,Y.mode,$),W.return=Y,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case G:return $=Ko(W.type,W.key,W.props,null,Y.mode,$),$.ref=_a(Y,null,W),$.return=Y,$;case L:return W=mu(W,Y.mode,$),W.return=Y,W;case ue:var Me=W._init;return ve(Y,Me(W._payload),$)}if(Rt(W)||ae(W))return W=Br(W,Y.mode,$,null),W.return=Y,W;To(Y,W)}return null}function xe(Y,W,$,Me){var We=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return We!==null?null:D(Y,W,""+$,Me);if(typeof $=="object"&&$!==null){switch($.$$typeof){case G:return $.key===We?k(Y,W,$,Me):null;case L:return $.key===We?te(Y,W,$,Me):null;case ue:return We=$._init,xe(Y,W,We($._payload),Me)}if(Rt($)||ae($))return We!==null?null:ge(Y,W,$,Me,null);To(Y,$)}return null}function Le(Y,W,$,Me,We){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return Y=Y.get($)||null,D(W,Y,""+Me,We);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case G:return Y=Y.get(Me.key===null?$:Me.key)||null,k(W,Y,Me,We);case L:return Y=Y.get(Me.key===null?$:Me.key)||null,te(W,Y,Me,We);case ue:var tt=Me._init;return Le(Y,W,$,tt(Me._payload),We)}if(Rt(Me)||ae(Me))return Y=Y.get($)||null,ge(W,Y,Me,We,null);To(W,Me)}return null}function Ve(Y,W,$,Me){for(var We=null,tt=null,nt=W,lt=W=0,cn=null;nt!==null&&lt<$.length;lt++){nt.index>lt?(cn=nt,nt=null):cn=nt.sibling;var Tt=xe(Y,nt,$[lt],Me);if(Tt===null){nt===null&&(nt=cn);break}t&&nt&&Tt.alternate===null&&i(Y,nt),W=h(Tt,W,lt),tt===null?We=Tt:tt.sibling=Tt,tt=Tt,nt=cn}if(lt===$.length)return a(Y,nt),Vt&&Lr(Y,lt),We;if(nt===null){for(;lt<$.length;lt++)nt=ve(Y,$[lt],Me),nt!==null&&(W=h(nt,W,lt),tt===null?We=nt:tt.sibling=nt,tt=nt);return Vt&&Lr(Y,lt),We}for(nt=c(Y,nt);lt<$.length;lt++)cn=Le(nt,Y,lt,$[lt],Me),cn!==null&&(t&&cn.alternate!==null&&nt.delete(cn.key===null?lt:cn.key),W=h(cn,W,lt),tt===null?We=cn:tt.sibling=cn,tt=cn);return t&&nt.forEach(function(xr){return i(Y,xr)}),Vt&&Lr(Y,lt),We}function Ge(Y,W,$,Me){var We=ae($);if(typeof We!="function")throw Error(n(150));if($=We.call($),$==null)throw Error(n(151));for(var tt=We=null,nt=W,lt=W=0,cn=null,Tt=$.next();nt!==null&&!Tt.done;lt++,Tt=$.next()){nt.index>lt?(cn=nt,nt=null):cn=nt.sibling;var xr=xe(Y,nt,Tt.value,Me);if(xr===null){nt===null&&(nt=cn);break}t&&nt&&xr.alternate===null&&i(Y,nt),W=h(xr,W,lt),tt===null?We=xr:tt.sibling=xr,tt=xr,nt=cn}if(Tt.done)return a(Y,nt),Vt&&Lr(Y,lt),We;if(nt===null){for(;!Tt.done;lt++,Tt=$.next())Tt=ve(Y,Tt.value,Me),Tt!==null&&(W=h(Tt,W,lt),tt===null?We=Tt:tt.sibling=Tt,tt=Tt);return Vt&&Lr(Y,lt),We}for(nt=c(Y,nt);!Tt.done;lt++,Tt=$.next())Tt=Le(nt,Y,lt,Tt.value,Me),Tt!==null&&(t&&Tt.alternate!==null&&nt.delete(Tt.key===null?lt:Tt.key),W=h(Tt,W,lt),tt===null?We=Tt:tt.sibling=Tt,tt=Tt);return t&&nt.forEach(function(Jx){return i(Y,Jx)}),Vt&&Lr(Y,lt),We}function qt(Y,W,$,Me){if(typeof $=="object"&&$!==null&&$.type===B&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case G:e:{for(var We=$.key,tt=W;tt!==null;){if(tt.key===We){if(We=$.type,We===B){if(tt.tag===7){a(Y,tt.sibling),W=d(tt,$.props.children),W.return=Y,Y=W;break e}}else if(tt.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ue&&sh(We)===tt.type){a(Y,tt.sibling),W=d(tt,$.props),W.ref=_a(Y,tt,$),W.return=Y,Y=W;break e}a(Y,tt);break}else i(Y,tt);tt=tt.sibling}$.type===B?(W=Br($.props.children,Y.mode,Me,$.key),W.return=Y,Y=W):(Me=Ko($.type,$.key,$.props,null,Y.mode,Me),Me.ref=_a(Y,W,$),Me.return=Y,Y=Me)}return E(Y);case L:e:{for(tt=$.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){a(Y,W.sibling),W=d(W,$.children||[]),W.return=Y,Y=W;break e}else{a(Y,W);break}else i(Y,W);W=W.sibling}W=mu($,Y.mode,Me),W.return=Y,Y=W}return E(Y);case ue:return tt=$._init,qt(Y,W,tt($._payload),Me)}if(Rt($))return Ve(Y,W,$,Me);if(ae($))return Ge(Y,W,$,Me);To(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,W!==null&&W.tag===6?(a(Y,W.sibling),W=d(W,$),W.return=Y,Y=W):(a(Y,W),W=pu($,Y.mode,Me),W.return=Y,Y=W),E(Y)):a(Y,W)}return qt}var _s=ah(!0),oh=ah(!1),wo=sr(null),Ao=null,vs=null,bc=null;function Tc(){bc=vs=Ao=null}function wc(t){var i=wo.current;zt(wo),t._currentValue=i}function Ac(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function ys(t,i){Ao=t,bc=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Pn=!0),t.firstContext=null)}function qn(t){var i=t._currentValue;if(bc!==t)if(t={context:t,memoizedValue:i,next:null},vs===null){if(Ao===null)throw Error(n(308));vs=t,Ao.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return i}var Nr=null;function Cc(t){Nr===null?Nr=[t]:Nr.push(t)}function lh(t,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Cc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Li(t,c)}function Li(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var lr=!1;function Rc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ch(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Mt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Li(t,a)}return d=c.interleaved,d===null?(i.next=i,Cc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Li(t,a)}function Co(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,en(t,a)}}function uh(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?d=h=E:h=h.next=E,a=a.next}while(a!==null);h===null?d=h=i:h=h.next=i}else d=h=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Ro(t,i,a,c){var d=t.updateQueue;lr=!1;var h=d.firstBaseUpdate,E=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var k=D,te=k.next;k.next=null,E===null?h=te:E.next=te,E=k;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,D=ge.lastBaseUpdate,D!==E&&(D===null?ge.firstBaseUpdate=te:D.next=te,ge.lastBaseUpdate=k))}if(h!==null){var ve=d.baseState;E=0,ge=te=k=null,D=h;do{var xe=D.lane,Le=D.eventTime;if((c&xe)===xe){ge!==null&&(ge=ge.next={eventTime:Le,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Ve=t,Ge=D;switch(xe=i,Le=a,Ge.tag){case 1:if(Ve=Ge.payload,typeof Ve=="function"){ve=Ve.call(Le,ve,xe);break e}ve=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=Ge.payload,xe=typeof Ve=="function"?Ve.call(Le,ve,xe):Ve,xe==null)break e;ve=ee({},ve,xe);break e;case 2:lr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,xe=d.effects,xe===null?d.effects=[D]:xe.push(D))}else Le={eventTime:Le,lane:xe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ge===null?(te=ge=Le,k=ve):ge=ge.next=Le,E|=xe;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;xe=D,D=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);if(ge===null&&(k=ve),d.baseState=k,d.firstBaseUpdate=te,d.lastBaseUpdate=ge,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);Fr|=E,t.lanes=E,t.memoizedState=ve}}function dh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var va={},_i=sr(va),ya=sr(va),Sa=sr(va);function Ur(t){if(t===va)throw Error(n(174));return t}function Pc(t,i){switch(Ft(Sa,i),Ft(ya,t),Ft(_i,va),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=me(i,t)}zt(_i),Ft(_i,i)}function Ss(){zt(_i),zt(ya),zt(Sa)}function fh(t){Ur(Sa.current);var i=Ur(_i.current),a=me(i,t.type);i!==a&&(Ft(ya,t),Ft(_i,a))}function Dc(t){ya.current===t&&(zt(_i),zt(ya))}var Gt=sr(0);function Po(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Lc=[];function Nc(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var Do=U.ReactCurrentDispatcher,Uc=U.ReactCurrentBatchConfig,Ir=0,Wt=null,tn=null,on=null,Lo=!1,Ma=!1,Ea=0,yx=0;function gn(){throw Error(n(321))}function Ic(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ni(t[a],i[a]))return!1;return!0}function Fc(t,i,a,c,d,h){if(Ir=h,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Do.current=t===null||t.memoizedState===null?bx:Tx,t=a(c,d),Ma){h=0;do{if(Ma=!1,Ea=0,25<=h)throw Error(n(301));h+=1,on=tn=null,i.updateQueue=null,Do.current=wx,t=a(c,d)}while(Ma)}if(Do.current=Io,i=tn!==null&&tn.next!==null,Ir=0,on=tn=Wt=null,Lo=!1,i)throw Error(n(300));return t}function Oc(){var t=Ea!==0;return Ea=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Wt.memoizedState=on=t:on=on.next=t,on}function Kn(){if(tn===null){var t=Wt.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var i=on===null?Wt.memoizedState:on.next;if(i!==null)on=i,tn=t;else{if(t===null)throw Error(n(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},on===null?Wt.memoizedState=on=t:on=on.next=t}return on}function ba(t,i){return typeof i=="function"?i(t):i}function zc(t){var i=Kn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=tn,d=c.baseQueue,h=a.pending;if(h!==null){if(d!==null){var E=d.next;d.next=h.next,h.next=E}c.baseQueue=d=h,a.pending=null}if(d!==null){h=d.next,c=c.baseState;var D=E=null,k=null,te=h;do{var ge=te.lane;if((Ir&ge)===ge)k!==null&&(k=k.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),c=te.hasEagerState?te.eagerState:t(c,te.action);else{var ve={lane:ge,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};k===null?(D=k=ve,E=c):k=k.next=ve,Wt.lanes|=ge,Fr|=ge}te=te.next}while(te!==null&&te!==h);k===null?E=c:k.next=D,ni(c,i.memoizedState)||(Pn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=k,a.lastRenderedState=c}if(t=a.interleaved,t!==null){d=t;do h=d.lane,Wt.lanes|=h,Fr|=h,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function kc(t){var i=Kn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,d=a.pending,h=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do h=t(h,E.action),E=E.next;while(E!==d);ni(h,i.memoizedState)||(Pn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,c]}function hh(){}function ph(t,i){var a=Wt,c=Kn(),d=i(),h=!ni(c.memoizedState,d);if(h&&(c.memoizedState=d,Pn=!0),c=c.queue,Bc(gh.bind(null,a,c,t),[t]),c.getSnapshot!==i||h||on!==null&&on.memoizedState.tag&1){if(a.flags|=2048,Ta(9,xh.bind(null,a,c,d,i),void 0,null),ln===null)throw Error(n(349));(Ir&30)!==0||mh(a,i,d)}return d}function mh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function xh(t,i,a,c){i.value=a,i.getSnapshot=c,_h(i)&&vh(t)}function gh(t,i,a){return a(function(){_h(i)&&vh(t)})}function _h(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ni(t,a)}catch{return!0}}function vh(t){var i=Li(t,1);i!==null&&oi(i,t,1,-1)}function yh(t){var i=vi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},i.queue=t,t=t.dispatch=Ex.bind(null,Wt,t),[i.memoizedState,t]}function Ta(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function Sh(){return Kn().memoizedState}function No(t,i,a,c){var d=vi();Wt.flags|=t,d.memoizedState=Ta(1|i,a,void 0,c===void 0?null:c)}function Uo(t,i,a,c){var d=Kn();c=c===void 0?null:c;var h=void 0;if(tn!==null){var E=tn.memoizedState;if(h=E.destroy,c!==null&&Ic(c,E.deps)){d.memoizedState=Ta(i,a,h,c);return}}Wt.flags|=t,d.memoizedState=Ta(1|i,a,h,c)}function Mh(t,i){return No(8390656,8,t,i)}function Bc(t,i){return Uo(2048,8,t,i)}function Eh(t,i){return Uo(4,2,t,i)}function bh(t,i){return Uo(4,4,t,i)}function Th(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function wh(t,i,a){return a=a!=null?a.concat([t]):null,Uo(4,4,Th.bind(null,i,t),a)}function Vc(){}function Ah(t,i){var a=Kn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ic(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function Ch(t,i){var a=Kn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ic(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function Rh(t,i,a){return(Ir&21)===0?(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=a):(ni(a,i)||(a=Zi(),Wt.lanes|=a,Fr|=a,t.baseState=!0),i)}function Sx(t,i){var a=ut;ut=a!==0&&4>a?a:4,t(!0);var c=Uc.transition;Uc.transition={};try{t(!1),i()}finally{ut=a,Uc.transition=c}}function Ph(){return Kn().memoizedState}function Mx(t,i,a){var c=hr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Dh(t))Lh(i,a);else if(a=lh(t,i,a,c),a!==null){var d=bn();oi(a,t,c,d),Nh(a,i,c)}}function Ex(t,i,a){var c=hr(t),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dh(t))Lh(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,D=h(E,a);if(d.hasEagerState=!0,d.eagerState=D,ni(D,E)){var k=i.interleaved;k===null?(d.next=d,Cc(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}a=lh(t,i,d,c),a!==null&&(d=bn(),oi(a,t,c,d),Nh(a,i,c))}}function Dh(t){var i=t.alternate;return t===Wt||i!==null&&i===Wt}function Lh(t,i){Ma=Lo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Nh(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,en(t,a)}}var Io={readContext:qn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},bx={readContext:qn,useCallback:function(t,i){return vi().memoizedState=[t,i===void 0?null:i],t},useContext:qn,useEffect:Mh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,No(4194308,4,Th.bind(null,i,t),a)},useLayoutEffect:function(t,i){return No(4194308,4,t,i)},useInsertionEffect:function(t,i){return No(4,2,t,i)},useMemo:function(t,i){var a=vi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=vi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=Mx.bind(null,Wt,t),[c.memoizedState,t]},useRef:function(t){var i=vi();return t={current:t},i.memoizedState=t},useState:yh,useDebugValue:Vc,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=yh(!1),i=t[0];return t=Sx.bind(null,t[1]),vi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=Wt,d=vi();if(Vt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),ln===null)throw Error(n(349));(Ir&30)!==0||mh(c,i,a)}d.memoizedState=a;var h={value:a,getSnapshot:i};return d.queue=h,Mh(gh.bind(null,c,h,t),[t]),c.flags|=2048,Ta(9,xh.bind(null,c,h,a,i),void 0,null),a},useId:function(){var t=vi(),i=ln.identifierPrefix;if(Vt){var a=Di,c=Pi;a=(c&~(1<<32-st(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ea++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=yx++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Tx={readContext:qn,useCallback:Ah,useContext:qn,useEffect:Bc,useImperativeHandle:wh,useInsertionEffect:Eh,useLayoutEffect:bh,useMemo:Ch,useReducer:zc,useRef:Sh,useState:function(){return zc(ba)},useDebugValue:Vc,useDeferredValue:function(t){var i=Kn();return Rh(i,tn.memoizedState,t)},useTransition:function(){var t=zc(ba)[0],i=Kn().memoizedState;return[t,i]},useMutableSource:hh,useSyncExternalStore:ph,useId:Ph,unstable_isNewReconciler:!1},wx={readContext:qn,useCallback:Ah,useContext:qn,useEffect:Bc,useImperativeHandle:wh,useInsertionEffect:Eh,useLayoutEffect:bh,useMemo:Ch,useReducer:kc,useRef:Sh,useState:function(){return kc(ba)},useDebugValue:Vc,useDeferredValue:function(t){var i=Kn();return tn===null?i.memoizedState=t:Rh(i,tn.memoizedState,t)},useTransition:function(){var t=kc(ba)[0],i=Kn().memoizedState;return[t,i]},useMutableSource:hh,useSyncExternalStore:ph,useId:Ph,unstable_isNewReconciler:!1};function ri(t,i){if(t&&t.defaultProps){i=ee({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Hc(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:ee({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Fo={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=bn(),d=hr(t),h=Ni(c,d);h.payload=i,a!=null&&(h.callback=a),i=cr(t,h,d),i!==null&&(oi(i,t,d,c),Co(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=bn(),d=hr(t),h=Ni(c,d);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=cr(t,h,d),i!==null&&(oi(i,t,d,c),Co(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=bn(),c=hr(t),d=Ni(a,c);d.tag=2,i!=null&&(d.callback=i),i=cr(t,d,c),i!==null&&(oi(i,t,c,a),Co(i,t,c))}};function Uh(t,i,a,c,d,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,h,E):i.prototype&&i.prototype.isPureReactComponent?!da(a,c)||!da(d,h):!0}function Ih(t,i,a){var c=!1,d=ar,h=i.contextType;return typeof h=="object"&&h!==null?h=qn(h):(d=Rn(i)?Pr:xn.current,c=i.contextTypes,h=(c=c!=null)?ps(t,d):ar),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function Fh(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&Fo.enqueueReplaceState(i,i.state,null)}function Gc(t,i,a,c){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Rc(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=qn(h):(h=Rn(i)?Pr:xn.current,d.context=ps(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Hc(t,i,h,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Fo.enqueueReplaceState(d,d.state,null),Ro(t,a,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,i){try{var a="",c=i;do a+=je(c),c=c.return;while(c);var d=a}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Wc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function jc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Ax=typeof WeakMap=="function"?WeakMap:Map;function Oh(t,i,a){a=Ni(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Go||(Go=!0,au=c),jc(t,i)},a}function zh(t,i,a){a=Ni(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){jc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){jc(t,i),typeof c!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function kh(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new Ax;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),t=Vx.bind(null,t,i,a),i.then(t,t))}function Bh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Vh(t,i,a,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ni(-1,1),i.tag=2,cr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Cx=U.ReactCurrentOwner,Pn=!1;function En(t,i,a,c){i.child=t===null?oh(i,null,a,c):_s(i,t.child,a,c)}function Hh(t,i,a,c,d){a=a.render;var h=i.ref;return ys(i,d),c=Fc(t,i,a,c,h,d),a=Oc(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ui(t,i,d)):(Vt&&a&&vc(i),i.flags|=1,En(t,i,c,d),i.child)}function Gh(t,i,a,c,d){if(t===null){var h=a.type;return typeof h=="function"&&!hu(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,Wh(t,i,h,c,d)):(t=Ko(a.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var E=h.memoizedProps;if(a=a.compare,a=a!==null?a:da,a(E,c)&&t.ref===i.ref)return Ui(t,i,d)}return i.flags|=1,t=mr(h,c),t.ref=i.ref,t.return=i,i.child=t}function Wh(t,i,a,c,d){if(t!==null){var h=t.memoizedProps;if(da(h,c)&&t.ref===i.ref)if(Pn=!1,i.pendingProps=c=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Pn=!0);else return i.lanes=t.lanes,Ui(t,i,d)}return Xc(t,i,a,c,d)}function jh(t,i,a){var c=i.pendingProps,d=c.children,h=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(bs,Hn),Hn|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ft(bs,Hn),Hn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:a,Ft(bs,Hn),Hn|=c}else h!==null?(c=h.baseLanes|a,i.memoizedState=null):c=a,Ft(bs,Hn),Hn|=c;return En(t,i,d,a),i.child}function Xh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Xc(t,i,a,c,d){var h=Rn(a)?Pr:xn.current;return h=ps(i,h),ys(i,d),a=Fc(t,i,a,c,h,d),c=Oc(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ui(t,i,d)):(Vt&&c&&vc(i),i.flags|=1,En(t,i,a,d),i.child)}function Yh(t,i,a,c,d){if(Rn(a)){var h=!0;yo(i)}else h=!1;if(ys(i,d),i.stateNode===null)zo(t,i),Ih(i,a,c),Gc(i,a,c,d),c=!0;else if(t===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var k=E.context,te=a.contextType;typeof te=="object"&&te!==null?te=qn(te):(te=Rn(a)?Pr:xn.current,te=ps(i,te));var ge=a.getDerivedStateFromProps,ve=typeof ge=="function"||typeof E.getSnapshotBeforeUpdate=="function";ve||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==c||k!==te)&&Fh(i,E,c,te),lr=!1;var xe=i.memoizedState;E.state=xe,Ro(i,c,E,d),k=i.memoizedState,D!==c||xe!==k||Cn.current||lr?(typeof ge=="function"&&(Hc(i,a,ge,c),k=i.memoizedState),(D=lr||Uh(i,a,D,c,xe,k,te))?(ve||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),E.props=c,E.state=k,E.context=te,c=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,ch(t,i),D=i.memoizedProps,te=i.type===i.elementType?D:ri(i.type,D),E.props=te,ve=i.pendingProps,xe=E.context,k=a.contextType,typeof k=="object"&&k!==null?k=qn(k):(k=Rn(a)?Pr:xn.current,k=ps(i,k));var Le=a.getDerivedStateFromProps;(ge=typeof Le=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==ve||xe!==k)&&Fh(i,E,c,k),lr=!1,xe=i.memoizedState,E.state=xe,Ro(i,c,E,d);var Ve=i.memoizedState;D!==ve||xe!==Ve||Cn.current||lr?(typeof Le=="function"&&(Hc(i,a,Le,c),Ve=i.memoizedState),(te=lr||Uh(i,a,te,c,xe,Ve,k)||!1)?(ge||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,Ve,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,Ve,k)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ve),E.props=c,E.state=Ve,E.context=k,c=te):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),c=!1)}return Yc(t,i,a,c,h,d)}function Yc(t,i,a,c,d,h){Xh(t,i);var E=(i.flags&128)!==0;if(!c&&!E)return d&&Jf(i,a,!1),Ui(t,i,h);c=i.stateNode,Cx.current=i;var D=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&E?(i.child=_s(i,t.child,null,h),i.child=_s(i,null,D,h)):En(t,i,D,h),i.memoizedState=c.state,d&&Jf(i,a,!0),i.child}function qh(t){var i=t.stateNode;i.pendingContext?$f(t,i.pendingContext,i.pendingContext!==i.context):i.context&&$f(t,i.context,!1),Pc(t,i.containerInfo)}function Kh(t,i,a,c,d){return gs(),Ec(d),i.flags|=256,En(t,i,a,c),i.child}var qc={dehydrated:null,treeContext:null,retryLane:0};function Kc(t){return{baseLanes:t,cachePool:null,transitions:null}}function $h(t,i,a){var c=i.pendingProps,d=Gt.current,h=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=t!==null&&t.memoizedState===null?!1:(d&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Ft(Gt,d&1),t===null)return Mc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,t=c.fallback,h?(c=i.mode,h=i.child,E={mode:"hidden",children:E},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=$o(E,c,0,null),t=Br(t,c,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Kc(a),i.memoizedState=qc,t):$c(i,E));if(d=t.memoizedState,d!==null&&(D=d.dehydrated,D!==null))return Rx(t,i,E,c,D,d,a);if(h){h=c.fallback,E=i.mode,d=t.child,D=d.sibling;var k={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=mr(d,k),c.subtreeFlags=d.subtreeFlags&14680064),D!==null?h=mr(D,h):(h=Br(h,E,a,null),h.flags|=2),h.return=i,c.return=i,c.sibling=h,i.child=c,c=h,h=i.child,E=t.child.memoizedState,E=E===null?Kc(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~a,i.memoizedState=qc,c}return h=t.child,t=h.sibling,c=mr(h,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function $c(t,i){return i=$o({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Oo(t,i,a,c){return c!==null&&Ec(c),_s(i,t.child,null,a),t=$c(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Rx(t,i,a,c,d,h,E){if(a)return i.flags&256?(i.flags&=-257,c=Wc(Error(n(422))),Oo(t,i,E,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=c.fallback,d=i.mode,c=$o({mode:"visible",children:c.children},d,0,null),h=Br(h,d,E,null),h.flags|=2,c.return=i,h.return=i,c.sibling=h,i.child=c,(i.mode&1)!==0&&_s(i,t.child,null,E),i.child.memoizedState=Kc(E),i.memoizedState=qc,h);if((i.mode&1)===0)return Oo(t,i,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var D=c.dgst;return c=D,h=Error(n(419)),c=Wc(h,c,void 0),Oo(t,i,E,c)}if(D=(E&t.childLanes)!==0,Pn||D){if(c=ln,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|E))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,Li(t,d),oi(c,t,d,-1))}return fu(),c=Wc(Error(n(421))),Oo(t,i,E,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Hx.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,Vn=rr(d.nextSibling),Bn=i,Vt=!0,ii=null,t!==null&&(Xn[Yn++]=Pi,Xn[Yn++]=Di,Xn[Yn++]=Dr,Pi=t.id,Di=t.overflow,Dr=i),i=$c(i,c.children),i.flags|=4096,i)}function Zh(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Ac(t.return,i,a)}function Zc(t,i,a,c,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=a,h.tailMode=d)}function Jh(t,i,a){var c=i.pendingProps,d=c.revealOrder,h=c.tail;if(En(t,i,c.children,a),c=Gt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zh(t,a,i);else if(t.tag===19)Zh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Ft(Gt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Po(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Zc(i,!1,d,a,h);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Po(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}Zc(i,!0,a,null,h);break;case"together":Zc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ui(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Fr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=mr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=mr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Px(t,i,a){switch(i.tag){case 3:qh(i),gs();break;case 5:fh(i);break;case 1:Rn(i.type)&&yo(i);break;case 4:Pc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ft(wo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ft(Gt,Gt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?$h(t,i,a):(Ft(Gt,Gt.current&1),t=Ui(t,i,a),t!==null?t.sibling:null);Ft(Gt,Gt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return Jh(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ft(Gt,Gt.current),c)break;return null;case 22:case 23:return i.lanes=0,jh(t,i,a)}return Ui(t,i,a)}var Qh,Jc,ep,tp;Qh=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Jc=function(){},ep=function(t,i,a,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,Ur(_i.current);var h=null;switch(a){case"input":d=Dt(t,d),c=Dt(t,c),h=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),h=[];break;case"textarea":d=at(t,d),c=at(t,c),h=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=go)}Qe(a,c);var E;a=null;for(te in d)if(!c.hasOwnProperty(te)&&d.hasOwnProperty(te)&&d[te]!=null)if(te==="style"){var D=d[te];for(E in D)D.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(o.hasOwnProperty(te)?h||(h=[]):(h=h||[]).push(te,null));for(te in c){var k=c[te];if(D=d?.[te],c.hasOwnProperty(te)&&k!==D&&(k!=null||D!=null))if(te==="style")if(D){for(E in D)!D.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in k)k.hasOwnProperty(E)&&D[E]!==k[E]&&(a||(a={}),a[E]=k[E])}else a||(h||(h=[]),h.push(te,a)),a=k;else te==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,D=D?D.__html:void 0,k!=null&&D!==k&&(h=h||[]).push(te,k)):te==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(te,""+k):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(o.hasOwnProperty(te)?(k!=null&&te==="onScroll"&&Ot("scroll",t),h||D===k||(h=[])):(h=h||[]).push(te,k))}a&&(h=h||[]).push("style",a);var te=h;(i.updateQueue=te)&&(i.flags|=4)}},tp=function(t,i,a,c){a!==c&&(i.flags|=4)};function wa(t,i){if(!Vt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function _n(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function Dx(t,i,a){var c=i.pendingProps;switch(yc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(i),null;case 1:return Rn(i.type)&&vo(),_n(i),null;case 3:return c=i.stateNode,Ss(),zt(Cn),zt(xn),Nc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(bo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(cu(ii),ii=null))),Jc(t,i),_n(i),null;case 5:Dc(i);var d=Ur(Sa.current);if(a=i.type,t!==null&&i.stateNode!=null)ep(t,i,a,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return _n(i),null}if(t=Ur(_i.current),bo(i)){c=i.stateNode,a=i.type;var h=i.memoizedProps;switch(c[gi]=i,c[xa]=h,t=(i.mode&1)!==0,a){case"dialog":Ot("cancel",c),Ot("close",c);break;case"iframe":case"object":case"embed":Ot("load",c);break;case"video":case"audio":for(d=0;d<ha.length;d++)Ot(ha[d],c);break;case"source":Ot("error",c);break;case"img":case"image":case"link":Ot("error",c),Ot("load",c);break;case"details":Ot("toggle",c);break;case"input":F(c,h),Ot("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},Ot("invalid",c);break;case"textarea":R(c,h),Ot("invalid",c)}Qe(a,h),d=null;for(var E in h)if(h.hasOwnProperty(E)){var D=h[E];E==="children"?typeof D=="string"?c.textContent!==D&&(h.suppressHydrationWarning!==!0&&xo(c.textContent,D,t),d=["children",D]):typeof D=="number"&&c.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&xo(c.textContent,D,t),d=["children",""+D]):o.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Ot("scroll",c)}switch(a){case"input":ht(c),Ct(c,h,!0);break;case"textarea":ht(c),K(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=go)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=E.createElement(a,{is:c.is}):(t=E.createElement(a),a==="select"&&(E=t,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):t=E.createElementNS(t,a),t[gi]=i,t[xa]=c,Qh(t,i,!1,!1),i.stateNode=t;e:{switch(E=De(a,c),a){case"dialog":Ot("cancel",t),Ot("close",t),d=c;break;case"iframe":case"object":case"embed":Ot("load",t),d=c;break;case"video":case"audio":for(d=0;d<ha.length;d++)Ot(ha[d],t);d=c;break;case"source":Ot("error",t),d=c;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),d=c;break;case"details":Ot("toggle",t),d=c;break;case"input":F(t,c),d=Dt(t,c),Ot("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),Ot("invalid",t);break;case"textarea":R(t,c),d=at(t,c),Ot("invalid",t);break;default:d=c}Qe(a,d),D=d;for(h in D)if(D.hasOwnProperty(h)){var k=D[h];h==="style"?we(t,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&qe(t,k)):h==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Ae(t,k):typeof k=="number"&&Ae(t,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?k!=null&&h==="onScroll"&&Ot("scroll",t):k!=null&&P(t,h,k,E))}switch(a){case"input":ht(t),Ct(t,c,!1);break;case"textarea":ht(t),K(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Se(c.value));break;case"select":t.multiple=!!c.multiple,h=c.value,h!=null?Xe(t,!!c.multiple,h,!1):c.defaultValue!=null&&Xe(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=go)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return _n(i),null;case 6:if(t&&i.stateNode!=null)tp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=Ur(Sa.current),Ur(_i.current),bo(i)){if(c=i.stateNode,a=i.memoizedProps,c[gi]=i,(h=c.nodeValue!==a)&&(t=Bn,t!==null))switch(t.tag){case 3:xo(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xo(c.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[gi]=i,i.stateNode=c}return _n(i),null;case 13:if(zt(Gt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)rh(),gs(),i.flags|=98560,h=!1;else if(h=bo(i),c!==null&&c.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[gi]=i}else gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_n(i),h=!1}else ii!==null&&(cu(ii),ii=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Gt.current&1)!==0?nn===0&&(nn=3):fu())),i.updateQueue!==null&&(i.flags|=4),_n(i),null);case 4:return Ss(),Jc(t,i),t===null&&pa(i.stateNode.containerInfo),_n(i),null;case 10:return wc(i.type._context),_n(i),null;case 17:return Rn(i.type)&&vo(),_n(i),null;case 19:if(zt(Gt),h=i.memoizedState,h===null)return _n(i),null;if(c=(i.flags&128)!==0,E=h.rendering,E===null)if(c)wa(h,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Po(t),E!==null){for(i.flags|=128,wa(h,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)h=a,t=c,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Ft(Gt,Gt.current&1|2),i.child}t=t.sibling}h.tail!==null&&q()>Ts&&(i.flags|=128,c=!0,wa(h,!1),i.lanes=4194304)}else{if(!c)if(t=Po(E),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),wa(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Vt)return _n(i),null}else 2*q()-h.renderingStartTime>Ts&&a!==1073741824&&(i.flags|=128,c=!0,wa(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(a=h.last,a!==null?a.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=q(),i.sibling=null,a=Gt.current,Ft(Gt,c?a&1|2:a&1),i):(_n(i),null);case 22:case 23:return du(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(_n(i),i.subtreeFlags&6&&(i.flags|=8192)):_n(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Lx(t,i){switch(yc(i),i.tag){case 1:return Rn(i.type)&&vo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ss(),zt(Cn),zt(xn),Nc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Dc(i),null;case 13:if(zt(Gt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));gs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return zt(Gt),null;case 4:return Ss(),null;case 10:return wc(i.type._context),null;case 22:case 23:return du(),null;case 24:return null;default:return null}}var ko=!1,vn=!1,Nx=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Es(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){jt(t,i,c)}else a.current=null}function Qc(t,i,a){try{a()}catch(c){jt(t,i,c)}}var np=!1;function Ux(t,i){if(dc=ro,t=Uf(),ic(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var E=0,D=-1,k=-1,te=0,ge=0,ve=t,xe=null;t:for(;;){for(var Le;ve!==a||d!==0&&ve.nodeType!==3||(D=E+d),ve!==h||c!==0&&ve.nodeType!==3||(k=E+c),ve.nodeType===3&&(E+=ve.nodeValue.length),(Le=ve.firstChild)!==null;)xe=ve,ve=Le;for(;;){if(ve===t)break t;if(xe===a&&++te===d&&(D=E),xe===h&&++ge===c&&(k=E),(Le=ve.nextSibling)!==null)break;ve=xe,xe=ve.parentNode}ve=Le}a=D===-1||k===-1?null:{start:D,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(fc={focusedElem:t,selectionRange:a},ro=!1,Oe=i;Oe!==null;)if(i=Oe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Oe=t;else for(;Oe!==null;){i=Oe;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var Ge=Ve.memoizedProps,qt=Ve.memoizedState,Y=i.stateNode,W=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:ri(i.type,Ge),qt);Y.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Me){jt(i,i.return,Me)}if(t=i.sibling,t!==null){t.return=i.return,Oe=t;break}Oe=i.return}return Ve=np,np=!1,Ve}function Aa(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&Qc(i,a,h)}d=d.next}while(d!==c)}}function Bo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function eu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function ip(t){var i=t.alternate;i!==null&&(t.alternate=null,ip(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[gi],delete i[xa],delete i[xc],delete i[xx],delete i[gx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function rp(t){return t.tag===5||t.tag===3||t.tag===4}function sp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=go));else if(c!==4&&(t=t.child,t!==null))for(tu(t,i,a),t=t.sibling;t!==null;)tu(t,i,a),t=t.sibling}function nu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(nu(t,i,a),t=t.sibling;t!==null;)nu(t,i,a),t=t.sibling}var hn=null,si=!1;function ur(t,i,a){for(a=a.child;a!==null;)ap(t,i,a),a=a.sibling}function ap(t,i,a){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(et,a)}catch{}switch(a.tag){case 5:vn||Es(a,i);case 6:var c=hn,d=si;hn=null,ur(t,i,a),hn=c,si=d,hn!==null&&(si?(t=hn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):hn.removeChild(a.stateNode));break;case 18:hn!==null&&(si?(t=hn,a=a.stateNode,t.nodeType===8?mc(t.parentNode,a):t.nodeType===1&&mc(t,a),sa(t)):mc(hn,a.stateNode));break;case 4:c=hn,d=si,hn=a.stateNode.containerInfo,si=!0,ur(t,i,a),hn=c,si=d;break;case 0:case 11:case 14:case 15:if(!vn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var h=d,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&Qc(a,i,E),d=d.next}while(d!==c)}ur(t,i,a);break;case 1:if(!vn&&(Es(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(D){jt(a,i,D)}ur(t,i,a);break;case 21:ur(t,i,a);break;case 22:a.mode&1?(vn=(c=vn)||a.memoizedState!==null,ur(t,i,a),vn=c):ur(t,i,a);break;default:ur(t,i,a)}}function op(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Nx),i.forEach(function(c){var d=Gx.bind(null,t,c);a.has(c)||(a.add(c),c.then(d,d))})}}function ai(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var h=t,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:hn=D.stateNode,si=!1;break e;case 3:hn=D.stateNode.containerInfo,si=!0;break e;case 4:hn=D.stateNode.containerInfo,si=!0;break e}D=D.return}if(hn===null)throw Error(n(160));ap(h,E,d),hn=null,si=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(te){jt(d,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)lp(i,t),i=i.sibling}function lp(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ai(i,t),yi(t),c&4){try{Aa(3,t,t.return),Bo(3,t)}catch(Ge){jt(t,t.return,Ge)}try{Aa(5,t,t.return)}catch(Ge){jt(t,t.return,Ge)}}break;case 1:ai(i,t),yi(t),c&512&&a!==null&&Es(a,a.return);break;case 5:if(ai(i,t),yi(t),c&512&&a!==null&&Es(a,a.return),t.flags&32){var d=t.stateNode;try{Ae(d,"")}catch(Ge){jt(t,t.return,Ge)}}if(c&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,E=a!==null?a.memoizedProps:h,D=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&gt(d,h),De(D,E);var te=De(D,h);for(E=0;E<k.length;E+=2){var ge=k[E],ve=k[E+1];ge==="style"?we(d,ve):ge==="dangerouslySetInnerHTML"?qe(d,ve):ge==="children"?Ae(d,ve):P(d,ge,ve,te)}switch(D){case"input":mt(d,h);break;case"textarea":T(d,h);break;case"select":var xe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var Le=h.value;Le!=null?Xe(d,!!h.multiple,Le,!1):xe!==!!h.multiple&&(h.defaultValue!=null?Xe(d,!!h.multiple,h.defaultValue,!0):Xe(d,!!h.multiple,h.multiple?[]:"",!1))}d[xa]=h}catch(Ge){jt(t,t.return,Ge)}}break;case 6:if(ai(i,t),yi(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(Ge){jt(t,t.return,Ge)}}break;case 3:if(ai(i,t),yi(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{sa(i.containerInfo)}catch(Ge){jt(t,t.return,Ge)}break;case 4:ai(i,t),yi(t);break;case 13:ai(i,t),yi(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(su=q())),c&4&&op(t);break;case 22:if(ge=a!==null&&a.memoizedState!==null,t.mode&1?(vn=(te=vn)||ge,ai(i,t),vn=te):ai(i,t),yi(t),c&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!ge&&(t.mode&1)!==0)for(Oe=t,ge=t.child;ge!==null;){for(ve=Oe=ge;Oe!==null;){switch(xe=Oe,Le=xe.child,xe.tag){case 0:case 11:case 14:case 15:Aa(4,xe,xe.return);break;case 1:Es(xe,xe.return);var Ve=xe.stateNode;if(typeof Ve.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(Ge){jt(c,a,Ge)}}break;case 5:Es(xe,xe.return);break;case 22:if(xe.memoizedState!==null){dp(ve);continue}}Le!==null?(Le.return=xe,Oe=Le):dp(ve)}ge=ge.sibling}e:for(ge=null,ve=t;;){if(ve.tag===5){if(ge===null){ge=ve;try{d=ve.stateNode,te?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=ve.stateNode,k=ve.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,D.style.display=_e("display",E))}catch(Ge){jt(t,t.return,Ge)}}}else if(ve.tag===6){if(ge===null)try{ve.stateNode.nodeValue=te?"":ve.memoizedProps}catch(Ge){jt(t,t.return,Ge)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===t)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===t)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===t)break e;ge===ve&&(ge=null),ve=ve.return}ge===ve&&(ge=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:ai(i,t),yi(t),c&4&&op(t);break;case 21:break;default:ai(i,t),yi(t)}}function yi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(rp(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ae(d,""),c.flags&=-33);var h=sp(t);nu(t,h,d);break;case 3:case 4:var E=c.stateNode.containerInfo,D=sp(t);tu(t,D,E);break;default:throw Error(n(161))}}catch(k){jt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Ix(t,i,a){Oe=t,cp(t)}function cp(t,i,a){for(var c=(t.mode&1)!==0;Oe!==null;){var d=Oe,h=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||ko;if(!E){var D=d.alternate,k=D!==null&&D.memoizedState!==null||vn;D=ko;var te=vn;if(ko=E,(vn=k)&&!te)for(Oe=d;Oe!==null;)E=Oe,k=E.child,E.tag===22&&E.memoizedState!==null?fp(d):k!==null?(k.return=E,Oe=k):fp(d);for(;h!==null;)Oe=h,cp(h),h=h.sibling;Oe=d,ko=D,vn=te}up(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,Oe=h):up(t)}}function up(t){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||Bo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!vn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ri(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&dh(i,h,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}dh(i,E,a)}break;case 5:var D=i.stateNode;if(a===null&&i.flags&4){a=D;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var ge=te.memoizedState;if(ge!==null){var ve=ge.dehydrated;ve!==null&&sa(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}vn||i.flags&512&&eu(i)}catch(xe){jt(i,i.return,xe)}}if(i===t){Oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function dp(t){for(;Oe!==null;){var i=Oe;if(i===t){Oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function fp(t){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Bo(4,i)}catch(k){jt(i,a,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(k){jt(i,d,k)}}var h=i.return;try{eu(i)}catch(k){jt(i,h,k)}break;case 5:var E=i.return;try{eu(i)}catch(k){jt(i,E,k)}}}catch(k){jt(i,i.return,k)}if(i===t){Oe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Oe=D;break}Oe=i.return}}var Fx=Math.ceil,Vo=U.ReactCurrentDispatcher,iu=U.ReactCurrentOwner,$n=U.ReactCurrentBatchConfig,Mt=0,ln=null,Jt=null,pn=0,Hn=0,bs=sr(0),nn=0,Ca=null,Fr=0,Ho=0,ru=0,Ra=null,Dn=null,su=0,Ts=1/0,Ii=null,Go=!1,au=null,dr=null,Wo=!1,fr=null,jo=0,Pa=0,ou=null,Xo=-1,Yo=0;function bn(){return(Mt&6)!==0?q():Xo!==-1?Xo:Xo=q()}function hr(t){return(t.mode&1)===0?1:(Mt&2)!==0&&pn!==0?pn&-pn:vx.transition!==null?(Yo===0&&(Yo=Zi()),Yo):(t=ut,t!==0||(t=window.event,t=t===void 0?16:pf(t.type)),t)}function oi(t,i,a,c){if(50<Pa)throw Pa=0,ou=null,Error(n(185));Zt(t,a,c),((Mt&2)===0||t!==ln)&&(t===ln&&((Mt&2)===0&&(Ho|=a),nn===4&&pr(t,pn)),Ln(t,c),a===1&&Mt===0&&(i.mode&1)===0&&(Ts=q()+500,So&&or()))}function Ln(t,i){var a=t.callbackNode;$i(t,i);var c=vt(t,t===ln?pn:0);if(c===0)a!==null&&to(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&to(a),i===1)t.tag===0?_x(pp.bind(null,t)):Qf(pp.bind(null,t)),px(function(){(Mt&6)===0&&or()}),a=null;else{switch(rs(c)){case 1:a=X;break;case 4:a=Te;break;case 16:a=Re;break;case 536870912:a=Ue;break;default:a=Re}a=Mp(a,hp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function hp(t,i){if(Xo=-1,Yo=0,(Mt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(ws()&&t.callbackNode!==a)return null;var c=vt(t,t===ln?pn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=qo(t,c);else{i=c;var d=Mt;Mt|=2;var h=xp();(ln!==t||pn!==i)&&(Ii=null,Ts=q()+500,zr(t,i));do try{kx();break}catch(D){mp(t,D)}while(!0);Tc(),Vo.current=h,Mt=d,Jt!==null?i=0:(ln=null,pn=0,i=nn)}if(i!==0){if(i===2&&(d=fn(t),d!==0&&(c=d,i=lu(t,d))),i===1)throw a=Ca,zr(t,0),pr(t,c),Ln(t,q()),a;if(i===6)pr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!Ox(d)&&(i=qo(t,c),i===2&&(h=fn(t),h!==0&&(c=h,i=lu(t,h))),i===1))throw a=Ca,zr(t,0),pr(t,c),Ln(t,q()),a;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:kr(t,Dn,Ii);break;case 3:if(pr(t,c),(c&130023424)===c&&(i=su+500-q(),10<i)){if(vt(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){bn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=pc(kr.bind(null,t,Dn,Ii),i);break}kr(t,Dn,Ii);break;case 4:if(pr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var E=31-st(c);h=1<<E,E=i[E],E>d&&(d=E),c&=~h}if(c=d,c=q()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Fx(c/1960))-c,10<c){t.timeoutHandle=pc(kr.bind(null,t,Dn,Ii),c);break}kr(t,Dn,Ii);break;case 5:kr(t,Dn,Ii);break;default:throw Error(n(329))}}}return Ln(t,q()),t.callbackNode===a?hp.bind(null,t):null}function lu(t,i){var a=Ra;return t.current.memoizedState.isDehydrated&&(zr(t,i).flags|=256),t=qo(t,i),t!==2&&(i=Dn,Dn=a,i!==null&&cu(i)),t}function cu(t){Dn===null?Dn=t:Dn.push.apply(Dn,t)}function Ox(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],h=d.getSnapshot;d=d.value;try{if(!ni(h(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(t,i){for(i&=~ru,i&=~Ho,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-st(i),c=1<<a;t[a]=-1,i&=~c}}function pp(t){if((Mt&6)!==0)throw Error(n(327));ws();var i=vt(t,0);if((i&1)===0)return Ln(t,q()),null;var a=qo(t,i);if(t.tag!==0&&a===2){var c=fn(t);c!==0&&(i=c,a=lu(t,c))}if(a===1)throw a=Ca,zr(t,0),pr(t,i),Ln(t,q()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,kr(t,Dn,Ii),Ln(t,q()),null}function uu(t,i){var a=Mt;Mt|=1;try{return t(i)}finally{Mt=a,Mt===0&&(Ts=q()+500,So&&or())}}function Or(t){fr!==null&&fr.tag===0&&(Mt&6)===0&&ws();var i=Mt;Mt|=1;var a=$n.transition,c=ut;try{if($n.transition=null,ut=1,t)return t()}finally{ut=c,$n.transition=a,Mt=i,(Mt&6)===0&&or()}}function du(){Hn=bs.current,zt(bs)}function zr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,hx(a)),Jt!==null)for(a=Jt.return;a!==null;){var c=a;switch(yc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&vo();break;case 3:Ss(),zt(Cn),zt(xn),Nc();break;case 5:Dc(c);break;case 4:Ss();break;case 13:zt(Gt);break;case 19:zt(Gt);break;case 10:wc(c.type._context);break;case 22:case 23:du()}a=a.return}if(ln=t,Jt=t=mr(t.current,null),pn=Hn=i,nn=0,Ca=null,ru=Ho=Fr=0,Dn=Ra=null,Nr!==null){for(i=0;i<Nr.length;i++)if(a=Nr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,h=a.pending;if(h!==null){var E=h.next;h.next=d,c.next=E}a.pending=c}Nr=null}return t}function mp(t,i){do{var a=Jt;try{if(Tc(),Do.current=Io,Lo){for(var c=Wt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Lo=!1}if(Ir=0,on=tn=Wt=null,Ma=!1,Ea=0,iu.current=null,a===null||a.return===null){nn=1,Ca=i,Jt=null;break}e:{var h=t,E=a.return,D=a,k=i;if(i=pn,D.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var te=k,ge=D,ve=ge.tag;if((ge.mode&1)===0&&(ve===0||ve===11||ve===15)){var xe=ge.alternate;xe?(ge.updateQueue=xe.updateQueue,ge.memoizedState=xe.memoizedState,ge.lanes=xe.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Le=Bh(E);if(Le!==null){Le.flags&=-257,Vh(Le,E,D,h,i),Le.mode&1&&kh(h,te,i),i=Le,k=te;var Ve=i.updateQueue;if(Ve===null){var Ge=new Set;Ge.add(k),i.updateQueue=Ge}else Ve.add(k);break e}else{if((i&1)===0){kh(h,te,i),fu();break e}k=Error(n(426))}}else if(Vt&&D.mode&1){var qt=Bh(E);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),Vh(qt,E,D,h,i),Ec(Ms(k,D));break e}}h=k=Ms(k,D),nn!==4&&(nn=2),Ra===null?Ra=[h]:Ra.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=Oh(h,k,i);uh(h,Y);break e;case 1:D=k;var W=h.type,$=h.stateNode;if((h.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(dr===null||!dr.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var Me=zh(h,D,i);uh(h,Me);break e}}h=h.return}while(h!==null)}_p(a)}catch(We){i=We,Jt===a&&a!==null&&(Jt=a=a.return);continue}break}while(!0)}function xp(){var t=Vo.current;return Vo.current=Io,t===null?Io:t}function fu(){(nn===0||nn===3||nn===2)&&(nn=4),ln===null||(Fr&268435455)===0&&(Ho&268435455)===0||pr(ln,pn)}function qo(t,i){var a=Mt;Mt|=2;var c=xp();(ln!==t||pn!==i)&&(Ii=null,zr(t,i));do try{zx();break}catch(d){mp(t,d)}while(!0);if(Tc(),Mt=a,Vo.current=c,Jt!==null)throw Error(n(261));return ln=null,pn=0,nn}function zx(){for(;Jt!==null;)gp(Jt)}function kx(){for(;Jt!==null&&!w();)gp(Jt)}function gp(t){var i=Sp(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,i===null?_p(t):Jt=i,iu.current=null}function _p(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=Dx(a,i,Hn),a!==null){Jt=a;return}}else{if(a=Lx(a,i),a!==null){a.flags&=32767,Jt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=t}while(i!==null);nn===0&&(nn=5)}function kr(t,i,a){var c=ut,d=$n.transition;try{$n.transition=null,ut=1,Bx(t,i,a,c)}finally{$n.transition=d,ut=c}return null}function Bx(t,i,a,c){do ws();while(fr!==null);if((Mt&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(An(t,h),t===ln&&(Jt=ln=null,pn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Wo||(Wo=!0,Mp(Re,function(){return ws(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=$n.transition,$n.transition=null;var E=ut;ut=1;var D=Mt;Mt|=4,iu.current=null,Ux(t,a),lp(a,t),ax(fc),ro=!!dc,fc=dc=null,t.current=a,Ix(a),j(),Mt=D,ut=E,$n.transition=h}else t.current=a;if(Wo&&(Wo=!1,fr=t,jo=d),h=t.pendingLanes,h===0&&(dr=null),Je(a.stateNode),Ln(t,q()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Go)throw Go=!1,t=au,au=null,t;return(jo&1)!==0&&t.tag!==0&&ws(),h=t.pendingLanes,(h&1)!==0?t===ou?Pa++:(Pa=0,ou=t):Pa=0,or(),null}function ws(){if(fr!==null){var t=rs(jo),i=$n.transition,a=ut;try{if($n.transition=null,ut=16>t?16:t,fr===null)var c=!1;else{if(t=fr,fr=null,jo=0,(Mt&6)!==0)throw Error(n(331));var d=Mt;for(Mt|=4,Oe=t.current;Oe!==null;){var h=Oe,E=h.child;if((Oe.flags&16)!==0){var D=h.deletions;if(D!==null){for(var k=0;k<D.length;k++){var te=D[k];for(Oe=te;Oe!==null;){var ge=Oe;switch(ge.tag){case 0:case 11:case 15:Aa(8,ge,h)}var ve=ge.child;if(ve!==null)ve.return=ge,Oe=ve;else for(;Oe!==null;){ge=Oe;var xe=ge.sibling,Le=ge.return;if(ip(ge),ge===te){Oe=null;break}if(xe!==null){xe.return=Le,Oe=xe;break}Oe=Le}}}var Ve=h.alternate;if(Ve!==null){var Ge=Ve.child;if(Ge!==null){Ve.child=null;do{var qt=Ge.sibling;Ge.sibling=null,Ge=qt}while(Ge!==null)}}Oe=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Oe=E;else e:for(;Oe!==null;){if(h=Oe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Aa(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Oe=Y;break e}Oe=h.return}}var W=t.current;for(Oe=W;Oe!==null;){E=Oe;var $=E.child;if((E.subtreeFlags&2064)!==0&&$!==null)$.return=E,Oe=$;else e:for(E=W;Oe!==null;){if(D=Oe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Bo(9,D)}}catch(We){jt(D,D.return,We)}if(D===E){Oe=null;break e}var Me=D.sibling;if(Me!==null){Me.return=D.return,Oe=Me;break e}Oe=D.return}}if(Mt=d,or(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(et,t)}catch{}c=!0}return c}finally{ut=a,$n.transition=i}}return!1}function vp(t,i,a){i=Ms(a,i),i=Oh(t,i,1),t=cr(t,i,1),i=bn(),t!==null&&(Zt(t,1,i),Ln(t,i))}function jt(t,i,a){if(t.tag===3)vp(t,t,a);else for(;i!==null;){if(i.tag===3){vp(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(dr===null||!dr.has(c))){t=Ms(a,t),t=zh(i,t,1),i=cr(i,t,1),t=bn(),i!==null&&(Zt(i,1,t),Ln(i,t));break}}i=i.return}}function Vx(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=bn(),t.pingedLanes|=t.suspendedLanes&a,ln===t&&(pn&a)===a&&(nn===4||nn===3&&(pn&130023424)===pn&&500>q()-su?zr(t,0):ru|=a),Ln(t,i)}function yp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ze,Ze<<=1,(Ze&130023424)===0&&(Ze=4194304)));var a=bn();t=Li(t,i),t!==null&&(Zt(t,i,a),Ln(t,a))}function Hx(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),yp(t,a)}function Gx(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),yp(t,a)}var Sp;Sp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Pn=!1,Px(t,i,a);Pn=(t.flags&131072)!==0}else Pn=!1,Vt&&(i.flags&1048576)!==0&&eh(i,Eo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;zo(t,i),t=i.pendingProps;var d=ps(i,xn.current);ys(i,a),d=Fc(null,i,c,t,d,a);var h=Oc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(c)?(h=!0,yo(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Rc(i),d.updater=Fo,i.stateNode=d,d._reactInternals=i,Gc(i,c,t,a),i=Yc(null,i,c,!0,h,a)):(i.tag=0,Vt&&h&&vc(i),En(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(zo(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=jx(c),t=ri(c,t),d){case 0:i=Xc(null,i,c,t,a);break e;case 1:i=Yh(null,i,c,t,a);break e;case 11:i=Hh(null,i,c,t,a);break e;case 14:i=Gh(null,i,c,ri(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ri(c,d),Xc(t,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ri(c,d),Yh(t,i,c,d,a);case 3:e:{if(qh(i),t===null)throw Error(n(387));c=i.pendingProps,h=i.memoizedState,d=h.element,ch(t,i),Ro(i,c,null,a);var E=i.memoizedState;if(c=E.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=Ms(Error(n(423)),i),i=Kh(t,i,c,a,d);break e}else if(c!==d){d=Ms(Error(n(424)),i),i=Kh(t,i,c,a,d);break e}else for(Vn=rr(i.stateNode.containerInfo.firstChild),Bn=i,Vt=!0,ii=null,a=oh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),c===d){i=Ui(t,i,a);break e}En(t,i,c,a)}i=i.child}return i;case 5:return fh(i),t===null&&Mc(i),c=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,E=d.children,hc(c,d)?E=null:h!==null&&hc(c,h)&&(i.flags|=32),Xh(t,i),En(t,i,E,a),i.child;case 6:return t===null&&Mc(i),null;case 13:return $h(t,i,a);case 4:return Pc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=_s(i,null,c,a):En(t,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ri(c,d),Hh(t,i,c,d,a);case 7:return En(t,i,i.pendingProps,a),i.child;case 8:return En(t,i,i.pendingProps.children,a),i.child;case 12:return En(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,h=i.memoizedProps,E=d.value,Ft(wo,c._currentValue),c._currentValue=E,h!==null)if(ni(h.value,E)){if(h.children===d.children&&!Cn.current){i=Ui(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){E=h.child;for(var k=D.firstContext;k!==null;){if(k.context===c){if(h.tag===1){k=Ni(-1,a&-a),k.tag=2;var te=h.updateQueue;if(te!==null){te=te.shared;var ge=te.pending;ge===null?k.next=k:(k.next=ge.next,ge.next=k),te.pending=k}}h.lanes|=a,k=h.alternate,k!==null&&(k.lanes|=a),Ac(h.return,a,i),D.lanes|=a;break}k=k.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=a,D=E.alternate,D!==null&&(D.lanes|=a),Ac(E,a,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}En(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,ys(i,a),d=qn(d),c=c(d),i.flags|=1,En(t,i,c,a),i.child;case 14:return c=i.type,d=ri(c,i.pendingProps),d=ri(c.type,d),Gh(t,i,c,d,a);case 15:return Wh(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ri(c,d),zo(t,i),i.tag=1,Rn(c)?(t=!0,yo(i)):t=!1,ys(i,a),Ih(i,c,d),Gc(i,c,d,a),Yc(null,i,c,!0,t,a);case 19:return Jh(t,i,a);case 22:return jh(t,i,a)}throw Error(n(156,i.tag))};function Mp(t,i){return eo(t,i)}function Wx(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,i,a,c){return new Wx(t,i,a,c)}function hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jx(t){if(typeof t=="function")return hu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Z)return 11;if(t===ce)return 14}return 2}function mr(t,i){var a=t.alternate;return a===null?(a=Zn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Ko(t,i,a,c,d,h){var E=2;if(c=t,typeof t=="function")hu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case B:return Br(a.children,d,h,i);case J:E=8,d|=8;break;case C:return t=Zn(12,a,i,d|2),t.elementType=C,t.lanes=h,t;case ie:return t=Zn(13,a,i,d),t.elementType=ie,t.lanes=h,t;case fe:return t=Zn(19,a,i,d),t.elementType=fe,t.lanes=h,t;case de:return $o(a,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:E=10;break e;case H:E=9;break e;case Z:E=11;break e;case ce:E=14;break e;case ue:E=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Zn(E,a,i,d),i.elementType=t,i.type=c,i.lanes=h,i}function Br(t,i,a,c){return t=Zn(7,t,c,i),t.lanes=a,t}function $o(t,i,a,c){return t=Zn(22,t,c,i),t.elementType=de,t.lanes=a,t.stateNode={isHidden:!1},t}function pu(t,i,a){return t=Zn(6,t,null,i),t.lanes=a,t}function mu(t,i,a){return i=Zn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Xx(t,i,a,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=It(0),this.expirationTimes=It(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=It(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function xu(t,i,a,c,d,h,E,D,k){return t=new Xx(t,i,a,D,k),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Zn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rc(h),t}function Yx(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function Ep(t){if(!t)return ar;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Rn(a))return Zf(t,a,i)}return i}function bp(t,i,a,c,d,h,E,D,k){return t=xu(a,c,!0,t,d,h,E,D,k),t.context=Ep(null),a=t.current,c=bn(),d=hr(a),h=Ni(c,d),h.callback=i??null,cr(a,h,d),t.current.lanes=d,Zt(t,d,c),Ln(t,c),t}function Zo(t,i,a,c){var d=i.current,h=bn(),E=hr(d);return a=Ep(a),i.context===null?i.context=a:i.pendingContext=a,i=Ni(h,E),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=cr(d,i,E),t!==null&&(oi(t,d,E,h),Co(t,d,E)),E}function Jo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function gu(t,i){Tp(t,i),(t=t.alternate)&&Tp(t,i)}function qx(){return null}var wp=typeof reportError=="function"?reportError:function(t){console.error(t)};function _u(t){this._internalRoot=t}Qo.prototype.render=_u.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Zo(t,i,null,null)},Qo.prototype.unmount=_u.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Or(function(){Zo(null,t,null,null)}),i[Ci]=null}};function Qo(t){this._internalRoot=t}Qo.prototype.unstable_scheduleHydration=function(t){if(t){var i=cf();t={blockedOn:null,target:t,priority:i};for(var a=0;a<tr.length&&i!==0&&i<tr[a].priority;a++);tr.splice(a,0,t),a===0&&ff(t)}};function vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ap(){}function Kx(t,i,a,c,d){if(d){if(typeof c=="function"){var h=c;c=function(){var te=Jo(E);h.call(te)}}var E=bp(i,c,t,0,null,!1,!1,"",Ap);return t._reactRootContainer=E,t[Ci]=E.current,pa(t.nodeType===8?t.parentNode:t),Or(),E}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var D=c;c=function(){var te=Jo(k);D.call(te)}}var k=xu(t,0,!1,null,null,!1,!1,"",Ap);return t._reactRootContainer=k,t[Ci]=k.current,pa(t.nodeType===8?t.parentNode:t),Or(function(){Zo(i,k,a,c)}),k}function tl(t,i,a,c,d){var h=a._reactRootContainer;if(h){var E=h;if(typeof d=="function"){var D=d;d=function(){var k=Jo(E);D.call(k)}}Zo(i,E,t,d)}else E=Kx(a,i,t,d,c);return Jo(E)}xi=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Pt(i.pendingLanes);a!==0&&(en(i,a|1),Ln(i,q()),(Mt&6)===0&&(Ts=q()+500,or()))}break;case 13:Or(function(){var c=Li(t,1);if(c!==null){var d=bn();oi(c,t,1,d)}}),gu(t,1)}},Wl=function(t){if(t.tag===13){var i=Li(t,134217728);if(i!==null){var a=bn();oi(i,t,134217728,a)}gu(t,134217728)}},lf=function(t){if(t.tag===13){var i=hr(t),a=Li(t,i);if(a!==null){var c=bn();oi(a,t,i,c)}gu(t,i)}},cf=function(){return ut},uf=function(t,i){var a=ut;try{return ut=t,i()}finally{ut=a}},Ce=function(t,i,a){switch(i){case"input":if(mt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var d=_o(c);if(!d)throw Error(n(90));$t(c),mt(c,d)}}}break;case"textarea":T(t,a);break;case"select":i=a.value,i!=null&&Xe(t,!!a.multiple,i,!1)}},ot=uu,Lt=Or;var $x={usingClientEntryPoint:!1,Events:[ga,fs,_o,pe,Be,uu]},Da={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zx={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:U.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ja(t),t===null?null:t.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{et=nl.inject(Zx),Ke=nl}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$x,Nn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vu(i))throw Error(n(200));return Yx(t,i,null,a)},Nn.createRoot=function(t,i){if(!vu(t))throw Error(n(299));var a=!1,c="",d=wp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=xu(t,1,!1,null,null,a,!1,c,d),t[Ci]=i.current,pa(t.nodeType===8?t.parentNode:t),new _u(i)},Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ja(i),t=t===null?null:t.stateNode,t},Nn.flushSync=function(t){return Or(t)},Nn.hydrate=function(t,i,a){if(!el(i))throw Error(n(200));return tl(null,t,i,!0,a)},Nn.hydrateRoot=function(t,i,a){if(!vu(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,d=!1,h="",E=wp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=bp(i,null,t,1,a??null,d,!1,h,E),t[Ci]=i.current,pa(t),c)for(t=0;t<c.length;t++)a=c[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Qo(i)},Nn.render=function(t,i,a){if(!el(i))throw Error(n(200));return tl(null,t,i,!1,a)},Nn.unmountComponentAtNode=function(t){if(!el(t))throw Error(n(40));return t._reactRootContainer?(Or(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1},Nn.unstable_batchedUpdates=uu,Nn.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!el(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return tl(t,i,a,!1,c)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var Ip;function ag(){if(Ip)return Mu.exports;Ip=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Mu.exports=sg(),Mu.exports}var Fp;function og(){if(Fp)return il;Fp=1;var s=ag();return il.createRoot=s.createRoot,il.hydrateRoot=s.hydrateRoot,il}var lg=og();const cg=Hm(lg),ug=s=>{const[e,n]=Ht.useState(!1),[r,o]=Ht.useState(!1),[l,u]=Ht.useState(null),f=Ht.useRef(null),m=Ht.useRef(),p=Ht.useCallback(()=>{try{const v=window.location.protocol==="https:"?"wss:":"ws:",_=s.startsWith("ws")?s:`${v}//${window.location.host}${s}`;console.log("Connecting to WebSocket:",_);const S=new WebSocket(_);S.onopen=()=>{console.log("WebSocket connected"),n(!0)},S.onmessage=M=>{try{const b=JSON.parse(M.data);console.log("Received message:",b),u(b),b.type==="status"&&o(b.pi_connected||!1)}catch(b){console.error("Error parsing message:",b)}},S.onerror=M=>{console.error("WebSocket error:",M)},S.onclose=()=>{console.log("WebSocket disconnected"),n(!1),o(!1),f.current=null,m.current=setTimeout(()=>{console.log("Attempting to reconnect..."),p()},3e3)},f.current=S}catch(v){console.error("Error creating WebSocket:",v)}},[s]);return Ht.useEffect(()=>(p(),()=>{m.current&&clearTimeout(m.current),f.current&&f.current.close()}),[p]),{sendMessage:Ht.useCallback(v=>{f.current&&f.current.readyState===WebSocket.OPEN?(console.log("Sending message:",v),f.current.send(JSON.stringify(v))):console.error("WebSocket is not connected")},[]),lastMessage:l,isConnected:e,isPiConnected:r}},dg={x:"",y:"",z:"",feedHz:1e3,trapEnabled:!1,trapVMax:2e3,trapAccel:2e4,trapMinFeed:50,gcodeLine:"",homeFreq:2e3,homeAxis:"X"},fg=({onSendCommand:s,isPiConnected:e})=>{const[n,r]=Ht.useState(dg),o=e?"":"pointer-events-none opacity-50",l=_=>r(S=>({...S,..._})),u=_=>s(_),f=()=>{u({type:"home_all",freq_hz:n.homeFreq})},m=()=>{u({type:"home_axis",axis:n.homeAxis,freq_hz:n.homeFreq})},p=()=>{const{x:_,y:S,z:M,feedHz:b,trapEnabled:y,trapVMax:g,trapAccel:N,trapMinFeed:P}=n,U={x:_===""?void 0:Number(_),y:S===""?void 0:Number(S),z:M===""?void 0:Number(M)};u(y?{type:"goto_units_trap",...U,v_max_hz:g,accel_steps_s2:N,min_feed_hz:P}:{type:"goto_units",...U,feed_hz:b,trapezoidal:!1})},x=()=>{n.gcodeLine.trim()&&u({type:"gcode",line:n.gcodeLine})},v=()=>{u({type:"get_position"})};return O.jsxs("section",{className:"mb-8 rounded-2xl border border-zinc-300 bg-white p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900",children:[O.jsxs("div",{className:"mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center",children:[O.jsxs("div",{children:[O.jsx("h3",{className:"text-lg font-semibold text-zinc-900 dark:text-white",children:"Cartesian Machine Controls"}),O.jsx("p",{className:"mt-1 text-xs text-zinc-500 dark:text-zinc-400",children:"High-level commands: homing, coordinated moves in X/Y/Z and simple G-code."})]}),O.jsx("button",{onClick:v,disabled:!e,className:"rounded-lg bg-cyan-600 px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900",children:"Get Machine Position"})]}),O.jsxs("div",{className:o,children:[O.jsxs("div",{className:"mb-5 grid grid-cols-1 gap-3 sm:grid-cols-[2fr,1fr,1fr]",children:[O.jsxs("div",{className:"flex flex-col gap-2",children:[O.jsx("span",{className:"text-xs font-medium text-zinc-700 dark:text-zinc-300",children:"Homing frequency (Hz)"}),O.jsx("input",{type:"number",className:"rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400",value:n.homeFreq,onChange:_=>l({homeFreq:Number(_.target.value)})})]}),O.jsxs("div",{className:"flex flex-col gap-2",children:[O.jsx("span",{className:"text-xs font-medium text-zinc-700 dark:text-zinc-300",children:"Axis to home"}),O.jsxs("select",{className:"rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white",value:n.homeAxis,onChange:_=>l({homeAxis:_.target.value}),children:[O.jsx("option",{value:"X",children:"X"}),O.jsx("option",{value:"Y",children:"Y"}),O.jsx("option",{value:"Z",children:"Z"})]})]}),O.jsxs("div",{className:"flex items-end gap-2",children:[O.jsx("button",{onClick:m,disabled:!e,className:"w-full rounded-lg bg-amber-500 px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900",children:"Home Axis"}),O.jsx("button",{onClick:f,disabled:!e,className:"w-full rounded-lg bg-amber-600 px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900",children:"Home All"})]})]}),O.jsxs("div",{className:"mb-5 grid grid-cols-1 gap-3 sm:grid-cols-4",children:[["x","y","z"].map(_=>O.jsxs("div",{className:"flex flex-col gap-2",children:[O.jsxs("span",{className:"text-xs font-medium text-zinc-700 dark:text-zinc-300",children:[_.toUpperCase()," (units)"]}),O.jsx("input",{type:"number",className:"rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400",value:n[_],onChange:S=>l({[_]:S.target.value===""?"":Number(S.target.value)}),placeholder:"keep"})]},_)),O.jsxs("div",{className:"flex flex-col gap-2",children:[O.jsx("span",{className:"text-xs font-medium text-zinc-700 dark:text-zinc-300",children:"Feed (Hz, dominant axis)"}),O.jsx("input",{type:"number",className:"rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400",value:n.feedHz,onChange:_=>l({feedHz:Number(_.target.value)})})]})]}),O.jsxs("div",{className:"flex flex-col gap-3 border-t border-zinc-200 pt-4 text-xs dark:border-zinc-800 sm:flex-row sm:items-end sm:justify-between",children:[O.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-end",children:[O.jsxs("label",{className:"flex items-center gap-2",children:[O.jsx("input",{type:"checkbox",className:"h-4 w-4 rounded border-zinc-400 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-zinc-600",checked:n.trapEnabled,onChange:_=>l({trapEnabled:_.target.checked})}),O.jsx("span",{className:"text-xs font-medium text-zinc-700 dark:text-zinc-300",children:"Use trapezoidal profile"})]}),n.trapEnabled&&O.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[O.jsxs("label",{className:"flex flex-col gap-1",children:[O.jsx("span",{className:"text-[11px] font-medium text-zinc-600 dark:text-zinc-400",children:"v_max (Hz)"}),O.jsx("input",{type:"number",className:"rounded-lg border border-zinc-400 bg-white px-2 py-1.5 text-xs text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400",value:n.trapVMax,onChange:_=>l({trapVMax:Number(_.target.value)})})]}),O.jsxs("label",{className:"flex flex-col gap-1",children:[O.jsx("span",{className:"text-[11px] font-medium text-zinc-600 dark:text-zinc-400",children:"accel (steps/s²)"}),O.jsx("input",{type:"number",className:"rounded-lg border border-zinc-400 bg-white px-2 py-1.5 text-xs text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400",value:n.trapAccel,onChange:_=>l({trapAccel:Number(_.target.value)})})]}),O.jsxs("label",{className:"flex flex-col gap-1",children:[O.jsx("span",{className:"text-[11px] font-medium text-zinc-600 dark:text-zinc-400",children:"min feed (Hz)"}),O.jsx("input",{type:"number",className:"rounded-lg border border-zinc-400 bg-white px-2 py-1.5 text-xs text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400",value:n.trapMinFeed,onChange:_=>l({trapMinFeed:Number(_.target.value)})})]})]})]}),O.jsx("button",{onClick:p,disabled:!e,className:"w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900 sm:w-auto",children:"Move to X/Y/Z"})]}),O.jsx("div",{className:"mt-5 border-t border-zinc-200 pt-4 text-xs dark:border-zinc-800",children:O.jsxs("label",{className:"flex flex-col gap-2",children:[O.jsx("span",{className:"text-xs font-medium text-zinc-700 dark:text-zinc-300",children:"G-code line (G0/G1 subset)"}),O.jsxs("div",{className:"flex flex-col gap-2 sm:flex-row",children:[O.jsx("input",{type:"text",className:"flex-1 rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400",value:n.gcodeLine,onChange:_=>l({gcodeLine:_.target.value}),placeholder:"Example: G1 X10 Y5 Z2 F800"}),O.jsx("button",{onClick:x,disabled:!e||!n.gcodeLine.trim(),className:"rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900",children:"Send G-code"})]})]})})]})]})},Tu={steps:100,moveFreq:3e3,jogFreq:3e3,direction:"cw",isJogging:!1,setPosValue:0},hg=({onSendCommand:s,isPiConnected:e})=>{const[n,r]=Ht.useState({1:{...Tu},2:{...Tu},3:{...Tu}}),o=Ht.useMemo(()=>e?"":"pointer-events-none opacity-50",[e]),l=(M,b)=>r(y=>({...y,[M]:{...y[M],...b}})),u=M=>s(M),f=M=>{const{steps:b,moveFreq:y}=n[M];u({type:"move",motor:M,steps:Number(b),frequency:Number(y)})},m=M=>{const{jogFreq:b,direction:y}=n[M];u({type:"jog",motor:M,frequency:Number(b),direction:y}),l(M,{isJogging:!0})},p=M=>{u({type:"stop",motor:M}),l(M,{isJogging:!1})},x=M=>{u({type:"pos",motor:M})},v=M=>{const{setPosValue:b}=n[M];u({type:"setpos",motor:M,value:Number(b)})},_=()=>{u({type:"stop_all"}),r(M=>({1:{...M[1],isJogging:!1},2:{...M[2],isJogging:!1},3:{...M[3],isJogging:!1}}))},S=M=>{const b=n[M],y=`Motor ${M}`;return O.jsxs("div",{className:"rounded-2xl border border-zinc-300 bg-white p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900",children:[O.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[O.jsx("h3",{className:"text-lg font-semibold text-zinc-900 dark:text-white",children:y}),O.jsx("span",{className:`text-xs px-2 py-1 rounded-full font-medium ${b.isJogging?"bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200":"bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"}`,children:b.isJogging?"Jogging":"Idle"})]}),O.jsxs("section",{className:"mb-5",children:[O.jsx("h4",{className:"mb-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200",children:"Move"}),O.jsxs("div",{className:`grid grid-cols-1 gap-3 sm:grid-cols-3 ${o}`,children:[O.jsxs("label",{className:"flex flex-col gap-2",children:[O.jsx("span",{className:"text-xs font-medium text-zinc-700 dark:text-zinc-300",children:"Steps"}),O.jsx("input",{type:"number",className:"rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400",value:b.steps,onChange:g=>l(M,{steps:Number(g.target.value)})})]}),O.jsxs("label",{className:"flex flex-col gap-2",children:[O.jsx("span",{className:"text-xs font-medium text-zinc-700 dark:text-zinc-300",children:"Frequency (Hz)"}),O.jsx("input",{type:"number",className:"rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400",value:b.moveFreq,onChange:g=>l(M,{moveFreq:Number(g.target.value)})})]}),O.jsx("div",{className:"flex items-end",children:O.jsx("button",{onClick:()=>f(M),disabled:!e,className:"w-full rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900",children:"Move"})})]})]}),O.jsxs("section",{className:"mb-5",children:[O.jsx("h4",{className:"mb-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200",children:"Jog"}),O.jsxs("div",{className:`grid grid-cols-1 gap-3 sm:grid-cols-3 ${o}`,children:[O.jsxs("label",{className:"flex flex-col gap-2",children:[O.jsx("span",{className:"text-xs font-medium text-zinc-700 dark:text-zinc-300",children:"Frequency (Hz)"}),O.jsx("input",{type:"number",className:"rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400",value:b.jogFreq,onChange:g=>l(M,{jogFreq:Number(g.target.value)}),disabled:b.isJogging})]}),O.jsxs("label",{className:"flex flex-col gap-2",children:[O.jsx("span",{className:"text-xs font-medium text-zinc-700 dark:text-zinc-300",children:"Direction"}),O.jsxs("select",{className:"rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white",value:b.direction,onChange:g=>l(M,{direction:g.target.value}),disabled:b.isJogging,children:[O.jsx("option",{value:"cw",children:"cw (clockwise)"}),O.jsx("option",{value:"ccw",children:"ccw (counterclockwise)"})]})]}),O.jsx("div",{className:"flex items-end gap-2",children:b.isJogging?O.jsx("button",{onClick:()=>p(M),className:"w-full rounded-lg bg-red-600 px-3 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900",children:"Stop"}):O.jsx("button",{onClick:()=>m(M),disabled:!e,className:"w-full rounded-lg bg-emerald-600 px-3 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900",children:"Start Jog"})})]})]}),O.jsxs("section",{className:"mb-2",children:[O.jsx("h4",{className:"mb-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200",children:"Position"}),O.jsxs("div",{className:`grid grid-cols-1 gap-3 sm:grid-cols-3 ${o}`,children:[O.jsx("div",{className:"flex items-end",children:O.jsx("button",{onClick:()=>x(M),disabled:!e,className:"w-full rounded-lg bg-cyan-600 px-3 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900",children:"Get Position"})}),O.jsxs("label",{className:"flex flex-col gap-2",children:[O.jsx("span",{className:"text-xs font-medium text-zinc-700 dark:text-zinc-300",children:"Set position value"}),O.jsx("input",{type:"number",className:"rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400",value:b.setPosValue,onChange:g=>l(M,{setPosValue:Number(g.target.value)})})]}),O.jsx("div",{className:"flex items-end",children:O.jsx("button",{onClick:()=>v(M),disabled:!e,className:"w-full rounded-lg bg-zinc-700 px-3 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-900",children:"Set Position"})})]})]})]},M)};return O.jsxs("section",{className:"mt-6",children:[O.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[O.jsx("h3",{className:"text-lg font-semibold text-zinc-900 dark:text-white",children:"Low-level Motor Controls"}),O.jsx("button",{onClick:_,className:"rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900",children:"Stop All Motors"})]}),O.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3",children:[S(1),S(2),S(3)]}),!e&&O.jsx("div",{className:"mt-4 rounded-lg border border-amber-300 bg-amber-100 px-4 py-3 text-sm font-medium text-amber-800 dark:border-amber-700 dark:bg-amber-900/60 dark:text-amber-200",children:"Raspberry Pi is not connected."})]})},pg=8,mg=({onSendCommand:s,isPiConnected:e,lastMessage:n})=>{const[r,o]=Ht.useState({channels:Array(pg).fill(!1),ts:void 0}),[l,u]=Ht.useState(!1),[f,m]=Ht.useState(200),p=Ht.useMemo(()=>e?"":"pointer-events-none opacity-50",[e]),x=M=>s(M);Ht.useEffect(()=>{if(!n||n.type!=="mux_state")return;const M=n.channels;if(!Array.isArray(M))return;const b=M.map(y=>!!y);o({channels:b,ts:typeof n.ts=="number"?n.ts:Date.now()/1e3})},[n]),Ht.useEffect(()=>{if(!l||!e)return;const M=setInterval(()=>{x({type:"mux_read_all"})},f);return()=>clearInterval(M)},[l,f,e,x]);const v=()=>{x({type:"mux_read_all"})},_=()=>{u(!l)},S=r.ts!=null?new Date(r.ts*1e3).toLocaleTimeString():"—";return O.jsxs("section",{className:"mt-6 rounded-2xl border border-zinc-300 bg-white p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900",children:[O.jsxs("div",{className:"mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center",children:[O.jsxs("div",{children:[O.jsx("h3",{className:"text-lg font-semibold text-zinc-900 dark:text-white",children:"Multiplexer (74HC4051) Monitor"}),O.jsx("p",{className:"mt-1 text-xs text-zinc-500 dark:text-zinc-400",children:"Reads the digital states of the multiplexer channels (limit switches, inputs, etc.)."})]}),O.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[O.jsxs("span",{className:`inline-flex items-center gap-1 rounded-full px-2 py-1 font-medium ${e?"bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200":"bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"}`,children:[O.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400"}),e?"Pi online":"Pi offline"]}),O.jsxs("span",{className:"text-zinc-500 dark:text-zinc-400",children:["Last update:"," ",O.jsx("span",{className:"font-mono text-zinc-300",children:S})]})]})]}),O.jsxs("div",{className:`mb-4 flex flex-col gap-3 border-b border-zinc-200 pb-4 text-xs dark:border-zinc-800 ${p}`,children:[O.jsxs("div",{className:"flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",children:[O.jsxs("div",{className:"flex gap-2",children:[O.jsx("button",{onClick:v,disabled:!e,className:"rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900",children:"Read once"}),O.jsx("button",{onClick:_,disabled:!e,className:`rounded-lg px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 ${l?"bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500":"bg-zinc-700 hover:bg-zinc-800 focus:ring-zinc-500"}`,children:l?"Stop auto-read":"Start auto-read"})]}),O.jsxs("div",{className:"flex items-center gap-2",children:[O.jsx("span",{className:"text-[11px] text-zinc-500 dark:text-zinc-400",children:"Interval (ms)"}),O.jsx("input",{type:"number",min:50,step:10,className:"w-24 rounded-lg border border-zinc-400 bg-white px-2 py-1.5 text-xs text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400",value:f,onChange:M=>m(Number(M.target.value)||100)})]})]}),!e&&O.jsx("p",{className:"text-[11px] text-amber-600 dark:text-amber-300",children:"Raspberry Pi is not connected. Multiplexer readings will be unavailable."})]}),O.jsx("div",{className:"grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-8",children:r.channels.map((M,b)=>O.jsxs("div",{className:"flex flex-col items-center justify-center gap-1 rounded-xl border border-zinc-200 bg-zinc-50 px-2 py-3 text-xs dark:border-zinc-700 dark:bg-zinc-900/60",children:[O.jsxs("span",{className:"font-mono text-[11px] text-zinc-500 dark:text-zinc-400",children:["CH ",b]}),O.jsx("div",{className:`h-4 w-4 rounded-full border-2 ${M?"border-emerald-400 bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]":"border-zinc-500 bg-zinc-800"}`}),O.jsx("span",{className:`text-[11px] font-medium ${M?"text-emerald-500 dark:text-emerald-300":"text-zinc-500 dark:text-zinc-400"}`,children:M?"ON":"OFF"})]},b))})]})},xg=({onSendCommand:s,isPiConnected:e,lastMessage:n})=>O.jsxs("div",{className:"mx-auto w-full max-w-6xl",children:[O.jsxs("div",{className:"mb-6 flex items-center justify-between",children:[O.jsx("h2",{className:"text-2xl font-bold text-zinc-900 dark:text-white",children:"Machine Control Panel"}),O.jsx("p",{className:"text-xs text-zinc-500 dark:text-zinc-400",children:"High-level Cartesian control, low-level motors and multiplexer monitor."})]}),O.jsx(fg,{onSendCommand:s,isPiConnected:e}),O.jsx(mg,{onSendCommand:s,isPiConnected:e,lastMessage:n}),O.jsx(hg,{onSendCommand:s,isPiConnected:e})]}),gg=({isConnected:s,isPiConnected:e,lastMessage:n})=>{const r=f=>{if(!f)return null;try{return new Date(f*1e3).toLocaleTimeString()}catch{return null}},o=f=>{if(!f||typeof f!="object")return null;const m=Object.entries(f);return m.length?O.jsx("div",{className:"mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3",children:m.map(([p,x])=>O.jsxs("div",{className:"rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-xs shadow-sm dark:border-zinc-700 dark:bg-zinc-900/60",children:[O.jsx("div",{className:"mb-1 flex items-center justify-between",children:O.jsxs("span",{className:"font-semibold text-zinc-900 dark:text-zinc-50",children:["Axis ",p]})}),O.jsxs("div",{className:"space-y-1 text-[11px] text-zinc-700 dark:text-zinc-300",children:[O.jsxs("div",{className:"flex justify-between gap-2",children:[O.jsx("span",{className:"font-medium text-zinc-500 dark:text-zinc-400",children:"Steps"}),O.jsx("span",{className:"tabular-nums",children:x?.steps??"—"})]}),O.jsxs("div",{className:"flex justify-between gap-2",children:[O.jsx("span",{className:"font-medium text-zinc-500 dark:text-zinc-400",children:"Units"}),O.jsx("span",{className:"tabular-nums",children:typeof x?.units=="number"?x.units.toFixed(3):"—"})]})]})]},p))}):null},l=()=>{if(!n)return O.jsx("div",{className:"rounded-xl border border-dashed border-zinc-300 bg-zinc-50/80 px-4 py-6 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-400",children:"No messages yet"});const f=r(n.ts);return n.type==="status"?O.jsxs("div",{className:"space-y-3 rounded-2xl border border-blue-200 bg-blue-50/80 px-4 py-3 text-sm text-blue-900 shadow-sm dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-100",children:[O.jsxs("div",{className:"flex items-start justify-between gap-3",children:[O.jsxs("div",{children:[O.jsx("p",{className:"font-semibold",children:"Status"}),O.jsx("p",{className:"mt-0.5 text-xs text-blue-900/80 dark:text-blue-100/80",children:n.message??"No status message provided."})]}),f&&O.jsx("span",{className:"mt-1 inline-flex items-center rounded-full bg-blue-100/70 px-2 py-0.5 text-[10px] font-medium text-blue-900 dark:bg-blue-900/60 dark:text-blue-100",children:f})]}),o(n.axes)]}):n.type==="position"?O.jsxs("div",{className:"space-y-2 rounded-2xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-sm text-emerald-900 shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-100",children:[O.jsxs("div",{className:"flex items-start justify-between gap-3",children:[O.jsxs("div",{children:[O.jsx("p",{className:"font-semibold",children:"Current Position"}),O.jsx("p",{className:"mt-0.5 text-xs text-emerald-900/80 dark:text-emerald-100/80",children:"Raw payload:"})]}),f&&O.jsx("span",{className:"mt-1 inline-flex items-center rounded-full bg-emerald-100/70 px-2 py-0.5 text-[10px] font-medium text-emerald-900 dark:bg-emerald-900/60 dark:text-emerald-100",children:f})]}),O.jsx("pre",{className:"mt-1 overflow-x-auto rounded-lg bg-emerald-900/90 px-3 py-2 text-[11px] text-emerald-50",children:JSON.stringify(n,null,2)})]}):n.type==="ok"?O.jsxs("div",{className:"rounded-2xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-sm text-emerald-900 shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-100",children:[O.jsxs("div",{className:"flex items-start justify-between gap-3",children:[O.jsxs("div",{children:[O.jsx("p",{className:"font-semibold",children:"Command OK"}),O.jsx("p",{className:"mt-0.5 text-xs text-emerald-900/80 dark:text-emerald-100/80",children:n.command?`Command "${n.command}" completed.`:"Command completed successfully."})]}),f&&O.jsx("span",{className:"mt-1 inline-flex items-center rounded-full bg-emerald-100/70 px-2 py-0.5 text-[10px] font-medium text-emerald-900 dark:bg-emerald-900/60 dark:text-emerald-100",children:f})]}),n.details&&O.jsx("pre",{className:"mt-2 overflow-x-auto rounded-lg bg-emerald-900/90 px-3 py-2 text-[11px] text-emerald-50",children:JSON.stringify(n.details,null,2)})]}):n.type==="error"?O.jsxs("div",{className:"rounded-2xl border border-rose-200 bg-rose-50/80 px-4 py-3 text-sm text-rose-900 shadow-sm dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-100",children:[O.jsxs("div",{className:"flex items-start justify-between gap-3",children:[O.jsxs("div",{children:[O.jsx("p",{className:"font-semibold",children:"Error"}),O.jsx("p",{className:"mt-0.5 text-xs text-rose-900/80 dark:text-rose-100/80",children:n.message??"Unknown error."}),n.command&&O.jsxs("p",{className:"mt-1 text-[11px] text-rose-900/70 dark:text-rose-100/70",children:["Command: ",O.jsx("code",{children:n.command})]})]}),f&&O.jsx("span",{className:"mt-1 inline-flex items-center rounded-full bg-rose-100/70 px-2 py-0.5 text-[10px] font-medium text-rose-900 dark:bg-rose-900/60 dark:text-rose-100",children:f})]}),n.raw&&O.jsx("pre",{className:"mt-2 overflow-x-auto rounded-lg bg-rose-900/90 px-3 py-2 text-[11px] text-rose-50",children:JSON.stringify(n.raw,null,2)})]}):O.jsxs("div",{className:"rounded-2xl border border-zinc-200 bg-zinc-50/80 px-4 py-3 text-xs text-zinc-800 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100",children:[O.jsx("p",{className:"mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400",children:"Raw message"}),O.jsx("pre",{className:"overflow-x-auto rounded-lg bg-zinc-900/90 px-3 py-2 text-[11px] text-zinc-50",children:JSON.stringify(n,null,2)})]})},u=(f,m)=>O.jsxs("div",{className:"relative flex h-3 w-3 items-center justify-center",children:[f&&O.jsx("span",{className:"absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping"}),O.jsx("span",{className:`relative inline-flex h-3 w-3 rounded-full ${f?"bg-emerald-500":"bg-zinc-400 dark:bg-zinc-600"}`})]});return O.jsx("div",{className:"w-full max-w-3xl mx-auto mt-8",children:O.jsxs("div",{className:"rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70",children:[O.jsxs("div",{className:"flex flex-col gap-4 border-b border-zinc-200 pb-4 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between",children:[O.jsxs("div",{children:[O.jsx("h2",{className:"text-lg font-semibold text-zinc-900 dark:text-zinc-50",children:"Connection Status"}),O.jsx("p",{className:"mt-1 text-xs text-zinc-500 dark:text-zinc-400",children:"WebSocket server & Raspberry Pi machine controller"})]}),O.jsxs("div",{className:"flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:gap-4",children:[O.jsxs("div",{className:"flex items-center gap-2",children:[u(s),O.jsxs("span",{className:"font-medium text-zinc-700 dark:text-zinc-200",children:["Server:"," ",O.jsx("span",{className:s?"text-emerald-600 dark:text-emerald-400":"text-rose-600 dark:text-rose-400",children:s?"Connected":"Disconnected"})]})]}),O.jsxs("div",{className:"flex items-center gap-2",children:[u(e),O.jsxs("span",{className:"font-medium text-zinc-700 dark:text-zinc-200",children:["Raspberry Pi:"," ",O.jsx("span",{className:e?"text-emerald-600 dark:text-emerald-400":"text-rose-600 dark:text-rose-400",children:e?"Connected":"Disconnected"})]})]})]})]}),O.jsxs("div",{className:"mt-4 space-y-2",children:[O.jsxs("div",{className:"flex items-center justify-between gap-3",children:[O.jsx("h3",{className:"text-sm font-semibold text-zinc-900 dark:text-zinc-50",children:"Last Response"}),n?.type&&O.jsxs("span",{className:"inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",children:["Type: ",O.jsx("span",{className:"ml-1 font-semibold",children:n.type})]})]}),l()]})]})})};const qd="181",Hs={ROTATE:0,DOLLY:1,PAN:2},Vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_g=0,Op=1,vg=2,Gm=1,yg=2,Hi=3,Ar=0,Fn=1,Mi=2,ji=0,Gs=1,zp=2,kp=3,Bp=4,Sg=5,Yr=100,Mg=101,Eg=102,bg=103,Tg=104,wg=200,Ag=201,Cg=202,Rg=203,rd=204,sd=205,Pg=206,Dg=207,Lg=208,Ng=209,Ug=210,Ig=211,Fg=212,Og=213,zg=214,ad=0,od=1,ld=2,js=3,cd=4,ud=5,dd=6,fd=7,Wm=0,kg=1,Bg=2,wr=0,Vg=1,Hg=2,Gg=3,Wg=4,jg=5,Xg=6,Yg=7,jm=300,Xs=301,Ys=302,hd=303,pd=304,kl=306,md=1e3,Gi=1001,xd=1002,jn=1003,qg=1004,rl=1005,ti=1006,wu=1007,Kr=1008,Ti=1009,Xm=1010,Ym=1011,Va=1012,Kd=1013,$r=1014,Wi=1015,$s=1016,$d=1017,Zd=1018,Ha=1020,qm=35902,Km=35899,$m=1021,Zm=1022,fi=1023,Ga=1026,Wa=1027,Jm=1028,Jd=1029,Qd=1030,ef=1031,tf=1033,Cl=33776,Rl=33777,Pl=33778,Dl=33779,gd=35840,_d=35841,vd=35842,yd=35843,Sd=36196,Md=37492,Ed=37496,bd=37808,Td=37809,wd=37810,Ad=37811,Cd=37812,Rd=37813,Pd=37814,Dd=37815,Ld=37816,Nd=37817,Ud=37818,Id=37819,Fd=37820,Od=37821,zd=36492,kd=36494,Bd=36495,Vd=36283,Hd=36284,Gd=36285,Wd=36286,Kg=3200,$g=3201,Qm=0,Zg=1,br="",Qn="srgb",qs="srgb-linear",Ul="linear",Nt="srgb",As=7680,Vp=519,Jg=512,Qg=513,e_=514,e0=515,t_=516,n_=517,i_=518,r_=519,Hp=35044,Gp="300 es",Ei=2e3,Il=2001;function t0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function s_(){const s=Fl("canvas");return s.style.display="block",s}const Wp={};function jp(...s){const e="THREE."+s.shift();console.log(e,...s)}function ct(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Kt(...s){const e="THREE."+s.shift();console.error(e,...s)}function ja(...s){const e=s.join(" ");e in Wp||(Wp[e]=!0,ct(...s))}function a_(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}class es{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ll=Math.PI/180,jd=180/Math.PI;function Xa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function yt(s,e,n){return Math.max(e,Math.min(n,s))}function o_(s,e){return(s%e+e)%e}function Au(s,e,n){return(1-n)*s+n*e}function Na(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const l_={DEG2RAD:Ll};class ft{constructor(e=0,n=0){ft.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zr{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,f){let m=r[o+0],p=r[o+1],x=r[o+2],v=r[o+3],_=l[u+0],S=l[u+1],M=l[u+2],b=l[u+3];if(f<=0){e[n+0]=m,e[n+1]=p,e[n+2]=x,e[n+3]=v;return}if(f>=1){e[n+0]=_,e[n+1]=S,e[n+2]=M,e[n+3]=b;return}if(v!==b||m!==_||p!==S||x!==M){let y=m*_+p*S+x*M+v*b;y<0&&(_=-_,S=-S,M=-M,b=-b,y=-y);let g=1-f;if(y<.9995){const N=Math.acos(y),P=Math.sin(N);g=Math.sin(g*N)/P,f=Math.sin(f*N)/P,m=m*g+_*f,p=p*g+S*f,x=x*g+M*f,v=v*g+b*f}else{m=m*g+_*f,p=p*g+S*f,x=x*g+M*f,v=v*g+b*f;const N=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=N,p*=N,x*=N,v*=N}}e[n]=m,e[n+1]=p,e[n+2]=x,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,o,l,u){const f=r[o],m=r[o+1],p=r[o+2],x=r[o+3],v=l[u],_=l[u+1],S=l[u+2],M=l[u+3];return e[n]=f*M+x*v+m*S-p*_,e[n+1]=m*M+x*_+p*v-f*S,e[n+2]=p*M+x*S+f*_-m*v,e[n+3]=x*M-f*v-m*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,m=Math.sin,p=f(r/2),x=f(o/2),v=f(l/2),_=m(r/2),S=m(o/2),M=m(l/2);switch(u){case"XYZ":this._x=_*x*v+p*S*M,this._y=p*S*v-_*x*M,this._z=p*x*M+_*S*v,this._w=p*x*v-_*S*M;break;case"YXZ":this._x=_*x*v+p*S*M,this._y=p*S*v-_*x*M,this._z=p*x*M-_*S*v,this._w=p*x*v+_*S*M;break;case"ZXY":this._x=_*x*v-p*S*M,this._y=p*S*v+_*x*M,this._z=p*x*M+_*S*v,this._w=p*x*v-_*S*M;break;case"ZYX":this._x=_*x*v-p*S*M,this._y=p*S*v+_*x*M,this._z=p*x*M-_*S*v,this._w=p*x*v+_*S*M;break;case"YZX":this._x=_*x*v+p*S*M,this._y=p*S*v+_*x*M,this._z=p*x*M-_*S*v,this._w=p*x*v-_*S*M;break;case"XZY":this._x=_*x*v-p*S*M,this._y=p*S*v-_*x*M,this._z=p*x*M+_*S*v,this._w=p*x*v+_*S*M;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],f=n[5],m=n[9],p=n[2],x=n[6],v=n[10],_=r+f+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(x-m)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(x-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+x)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(m+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,f=n._x,m=n._y,p=n._z,x=n._w;return this._x=r*x+u*f+o*p-l*m,this._y=o*x+u*m+l*f-r*p,this._z=l*x+u*p+r*m-o*f,this._w=u*x-r*f-o*m-l*p,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let m=1-n;if(f<.9995){const p=Math.acos(f),x=Math.sin(p);m=Math.sin(m*p)/x,n=Math.sin(n*p)/x,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+l*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+l*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Xp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Xp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,m=e.w,p=2*(u*o-f*r),x=2*(f*n-l*o),v=2*(l*r-u*n);return this.x=n+m*p+u*v-f*x,this.y=r+m*x+f*p-l*v,this.z=o+m*v+l*x-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,f=n.y,m=n.z;return this.x=o*m-l*f,this.y=l*u-r*m,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cu.copy(this).projectOnVector(e),this.sub(Cu)}reflect(e){return this.sub(Cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cu=new Q,Xp=new Zr;class pt{constructor(e,n,r,o,l,u,f,m,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,m,p)}set(e,n,r,o,l,u,f,m,p){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=n,x[4]=l,x[5]=m,x[6]=r,x[7]=u,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[3],m=r[6],p=r[1],x=r[4],v=r[7],_=r[2],S=r[5],M=r[8],b=o[0],y=o[3],g=o[6],N=o[1],P=o[4],U=o[7],G=o[2],L=o[5],B=o[8];return l[0]=u*b+f*N+m*G,l[3]=u*y+f*P+m*L,l[6]=u*g+f*U+m*B,l[1]=p*b+x*N+v*G,l[4]=p*y+x*P+v*L,l[7]=p*g+x*U+v*B,l[2]=_*b+S*N+M*G,l[5]=_*y+S*P+M*L,l[8]=_*g+S*U+M*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],x=e[8];return n*u*x-n*f*p-r*l*x+r*f*m+o*l*p-o*u*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],x=e[8],v=x*u-f*p,_=f*m-x*l,S=p*l-u*m,M=n*v+r*_+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=v*b,e[1]=(o*p-x*r)*b,e[2]=(f*r-o*u)*b,e[3]=_*b,e[4]=(x*n-o*m)*b,e[5]=(o*l-f*n)*b,e[6]=S*b,e[7]=(r*m-p*n)*b,e[8]=(u*n-r*l)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,f){const m=Math.cos(l),p=Math.sin(l);return this.set(r*m,r*p,-r*(m*u+p*f)+u+e,-o*p,o*m,-o*(-p*u+m*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Ru.makeScale(e,n)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ru.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ru=new pt,Yp=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qp=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function c_(){const s={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Nt&&(o.r=Xi(o.r),o.g=Xi(o.g),o.b=Xi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Nt&&(o.r=Ws(o.r),o.g=Ws(o.g),o.b=Ws(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===br?Ul:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return ja("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return ja("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[qs]:{primaries:e,whitePoint:r,transfer:Ul,toXYZ:Yp,fromXYZ:qp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:Yp,fromXYZ:qp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),s}const wt=c_();function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class u_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Cs===void 0&&(Cs=Fl("canvas")),Cs.width=e.width,Cs.height=e.height;const o=Cs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Cs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Xi(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Xi(n[r]/255)*255):n[r]=Xi(n[r]);return{data:n,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let d_=0;class nf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Pu(o[u].image)):l.push(Pu(o[u]))}else l=Pu(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function Pu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?u_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let f_=0;const Du=new Q;class wn extends es{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,r=Gi,o=Gi,l=ti,u=Kr,f=fi,m=Ti,p=wn.DEFAULT_ANISOTROPY,x=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Xa(),this.name="",this.source=new nf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Du).x}get height(){return this.source.getSize(Du).y}get depth(){return this.source.getSize(Du).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ct(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ct(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case md:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case md:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=jm;wn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,r=0,o=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const m=e.elements,p=m[0],x=m[4],v=m[8],_=m[1],S=m[5],M=m[9],b=m[2],y=m[6],g=m[10];if(Math.abs(x-_)<.01&&Math.abs(v-b)<.01&&Math.abs(M-y)<.01){if(Math.abs(x+_)<.1&&Math.abs(v+b)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(p+1)/2,U=(S+1)/2,G=(g+1)/2,L=(x+_)/4,B=(v+b)/4,J=(M+y)/4;return P>U&&P>G?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=L/r,l=B/r):U>G?U<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(U),r=L/o,l=J/o):G<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(G),r=B/l,o=J/l),this.set(r,o,l,n),this}let N=Math.sqrt((y-M)*(y-M)+(v-b)*(v-b)+(_-x)*(_-x));return Math.abs(N)<.001&&(N=1),this.x=(y-M)/N,this.y=(v-b)/N,this.z=(_-x)/N,this.w=Math.acos((p+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this.w=yt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this.w=yt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h_ extends es{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const o={width:e,height:n,depth:r.depth},l=new wn(o);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new nf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends h_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class n0 extends wn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=jn,this.minFilter=jn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class p_ extends wn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=jn,this.minFilter=jn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,li):li.fromBufferAttribute(l,u),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sl.copy(r.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),al.subVectors(this.max,Ua),Rs.subVectors(e.a,Ua),Ps.subVectors(e.b,Ua),Ds.subVectors(e.c,Ua),gr.subVectors(Ps,Rs),_r.subVectors(Ds,Ps),Vr.subVectors(Rs,Ds);let n=[0,-gr.z,gr.y,0,-_r.z,_r.y,0,-Vr.z,Vr.y,gr.z,0,-gr.x,_r.z,0,-_r.x,Vr.z,0,-Vr.x,-gr.y,gr.x,0,-_r.y,_r.x,0,-Vr.y,Vr.x,0];return!Lu(n,Rs,Ps,Ds,al)||(n=[1,0,0,0,1,0,0,0,1],!Lu(n,Rs,Ps,Ds,al))?!1:(ol.crossVectors(gr,_r),n=[ol.x,ol.y,ol.z],Lu(n,Rs,Ps,Ds,al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],li=new Q,sl=new Ya,Rs=new Q,Ps=new Q,Ds=new Q,gr=new Q,_r=new Q,Vr=new Q,Ua=new Q,al=new Q,ol=new Q,Hr=new Q;function Lu(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Hr.fromArray(s,l);const f=o.x*Math.abs(Hr.x)+o.y*Math.abs(Hr.y)+o.z*Math.abs(Hr.z),m=e.dot(Hr),p=n.dot(Hr),x=r.dot(Hr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>f)return!1}return!0}const m_=new Ya,Ia=new Q,Nu=new Q;class Bl{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):m_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);const n=Ia.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ia,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(Nu)),this.expandByPoint(Ia.copy(e.center).sub(Nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Oi=new Q,Uu=new Q,ll=new Q,vr=new Q,Iu=new Q,cl=new Q,Fu=new Q;class rf{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,n),Oi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Uu.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),vr.copy(this.origin).sub(Uu);const l=e.distanceTo(n)*.5,u=-this.direction.dot(ll),f=vr.dot(this.direction),m=-vr.dot(ll),p=vr.lengthSq(),x=Math.abs(1-u*u);let v,_,S,M;if(x>0)if(v=u*m-f,_=u*f-m,M=l*x,v>=0)if(_>=-M)if(_<=M){const b=1/x;v*=b,_*=b,S=v*(v+u*_+2*f)+_*(u*v+_+2*m)+p}else _=l,v=Math.max(0,-(u*_+f)),S=-v*v+_*(_+2*m)+p;else _=-l,v=Math.max(0,-(u*_+f)),S=-v*v+_*(_+2*m)+p;else _<=-M?(v=Math.max(0,-(-u*l+f)),_=v>0?-l:Math.min(Math.max(-l,-m),l),S=-v*v+_*(_+2*m)+p):_<=M?(v=0,_=Math.min(Math.max(-l,-m),l),S=_*(_+2*m)+p):(v=Math.max(0,-(u*l+f)),_=v>0?l:Math.min(Math.max(-l,-m),l),S=-v*v+_*(_+2*m)+p);else _=u>0?-l:l,v=Math.max(0,-(u*_+f)),S=-v*v+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Uu).addScaledVector(ll,_),S}intersectSphere(e,n){Oi.subVectors(e.center,this.origin);const r=Oi.dot(this.direction),o=Oi.dot(Oi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,m=r+u;return m<0?null:f<0?this.at(m,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,f,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),x>=0?(l=(e.min.y-_.y)*x,u=(e.max.y-_.y)*x):(l=(e.max.y-_.y)*x,u=(e.min.y-_.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(f=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),r>m||f>o)||((f>r||r!==r)&&(r=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,n,r,o,l){Iu.subVectors(n,e),cl.subVectors(r,e),Fu.crossVectors(Iu,cl);let u=this.direction.dot(Fu),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;vr.subVectors(this.origin,e);const m=f*this.direction.dot(cl.crossVectors(vr,cl));if(m<0)return null;const p=f*this.direction.dot(Iu.cross(vr));if(p<0||m+p>u)return null;const x=-f*vr.dot(Fu);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,n,r,o,l,u,f,m,p,x,v,_,S,M,b,y){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,m,p,x,v,_,S,M,b,y)}set(e,n,r,o,l,u,f,m,p,x,v,_,S,M,b,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=o,g[1]=l,g[5]=u,g[9]=f,g[13]=m,g[2]=p,g[6]=x,g[10]=v,g[14]=_,g[3]=S,g[7]=M,g[11]=b,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Ls.setFromMatrixColumn(e,0).length(),l=1/Ls.setFromMatrixColumn(e,1).length(),u=1/Ls.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),m=Math.cos(o),p=Math.sin(o),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=u*x,S=u*v,M=f*x,b=f*v;n[0]=m*x,n[4]=-m*v,n[8]=p,n[1]=S+M*p,n[5]=_-b*p,n[9]=-f*m,n[2]=b-_*p,n[6]=M+S*p,n[10]=u*m}else if(e.order==="YXZ"){const _=m*x,S=m*v,M=p*x,b=p*v;n[0]=_+b*f,n[4]=M*f-S,n[8]=u*p,n[1]=u*v,n[5]=u*x,n[9]=-f,n[2]=S*f-M,n[6]=b+_*f,n[10]=u*m}else if(e.order==="ZXY"){const _=m*x,S=m*v,M=p*x,b=p*v;n[0]=_-b*f,n[4]=-u*v,n[8]=M+S*f,n[1]=S+M*f,n[5]=u*x,n[9]=b-_*f,n[2]=-u*p,n[6]=f,n[10]=u*m}else if(e.order==="ZYX"){const _=u*x,S=u*v,M=f*x,b=f*v;n[0]=m*x,n[4]=M*p-S,n[8]=_*p+b,n[1]=m*v,n[5]=b*p+_,n[9]=S*p-M,n[2]=-p,n[6]=f*m,n[10]=u*m}else if(e.order==="YZX"){const _=u*m,S=u*p,M=f*m,b=f*p;n[0]=m*x,n[4]=b-_*v,n[8]=M*v+S,n[1]=v,n[5]=u*x,n[9]=-f*x,n[2]=-p*x,n[6]=S*v+M,n[10]=_-b*v}else if(e.order==="XZY"){const _=u*m,S=u*p,M=f*m,b=f*p;n[0]=m*x,n[4]=-v,n[8]=p*x,n[1]=_*v+b,n[5]=u*x,n[9]=S*v-M,n[2]=M*v-S,n[6]=f*x,n[10]=b*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(x_,e,g_)}lookAt(e,n,r){const o=this.elements;return Gn.subVectors(e,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),yr.crossVectors(r,Gn),yr.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),yr.crossVectors(r,Gn)),yr.normalize(),ul.crossVectors(Gn,yr),o[0]=yr.x,o[4]=ul.x,o[8]=Gn.x,o[1]=yr.y,o[5]=ul.y,o[9]=Gn.y,o[2]=yr.z,o[6]=ul.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[4],m=r[8],p=r[12],x=r[1],v=r[5],_=r[9],S=r[13],M=r[2],b=r[6],y=r[10],g=r[14],N=r[3],P=r[7],U=r[11],G=r[15],L=o[0],B=o[4],J=o[8],C=o[12],A=o[1],H=o[5],Z=o[9],ie=o[13],fe=o[2],ce=o[6],ue=o[10],de=o[14],V=o[3],ae=o[7],ee=o[11],I=o[15];return l[0]=u*L+f*A+m*fe+p*V,l[4]=u*B+f*H+m*ce+p*ae,l[8]=u*J+f*Z+m*ue+p*ee,l[12]=u*C+f*ie+m*de+p*I,l[1]=x*L+v*A+_*fe+S*V,l[5]=x*B+v*H+_*ce+S*ae,l[9]=x*J+v*Z+_*ue+S*ee,l[13]=x*C+v*ie+_*de+S*I,l[2]=M*L+b*A+y*fe+g*V,l[6]=M*B+b*H+y*ce+g*ae,l[10]=M*J+b*Z+y*ue+g*ee,l[14]=M*C+b*ie+y*de+g*I,l[3]=N*L+P*A+U*fe+G*V,l[7]=N*B+P*H+U*ce+G*ae,l[11]=N*J+P*Z+U*ue+G*ee,l[15]=N*C+P*ie+U*de+G*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],m=e[9],p=e[13],x=e[2],v=e[6],_=e[10],S=e[14],M=e[3],b=e[7],y=e[11],g=e[15];return M*(+l*m*v-o*p*v-l*f*_+r*p*_+o*f*S-r*m*S)+b*(+n*m*S-n*p*_+l*u*_-o*u*S+o*p*x-l*m*x)+y*(+n*p*v-n*f*S-l*u*v+r*u*S+l*f*x-r*p*x)+g*(-o*f*x-n*m*v+n*f*_+o*u*v-r*u*_+r*m*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],x=e[8],v=e[9],_=e[10],S=e[11],M=e[12],b=e[13],y=e[14],g=e[15],N=v*y*p-b*_*p+b*m*S-f*y*S-v*m*g+f*_*g,P=M*_*p-x*y*p-M*m*S+u*y*S+x*m*g-u*_*g,U=x*b*p-M*v*p+M*f*S-u*b*S-x*f*g+u*v*g,G=M*v*m-x*b*m-M*f*_+u*b*_+x*f*y-u*v*y,L=n*N+r*P+o*U+l*G;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/L;return e[0]=N*B,e[1]=(b*_*l-v*y*l-b*o*S+r*y*S+v*o*g-r*_*g)*B,e[2]=(f*y*l-b*m*l+b*o*p-r*y*p-f*o*g+r*m*g)*B,e[3]=(v*m*l-f*_*l-v*o*p+r*_*p+f*o*S-r*m*S)*B,e[4]=P*B,e[5]=(x*y*l-M*_*l+M*o*S-n*y*S-x*o*g+n*_*g)*B,e[6]=(M*m*l-u*y*l-M*o*p+n*y*p+u*o*g-n*m*g)*B,e[7]=(u*_*l-x*m*l+x*o*p-n*_*p-u*o*S+n*m*S)*B,e[8]=U*B,e[9]=(M*v*l-x*b*l-M*r*S+n*b*S+x*r*g-n*v*g)*B,e[10]=(u*b*l-M*f*l+M*r*p-n*b*p-u*r*g+n*f*g)*B,e[11]=(x*f*l-u*v*l-x*r*p+n*v*p+u*r*S-n*f*S)*B,e[12]=G*B,e[13]=(x*b*o-M*v*o+M*r*_-n*b*_-x*r*y+n*v*y)*B,e[14]=(M*f*o-u*b*o-M*r*m+n*b*m+u*r*y-n*f*y)*B,e[15]=(u*v*o-x*f*o+x*r*m-n*v*m-u*r*_+n*f*_)*B,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,f=e.y,m=e.z,p=l*u,x=l*f;return this.set(p*u+r,p*f-o*m,p*m+o*f,0,p*f+o*m,x*f+r,x*m-o*u,0,p*m-o*f,x*m+o*u,l*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,f=n._z,m=n._w,p=l+l,x=u+u,v=f+f,_=l*p,S=l*x,M=l*v,b=u*x,y=u*v,g=f*v,N=m*p,P=m*x,U=m*v,G=r.x,L=r.y,B=r.z;return o[0]=(1-(b+g))*G,o[1]=(S+U)*G,o[2]=(M-P)*G,o[3]=0,o[4]=(S-U)*L,o[5]=(1-(_+g))*L,o[6]=(y+N)*L,o[7]=0,o[8]=(M+P)*B,o[9]=(y-N)*B,o[10]=(1-(_+b))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let l=Ls.set(o[0],o[1],o[2]).length();const u=Ls.set(o[4],o[5],o[6]).length(),f=Ls.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ci.copy(this);const p=1/l,x=1/u,v=1/f;return ci.elements[0]*=p,ci.elements[1]*=p,ci.elements[2]*=p,ci.elements[4]*=x,ci.elements[5]*=x,ci.elements[6]*=x,ci.elements[8]*=v,ci.elements[9]*=v,ci.elements[10]*=v,n.setFromRotationMatrix(ci),r.x=l,r.y=u,r.z=f,this}makePerspective(e,n,r,o,l,u,f=Ei,m=!1){const p=this.elements,x=2*l/(n-e),v=2*l/(r-o),_=(n+e)/(n-e),S=(r+o)/(r-o);let M,b;if(m)M=l/(u-l),b=u*l/(u-l);else if(f===Ei)M=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(f===Il)M=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=x,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,l,u,f=Ei,m=!1){const p=this.elements,x=2/(n-e),v=2/(r-o),_=-(n+e)/(n-e),S=-(r+o)/(r-o);let M,b;if(m)M=1/(u-l),b=u/(u-l);else if(f===Ei)M=-2/(u-l),b=-(u+l)/(u-l);else if(f===Il)M=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=x,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ls=new Q,ci=new Yt,x_=new Q(0,0,0),g_=new Q(1,1,1),yr=new Q,ul=new Q,Gn=new Q,Kp=new Yt,$p=new Zr;class wi{constructor(e=0,n=0,r=0,o=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],m=o[1],p=o[5],x=o[9],v=o[2],_=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(yt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $p.setFromEuler(this),this.setFromQuaternion($p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class i0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let __=0;const Zp=new Q,Ns=new Zr,zi=new Yt,dl=new Q,Fa=new Q,v_=new Q,y_=new Zr,Jp=new Q(1,0,0),Qp=new Q(0,1,0),em=new Q(0,0,1),tm={type:"added"},S_={type:"removed"},Us={type:"childadded",child:null},Ou={type:"childremoved",child:null};class mn extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new Q,n=new wi,r=new Zr,o=new Q(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Yt},normalMatrix:{value:new pt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new i0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Jp,e)}rotateY(e){return this.rotateOnAxis(Qp,e)}rotateZ(e){return this.rotateOnAxis(em,e)}translateOnAxis(e,n){return Zp.copy(e).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jp,e)}translateY(e){return this.translateOnAxis(Qp,e)}translateZ(e){return this.translateOnAxis(em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?dl.copy(e):dl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Fa,dl,this.up):zi.lookAt(dl,Fa,this.up),this.quaternion.setFromRotationMatrix(zi),o&&(zi.extractRotation(o.matrixWorld),Ns.setFromRotationMatrix(zi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Kt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tm),Us.child=e,this.dispatchEvent(Us),Us.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(S_),Ou.child=e,this.dispatchEvent(Ou),Ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tm),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,v_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];l(e.shapes,v)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(l(e.materials,this.material[m]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(l(e.animations,m))}}if(n){const f=u(e.geometries),m=u(e.materials),p=u(e.textures),x=u(e.images),v=u(e.shapes),_=u(e.skeletons),S=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const m=[];for(const p in f){const x=f[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}mn.DEFAULT_UP=new Q(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new Q,ki=new Q,zu=new Q,Bi=new Q,Is=new Q,Fs=new Q,nm=new Q,ku=new Q,Bu=new Q,Vu=new Q,Hu=new Xt,Gu=new Xt,Wu=new Xt;class di{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),ui.subVectors(e,n),o.cross(ui);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){ui.subVectors(o,n),ki.subVectors(r,n),zu.subVectors(e,n);const u=ui.dot(ui),f=ui.dot(ki),m=ui.dot(zu),p=ki.dot(ki),x=ki.dot(zu),v=u*p-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,S=(p*m-f*x)*_,M=(u*x-f*m)*_;return l.set(1-S-M,M,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,n,r,o,l,u,f,m){return this.getBarycoord(e,n,r,o,Bi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,Bi.x),m.addScaledVector(u,Bi.y),m.addScaledVector(f,Bi.z),m)}static getInterpolatedAttribute(e,n,r,o,l,u){return Hu.setScalar(0),Gu.setScalar(0),Wu.setScalar(0),Hu.fromBufferAttribute(e,n),Gu.fromBufferAttribute(e,r),Wu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Hu,l.x),u.addScaledVector(Gu,l.y),u.addScaledVector(Wu,l.z),u}static isFrontFacing(e,n,r,o){return ui.subVectors(r,n),ki.subVectors(e,n),ui.cross(ki).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ui.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return di.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return di.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,f;Is.subVectors(o,r),Fs.subVectors(l,r),ku.subVectors(e,r);const m=Is.dot(ku),p=Fs.dot(ku);if(m<=0&&p<=0)return n.copy(r);Bu.subVectors(e,o);const x=Is.dot(Bu),v=Fs.dot(Bu);if(x>=0&&v<=x)return n.copy(o);const _=m*v-x*p;if(_<=0&&m>=0&&x<=0)return u=m/(m-x),n.copy(r).addScaledVector(Is,u);Vu.subVectors(e,l);const S=Is.dot(Vu),M=Fs.dot(Vu);if(M>=0&&S<=M)return n.copy(l);const b=S*p-m*M;if(b<=0&&p>=0&&M<=0)return f=p/(p-M),n.copy(r).addScaledVector(Fs,f);const y=x*M-S*v;if(y<=0&&v-x>=0&&S-M>=0)return nm.subVectors(l,o),f=(v-x)/(v-x+(S-M)),n.copy(o).addScaledVector(nm,f);const g=1/(y+b+_);return u=b*g,f=_*g,n.copy(r).addScaledVector(Is,u).addScaledVector(Fs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const r0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function ju(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class St{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=wt.workingColorSpace){return this.r=e,this.g=n,this.b=r,wt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=wt.workingColorSpace){if(e=o_(e,1),n=yt(n,0,1),r=yt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=ju(u,l,e+1/3),this.g=ju(u,l,e),this.b=ju(u,l,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,n=Qn){function r(l){l!==void 0&&parseFloat(l)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:ct("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const r=r0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return wt.workingToColorSpace(Sn.copy(this),e),Math.round(yt(Sn.r*255,0,255))*65536+Math.round(yt(Sn.g*255,0,255))*256+Math.round(yt(Sn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.workingToColorSpace(Sn.copy(this),n);const r=Sn.r,o=Sn.g,l=Sn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let m,p;const x=(f+u)/2;if(f===u)m=0,p=0;else{const v=u-f;switch(p=x<=.5?v/(u+f):v/(2-u-f),u){case r:m=(o-l)/v+(o<l?6:0);break;case o:m=(l-r)/v+2;break;case l:m=(r-o)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,n=wt.workingColorSpace){return wt.workingToColorSpace(Sn.copy(this),n),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Qn){wt.workingToColorSpace(Sn.copy(this),e);const n=Sn.r,r=Sn.g,o=Sn.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+n,Sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Sr),e.getHSL(fl);const r=Au(Sr.h,fl.h,n),o=Au(Sr.s,fl.s,n),l=Au(Sr.l,fl.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new St;St.NAMES=r0;let M_=0;class Zs extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=Gs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ct(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ct(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rd&&(r.blendSrc=this.blendSrc),this.blendDst!==sd&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const m=l[f];delete m.metadata,u.push(m)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sf extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Wm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new Q,hl=new ft;let E_=0;class bi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:E_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Hp,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Na(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Na(n,this.array)),n}setX(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Na(n,this.array)),n}setY(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Na(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Na(n,this.array)),n}setW(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),o=Un(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),o=Un(o,this.array),l=Un(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hp&&(e.usage=this.usage),e}}class s0 extends bi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class a0 extends bi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class hi extends bi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let b_=0;const Jn=new Yt,Xu=new mn,Os=new Q,Wn=new Ya,Oa=new Ya,un=new Q;class Ai extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t0(e)?a0:s0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new pt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,r){return Jn.makeTranslation(e,n,r),this.applyMatrix4(Jn),this}scale(e,n,r){return Jn.makeScale(e,n,r),this.applyMatrix4(Jn),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new hi(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];Wn.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Oa.setFromBufferAttribute(f),this.morphTargetsRelative?(un.addVectors(Wn.min,Oa.min),Wn.expandByPoint(un),un.addVectors(Wn.max,Oa.max),Wn.expandByPoint(un)):(Wn.expandByPoint(Oa.min),Wn.expandByPoint(Oa.max))}Wn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)un.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(un));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],m=this.morphTargetsRelative;for(let p=0,x=f.count;p<x;p++)un.fromBufferAttribute(f,p),m&&(Os.fromBufferAttribute(e,p),un.add(Os)),o=Math.max(o,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],m=[];for(let J=0;J<r.count;J++)f[J]=new Q,m[J]=new Q;const p=new Q,x=new Q,v=new Q,_=new ft,S=new ft,M=new ft,b=new Q,y=new Q;function g(J,C,A){p.fromBufferAttribute(r,J),x.fromBufferAttribute(r,C),v.fromBufferAttribute(r,A),_.fromBufferAttribute(l,J),S.fromBufferAttribute(l,C),M.fromBufferAttribute(l,A),x.sub(p),v.sub(p),S.sub(_),M.sub(_);const H=1/(S.x*M.y-M.x*S.y);isFinite(H)&&(b.copy(x).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(H),y.copy(v).multiplyScalar(S.x).addScaledVector(x,-M.x).multiplyScalar(H),f[J].add(b),f[C].add(b),f[A].add(b),m[J].add(y),m[C].add(y),m[A].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let J=0,C=N.length;J<C;++J){const A=N[J],H=A.start,Z=A.count;for(let ie=H,fe=H+Z;ie<fe;ie+=3)g(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const P=new Q,U=new Q,G=new Q,L=new Q;function B(J){G.fromBufferAttribute(o,J),L.copy(G);const C=f[J];P.copy(C),P.sub(G.multiplyScalar(G.dot(C))).normalize(),U.crossVectors(L,C);const H=U.dot(m[J])<0?-1:1;u.setXYZW(J,P.x,P.y,P.z,H)}for(let J=0,C=N.length;J<C;++J){const A=N[J],H=A.start,Z=A.count;for(let ie=H,fe=H+Z;ie<fe;ie+=3)B(e.getX(ie+0)),B(e.getX(ie+1)),B(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const o=new Q,l=new Q,u=new Q,f=new Q,m=new Q,p=new Q,x=new Q,v=new Q;if(e)for(let _=0,S=e.count;_<S;_+=3){const M=e.getX(_+0),b=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(n,M),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,y),f.add(x),m.add(x),p.add(x),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,S=n.count;_<S;_+=3)o.fromBufferAttribute(n,_+0),l.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)un.fromBufferAttribute(e,n),un.normalize(),e.setXYZ(n,un.x,un.y,un.z)}toNonIndexed(){function e(f,m){const p=f.array,x=f.itemSize,v=f.normalized,_=new p.constructor(m.length*x);let S=0,M=0;for(let b=0,y=m.length;b<y;b++){f.isInterleavedBufferAttribute?S=m[b]*f.data.stride+f.offset:S=m[b]*x;for(let g=0;g<x;g++)_[M++]=p[S++]}return new bi(_,x,v)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ai,r=this.index.array,o=this.attributes;for(const f in o){const m=o[f],p=e(m,r);n.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const m=[],p=l[f];for(let x=0,v=p.length;x<v;x++){const _=p[x],S=e(_,r);m.push(S)}n.morphAttributes[f]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,m=u.length;f<m;f++){const p=u[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,_=p.length;v<_;v++){const S=p[v];x.push(S.toJSON(e.data))}x.length>0&&(o[m]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(n))}const l=e.morphAttributes;for(const p in l){const x=[],v=l[p];for(let _=0,S=v.length;_<S;_++)x.push(v[_].clone(n));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,x=u.length;p<x;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new Yt,Gr=new rf,pl=new Bl,rm=new Q,ml=new Q,xl=new Q,gl=new Q,Yu=new Q,_l=new Q,sm=new Q,vl=new Q;class pi extends mn{constructor(e=new Ai,n=new sf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){_l.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const x=f[m],v=l[m];x!==0&&(Yu.fromBufferAttribute(v,e),u?_l.addScaledVector(Yu,x):_l.addScaledVector(Yu.sub(n),x))}n.add(_l)}return n}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(l),Gr.copy(e.ray).recast(e.near),!(pl.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(pl,rm)===null||Gr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(l).invert(),Gr.copy(e.ray).applyMatrix4(im),!(r.boundingBox!==null&&Gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Gr)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,f=l.index,m=l.attributes.position,p=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,_=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,b=_.length;M<b;M++){const y=_[M],g=u[y.materialIndex],N=Math.max(y.start,S.start),P=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let U=N,G=P;U<G;U+=3){const L=f.getX(U),B=f.getX(U+1),J=f.getX(U+2);o=yl(this,g,e,r,p,x,v,L,B,J),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),b=Math.min(f.count,S.start+S.count);for(let y=M,g=b;y<g;y+=3){const N=f.getX(y),P=f.getX(y+1),U=f.getX(y+2);o=yl(this,u,e,r,p,x,v,N,P,U),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let M=0,b=_.length;M<b;M++){const y=_[M],g=u[y.materialIndex],N=Math.max(y.start,S.start),P=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let U=N,G=P;U<G;U+=3){const L=U,B=U+1,J=U+2;o=yl(this,g,e,r,p,x,v,L,B,J),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let y=M,g=b;y<g;y+=3){const N=y,P=y+1,U=y+2;o=yl(this,u,e,r,p,x,v,N,P,U),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function T_(s,e,n,r,o,l,u,f){let m;if(e.side===Fn?m=r.intersectTriangle(u,l,o,!0,f):m=r.intersectTriangle(o,l,u,e.side===Ar,f),m===null)return null;vl.copy(f),vl.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(vl);return p<n.near||p>n.far?null:{distance:p,point:vl.clone(),object:s}}function yl(s,e,n,r,o,l,u,f,m,p){s.getVertexPosition(f,ml),s.getVertexPosition(m,xl),s.getVertexPosition(p,gl);const x=T_(s,e,n,r,ml,xl,gl,sm);if(x){const v=new Q;di.getBarycoord(sm,ml,xl,gl,v),o&&(x.uv=di.getInterpolatedAttribute(o,f,m,p,v,new ft)),l&&(x.uv1=di.getInterpolatedAttribute(l,f,m,p,v,new ft)),u&&(x.normal=di.getInterpolatedAttribute(u,f,m,p,v,new Q),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:f,b:m,c:p,normal:new Q,materialIndex:0};di.getNormal(ml,xl,gl,_.normal),x.face=_,x.barycoord=v}return x}class Qr extends Ai{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],x=[],v=[];let _=0,S=0;M("z","y","x",-1,-1,r,n,e,u,l,0),M("z","y","x",1,-1,r,n,-e,u,l,1),M("x","z","y",1,1,e,r,n,o,u,2),M("x","z","y",1,-1,e,r,-n,o,u,3),M("x","y","z",1,-1,e,n,r,o,l,4),M("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(m),this.setAttribute("position",new hi(p,3)),this.setAttribute("normal",new hi(x,3)),this.setAttribute("uv",new hi(v,2));function M(b,y,g,N,P,U,G,L,B,J,C){const A=U/B,H=G/J,Z=U/2,ie=G/2,fe=L/2,ce=B+1,ue=J+1;let de=0,V=0;const ae=new Q;for(let ee=0;ee<ue;ee++){const I=ee*H-ie;for(let se=0;se<ce;se++){const Ne=se*A-Z;ae[b]=Ne*N,ae[y]=I*P,ae[g]=fe,p.push(ae.x,ae.y,ae.z),ae[b]=0,ae[y]=0,ae[g]=L>0?1:-1,x.push(ae.x,ae.y,ae.z),v.push(se/B),v.push(1-ee/J),de+=1}}for(let ee=0;ee<J;ee++)for(let I=0;I<B;I++){const se=_+I+ce*ee,Ne=_+I+ce*(ee+1),ze=_+(I+1)+ce*(ee+1),je=_+(I+1)+ce*ee;m.push(se,Ne,je),m.push(Ne,ze,je),V+=6}f.addGroup(S,V,C),S+=V,_+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Tn(s){const e={};for(let n=0;n<s.length;n++){const r=Ks(s[n]);for(const o in r)e[o]=r[o]}return e}function w_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function o0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const A_={clone:Ks,merge:Tn};var C_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C_,this.fragmentShader=R_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=w_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class l0 extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new Q,am=new ft,om=new ft;class ei extends l0{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jd*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,n){return this.getViewBounds(e,am,om),n.subVectors(om,am)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ll*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/m,n-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zs=-90,ks=1;class P_ extends mn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ei(zs,ks,e,n);o.layers=this.layers,this.add(o);const l=new ei(zs,ks,e,n);l.layers=this.layers,this.add(l);const u=new ei(zs,ks,e,n);u.layers=this.layers,this.add(u);const f=new ei(zs,ks,e,n);f.layers=this.layers,this.add(f);const m=new ei(zs,ks,e,n);m.layers=this.layers,this.add(m);const p=new ei(zs,ks,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,f,m]=n;for(const p of n)this.remove(p);if(e===Ei)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Il)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,m,p,x]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,l),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,m),e.setRenderTarget(r,4,o),e.render(n,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),e.render(n,x),e.setRenderTarget(v,_,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class c0 extends wn{constructor(e=[],n=Xs,r,o,l,u,f,m,p,x){super(e,n,r,o,l,u,f,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class D_ extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new c0(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Qr(5,5,5),l=new Yi({name:"CubemapFromEquirect",uniforms:Ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:ji});l.uniforms.tEquirect.value=n;const u=new pi(o,l),f=n.minFilter;return n.minFilter===Kr&&(n.minFilter=ti),new P_(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}class Sl extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L_={type:"move"};class qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const f=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const b of e.hand.values()){const y=n.getJointPose(b,r),g=this._getHandJoint(p,b);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=x.position.distanceTo(v.position),S=.02,M=.005;p.inputState.pinching&&_>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Sl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class N_ extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class U_ extends wn{constructor(e=null,n=1,r=1,o,l,u,f,m,p=jn,x=jn,v,_){super(null,u,f,m,p,x,o,l,v,_),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ku=new Q,I_=new Q,F_=new pt;class Er{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Ku.subVectors(r,n).cross(I_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Ku),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||F_.getNormalMatrix(e),o=this.coplanarPoint(Ku).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new Bl,O_=new ft(.5,.5),Ml=new Q;class af{constructor(e=new Er,n=new Er,r=new Er,o=new Er,l=new Er,u=new Er){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ei,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],m=l[2],p=l[3],x=l[4],v=l[5],_=l[6],S=l[7],M=l[8],b=l[9],y=l[10],g=l[11],N=l[12],P=l[13],U=l[14],G=l[15];if(o[0].setComponents(p-u,S-x,g-M,G-N).normalize(),o[1].setComponents(p+u,S+x,g+M,G+N).normalize(),o[2].setComponents(p+f,S+v,g+b,G+P).normalize(),o[3].setComponents(p-f,S-v,g-b,G-P).normalize(),r)o[4].setComponents(m,_,y,U).normalize(),o[5].setComponents(p-m,S-_,g-y,G-U).normalize();else if(o[4].setComponents(p-m,S-_,g-y,G-U).normalize(),n===Ei)o[5].setComponents(p+m,S+_,g+y,G+U).normalize();else if(n===Il)o[5].setComponents(m,_,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);const n=O_.distanceTo(e.center);return Wr.radius=.7071067811865476+n,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Ml.x=o.normal.x>0?e.max.x:e.min.x,Ml.y=o.normal.y>0?e.max.y:e.min.y,Ml.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class u0 extends Zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ol=new Q,zl=new Q,lm=new Yt,za=new rf,El=new Bl,$u=new Q,cm=new Q;class z_ extends mn{constructor(e=new Ai,n=new u0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,l=n.count;o<l;o++)Ol.fromBufferAttribute(n,o-1),zl.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Ol.distanceTo(zl);e.setAttribute("lineDistance",new hi(r,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),El.copy(r.boundingSphere),El.applyMatrix4(o),El.radius+=l,e.ray.intersectsSphere(El)===!1)return;lm.copy(o).invert(),za.copy(e.ray).applyMatrix4(lm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=this.isLineSegments?2:1,x=r.index,_=r.attributes.position;if(x!==null){const S=Math.max(0,u.start),M=Math.min(x.count,u.start+u.count);for(let b=S,y=M-1;b<y;b+=p){const g=x.getX(b),N=x.getX(b+1),P=bl(this,e,za,m,g,N,b);P&&n.push(P)}if(this.isLineLoop){const b=x.getX(M-1),y=x.getX(S),g=bl(this,e,za,m,b,y,M-1);g&&n.push(g)}}else{const S=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let b=S,y=M-1;b<y;b+=p){const g=bl(this,e,za,m,b,b+1,b);g&&n.push(g)}if(this.isLineLoop){const b=bl(this,e,za,m,M-1,S,M-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function bl(s,e,n,r,o,l,u){const f=s.geometry.attributes.position;if(Ol.fromBufferAttribute(f,o),zl.fromBufferAttribute(f,l),n.distanceSqToSegment(Ol,zl,$u,cm)>r)return;$u.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo($u);if(!(p<e.near||p>e.far))return{distance:p,point:cm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const um=new Q,dm=new Q;class k_ extends z_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,l=n.count;o<l;o+=2)um.fromBufferAttribute(n,o),dm.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+um.distanceTo(dm);e.setAttribute("lineDistance",new hi(r,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class d0 extends wn{constructor(e,n,r=$r,o,l,u,f=jn,m=jn,p,x=Ga,v=1){if(x!==Ga&&x!==Wa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:v};super(_,o,l,u,f,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class f0 extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qa extends Ai{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,f=Math.floor(r),m=Math.floor(o),p=f+1,x=m+1,v=e/f,_=n/m,S=[],M=[],b=[],y=[];for(let g=0;g<x;g++){const N=g*_-u;for(let P=0;P<p;P++){const U=P*v-l;M.push(U,-N,0),b.push(0,0,1),y.push(P/f),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let N=0;N<f;N++){const P=N+p*g,U=N+p*(g+1),G=N+1+p*(g+1),L=N+1+p*g;S.push(P,U,L),S.push(U,G,L)}this.setIndex(S),this.setAttribute("position",new hi(M,3)),this.setAttribute("normal",new hi(b,3)),this.setAttribute("uv",new hi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.widthSegments,e.heightSegments)}}class fm extends Zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qm,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class B_ extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V_ extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class h0 extends mn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Zu=new Yt,hm=new Q,pm=new Q;class H_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=Ti,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new af,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;hm.setFromMatrixPosition(e.matrixWorld),n.position.copy(hm),pm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(pm),n.updateMatrixWorld(),Zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu,n.coordinateSystem,n.reversedDepth),n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class p0 extends l0{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=x*this.view.offsetY,m=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class G_ extends H_{constructor(){super(new p0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class W_ extends h0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new G_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class j_ extends h0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class X_ extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class mm{constructor(e=1,n=0,r=0){this.radius=e,this.phi=n,this.theta=r}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(yt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Y_ extends k_{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],o=new Ai;o.setAttribute("position",new hi(n,3)),o.setAttribute("color",new hi(r,3));const l=new u0({vertexColors:!0,toneMapped:!1});super(o,l),this.type="AxesHelper"}setColors(e,n,r){const o=new St,l=this.geometry.attributes.color.array;return o.set(e),o.toArray(l,0),o.toArray(l,3),o.set(n),o.toArray(l,6),o.toArray(l,9),o.set(r),o.toArray(l,12),o.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class q_ extends es{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ct("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function xm(s,e,n,r){const o=K_(r);switch(n){case $m:return s*e;case Jm:return s*e/o.components*o.byteLength;case Jd:return s*e/o.components*o.byteLength;case Qd:return s*e*2/o.components*o.byteLength;case ef:return s*e*2/o.components*o.byteLength;case Zm:return s*e*3/o.components*o.byteLength;case fi:return s*e*4/o.components*o.byteLength;case tf:return s*e*4/o.components*o.byteLength;case Cl:case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _d:case yd:return Math.max(s,16)*Math.max(e,8)/4;case gd:case vd:return Math.max(s,8)*Math.max(e,8)/2;case Sd:case Md:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Od:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zd:case kd:case Bd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Vd:case Hd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Gd:case Wd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function K_(s){switch(s){case Ti:case Xm:return{byteLength:1,components:1};case Va:case Ym:case $s:return{byteLength:2,components:1};case $d:case Zd:return{byteLength:2,components:4};case $r:case Kd:case Wi:return{byteLength:4,components:1};case qm:case Km:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);function m0(){let s=null,e=!1,n=null,r=null;function o(l,u){n(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function $_(s){const e=new WeakMap;function n(f,m){const p=f.array,x=f.usage,v=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,x),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,m,p){const x=m.array,v=m.updateRanges;if(s.bindBuffer(p,f),v.length===0)s.bufferSubData(p,0,x);else{v.sort((S,M)=>S.start-M.start);let _=0;for(let S=1;S<v.length;S++){const M=v[_],b=v[S];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++_,v[_]=b)}v.length=_+1;for(let S=0,M=v.length;S<M;S++){const b=v[S];s.bufferSubData(p,b.start*x.BYTES_PER_ELEMENT,x,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(s.deleteBuffer(m.buffer),e.delete(f))}function u(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,n(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,m),p.version=f.version}}return{get:o,remove:l,update:u}}var Z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ev=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,av=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ov=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Av="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$v=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ay=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,my=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,My=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,by=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ty=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Py=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ly=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Iy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ky=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,By=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ky=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $y=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_S=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ES=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:Z_,alphahash_pars_fragment:J_,alphamap_fragment:Q_,alphamap_pars_fragment:ev,alphatest_fragment:tv,alphatest_pars_fragment:nv,aomap_fragment:iv,aomap_pars_fragment:rv,batching_pars_vertex:sv,batching_vertex:av,begin_vertex:ov,beginnormal_vertex:lv,bsdfs:cv,iridescence_fragment:uv,bumpmap_pars_fragment:dv,clipping_planes_fragment:fv,clipping_planes_pars_fragment:hv,clipping_planes_pars_vertex:pv,clipping_planes_vertex:mv,color_fragment:xv,color_pars_fragment:gv,color_pars_vertex:_v,color_vertex:vv,common:yv,cube_uv_reflection_fragment:Sv,defaultnormal_vertex:Mv,displacementmap_pars_vertex:Ev,displacementmap_vertex:bv,emissivemap_fragment:Tv,emissivemap_pars_fragment:wv,colorspace_fragment:Av,colorspace_pars_fragment:Cv,envmap_fragment:Rv,envmap_common_pars_fragment:Pv,envmap_pars_fragment:Dv,envmap_pars_vertex:Lv,envmap_physical_pars_fragment:Gv,envmap_vertex:Nv,fog_vertex:Uv,fog_pars_vertex:Iv,fog_fragment:Fv,fog_pars_fragment:Ov,gradientmap_pars_fragment:zv,lightmap_pars_fragment:kv,lights_lambert_fragment:Bv,lights_lambert_pars_fragment:Vv,lights_pars_begin:Hv,lights_toon_fragment:Wv,lights_toon_pars_fragment:jv,lights_phong_fragment:Xv,lights_phong_pars_fragment:Yv,lights_physical_fragment:qv,lights_physical_pars_fragment:Kv,lights_fragment_begin:$v,lights_fragment_maps:Zv,lights_fragment_end:Jv,logdepthbuf_fragment:Qv,logdepthbuf_pars_fragment:ey,logdepthbuf_pars_vertex:ty,logdepthbuf_vertex:ny,map_fragment:iy,map_pars_fragment:ry,map_particle_fragment:sy,map_particle_pars_fragment:ay,metalnessmap_fragment:oy,metalnessmap_pars_fragment:ly,morphinstance_vertex:cy,morphcolor_vertex:uy,morphnormal_vertex:dy,morphtarget_pars_vertex:fy,morphtarget_vertex:hy,normal_fragment_begin:py,normal_fragment_maps:my,normal_pars_fragment:xy,normal_pars_vertex:gy,normal_vertex:_y,normalmap_pars_fragment:vy,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:Sy,clearcoat_pars_fragment:My,iridescence_pars_fragment:Ey,opaque_fragment:by,packing:Ty,premultiplied_alpha_fragment:wy,project_vertex:Ay,dithering_fragment:Cy,dithering_pars_fragment:Ry,roughnessmap_fragment:Py,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Ly,shadowmap_pars_vertex:Ny,shadowmap_vertex:Uy,shadowmask_pars_fragment:Iy,skinbase_vertex:Fy,skinning_pars_vertex:Oy,skinning_vertex:zy,skinnormal_vertex:ky,specularmap_fragment:By,specularmap_pars_fragment:Vy,tonemapping_fragment:Hy,tonemapping_pars_fragment:Gy,transmission_fragment:Wy,transmission_pars_fragment:jy,uv_pars_fragment:Xy,uv_pars_vertex:Yy,uv_vertex:qy,worldpos_vertex:Ky,background_vert:$y,background_frag:Zy,backgroundCube_vert:Jy,backgroundCube_frag:Qy,cube_vert:eS,cube_frag:tS,depth_vert:nS,depth_frag:iS,distanceRGBA_vert:rS,distanceRGBA_frag:sS,equirect_vert:aS,equirect_frag:oS,linedashed_vert:lS,linedashed_frag:cS,meshbasic_vert:uS,meshbasic_frag:dS,meshlambert_vert:fS,meshlambert_frag:hS,meshmatcap_vert:pS,meshmatcap_frag:mS,meshnormal_vert:xS,meshnormal_frag:gS,meshphong_vert:_S,meshphong_frag:vS,meshphysical_vert:yS,meshphysical_frag:SS,meshtoon_vert:MS,meshtoon_frag:ES,points_vert:bS,points_frag:TS,shadow_vert:wS,shadow_frag:AS,sprite_vert:CS,sprite_frag:RS},Pe={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Si={basic:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new St(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Tn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Tn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new St(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Tn([Pe.points,Pe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Tn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Tn([Pe.common,Pe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Tn([Pe.sprite,Pe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Tn([Pe.common,Pe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Tn([Pe.lights,Pe.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Si.physical={uniforms:Tn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Tl={r:0,b:0,g:0},jr=new wi,PS=new Yt;function DS(s,e,n,r,o,l,u){const f=new St(0);let m=l===!0?0:1,p,x,v=null,_=0,S=null;function M(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?n:e).get(U)),U}function b(P){let U=!1;const G=M(P);G===null?g(f,m):G&&G.isColor&&(g(G,1),U=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(P,U){const G=M(U);G&&(G.isCubeTexture||G.mapping===kl)?(x===void 0&&(x=new pi(new Qr(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Ks(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(L,B,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),jr.copy(U.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),x.material.uniforms.envMap.value=G,x.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(PS.makeRotationFromEuler(jr)),x.material.toneMapped=wt.getTransfer(G.colorSpace)!==Nt,(v!==G||_!==G.version||S!==s.toneMapping)&&(x.material.needsUpdate=!0,v=G,_=G.version,S=s.toneMapping),x.layers.enableAll(),P.unshift(x,x.geometry,x.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new pi(new qa(2,2),new Yi({name:"BackgroundMaterial",uniforms:Ks(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=wt.getTransfer(G.colorSpace)!==Nt,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||_!==G.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=G,_=G.version,S=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function g(P,U){P.getRGB(Tl,o0(s)),r.buffers.color.setClear(Tl.r,Tl.g,Tl.b,U,u)}function N(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,U=1){f.set(P),m=U,g(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,g(f,m)},render:b,addToRenderList:y,dispose:N}}function LS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,u=!1;function f(A,H,Z,ie,fe){let ce=!1;const ue=v(ie,Z,H);l!==ue&&(l=ue,p(l.object)),ce=S(A,ie,Z,fe),ce&&M(A,ie,Z,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,U(A,H,Z,ie),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function m(){return s.createVertexArray()}function p(A){return s.bindVertexArray(A)}function x(A){return s.deleteVertexArray(A)}function v(A,H,Z){const ie=Z.wireframe===!0;let fe=r[A.id];fe===void 0&&(fe={},r[A.id]=fe);let ce=fe[H.id];ce===void 0&&(ce={},fe[H.id]=ce);let ue=ce[ie];return ue===void 0&&(ue=_(m()),ce[ie]=ue),ue}function _(A){const H=[],Z=[],ie=[];for(let fe=0;fe<n;fe++)H[fe]=0,Z[fe]=0,ie[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:ie,object:A,attributes:{},index:null}}function S(A,H,Z,ie){const fe=l.attributes,ce=H.attributes;let ue=0;const de=Z.getAttributes();for(const V in de)if(de[V].location>=0){const ee=fe[V];let I=ce[V];if(I===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(I=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(I=A.instanceColor)),ee===void 0||ee.attribute!==I||I&&ee.data!==I.data)return!0;ue++}return l.attributesNum!==ue||l.index!==ie}function M(A,H,Z,ie){const fe={},ce=H.attributes;let ue=0;const de=Z.getAttributes();for(const V in de)if(de[V].location>=0){let ee=ce[V];ee===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(ee=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(ee=A.instanceColor));const I={};I.attribute=ee,ee&&ee.data&&(I.data=ee.data),fe[V]=I,ue++}l.attributes=fe,l.attributesNum=ue,l.index=ie}function b(){const A=l.newAttributes;for(let H=0,Z=A.length;H<Z;H++)A[H]=0}function y(A){g(A,0)}function g(A,H){const Z=l.newAttributes,ie=l.enabledAttributes,fe=l.attributeDivisors;Z[A]=1,ie[A]===0&&(s.enableVertexAttribArray(A),ie[A]=1),fe[A]!==H&&(s.vertexAttribDivisor(A,H),fe[A]=H)}function N(){const A=l.newAttributes,H=l.enabledAttributes;for(let Z=0,ie=H.length;Z<ie;Z++)H[Z]!==A[Z]&&(s.disableVertexAttribArray(Z),H[Z]=0)}function P(A,H,Z,ie,fe,ce,ue){ue===!0?s.vertexAttribIPointer(A,H,Z,fe,ce):s.vertexAttribPointer(A,H,Z,ie,fe,ce)}function U(A,H,Z,ie){b();const fe=ie.attributes,ce=Z.getAttributes(),ue=H.defaultAttributeValues;for(const de in ce){const V=ce[de];if(V.location>=0){let ae=fe[de];if(ae===void 0&&(de==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),de==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor)),ae!==void 0){const ee=ae.normalized,I=ae.itemSize,se=e.get(ae);if(se===void 0)continue;const Ne=se.buffer,ze=se.type,je=se.bytesPerElement,ne=ze===s.INT||ze===s.UNSIGNED_INT||ae.gpuType===Kd;if(ae.isInterleavedBufferAttribute){const le=ae.data,Se=le.stride,Ie=ae.offset;if(le.isInstancedInterleavedBuffer){for(let Fe=0;Fe<V.locationSize;Fe++)g(V.location+Fe,le.meshPerAttribute);A.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Fe=0;Fe<V.locationSize;Fe++)y(V.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Fe=0;Fe<V.locationSize;Fe++)P(V.location+Fe,I/V.locationSize,ze,ee,Se*je,(Ie+I/V.locationSize*Fe)*je,ne)}else{if(ae.isInstancedBufferAttribute){for(let le=0;le<V.locationSize;le++)g(V.location+le,ae.meshPerAttribute);A.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let le=0;le<V.locationSize;le++)y(V.location+le);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let le=0;le<V.locationSize;le++)P(V.location+le,I/V.locationSize,ze,ee,I*je,I/V.locationSize*le*je,ne)}}else if(ue!==void 0){const ee=ue[de];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(V.location,ee);break;case 3:s.vertexAttrib3fv(V.location,ee);break;case 4:s.vertexAttrib4fv(V.location,ee);break;default:s.vertexAttrib1fv(V.location,ee)}}}}N()}function G(){J();for(const A in r){const H=r[A];for(const Z in H){const ie=H[Z];for(const fe in ie)x(ie[fe].object),delete ie[fe];delete H[Z]}delete r[A]}}function L(A){if(r[A.id]===void 0)return;const H=r[A.id];for(const Z in H){const ie=H[Z];for(const fe in ie)x(ie[fe].object),delete ie[fe];delete H[Z]}delete r[A.id]}function B(A){for(const H in r){const Z=r[H];if(Z[A.id]===void 0)continue;const ie=Z[A.id];for(const fe in ie)x(ie[fe].object),delete ie[fe];delete Z[A.id]}}function J(){C(),u=!0,l!==o&&(l=o,p(l.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:J,resetDefaultState:C,dispose:G,releaseStatesOfGeometry:L,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:y,disableUnusedAttributes:N}}function NS(s,e,n){let r;function o(p){r=p}function l(p,x){s.drawArrays(r,p,x),n.update(x,r,1)}function u(p,x,v){v!==0&&(s.drawArraysInstanced(r,p,x,v),n.update(x,r,v))}function f(p,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,v);let S=0;for(let M=0;M<v;M++)S+=x[M];n.update(S,r,1)}function m(p,x,v,_){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)u(p[M],x[M],_[M]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,x,0,_,0,v);let M=0;for(let b=0;b<v;b++)M+=x[b]*_[b];n.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function US(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==fi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const J=B===$s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Ti&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Wi&&!J)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const x=m(p);x!==p&&(ct("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=M>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:N,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:G,maxSamples:L}}function IS(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new Er,f=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||r!==0||o;return o=_,r=v.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){n=x(v,_,0)},this.setState=function(v,_,S){const M=v.clippingPlanes,b=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!o||M===null||M.length===0||l&&!y)l?x(null):p();else{const N=l?0:r,P=N*4;let U=g.clippingState||null;m.value=U,U=x(M,_,P,S);for(let G=0;G!==P;++G)U[G]=n[G];g.clippingState=U,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,_,S,M){const b=v!==null?v.length:0;let y=null;if(b!==0){if(y=m.value,M!==!0||y===null){const g=S+b*4,N=_.matrixWorldInverse;f.getNormalMatrix(N),(y===null||y.length<g)&&(y=new Float32Array(g));for(let P=0,U=S;P!==b;++P,U+=4)u.copy(v[P]).applyMatrix4(N,f),u.normal.toArray(y,U),y[U+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function FS(s){let e=new WeakMap;function n(u,f){return f===hd?u.mapping=Xs:f===pd&&(u.mapping=Ys),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===hd||f===pd)if(e.has(u)){const m=e.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new D_(m.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Tr=4,gm=[.125,.215,.35,.446,.526,.582],qr=20,OS=256,ka=new p0,_m=new St;let Ju=null,Qu=0,ed=0,td=!1;const zS=new Q;class vm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:u=256,position:f=zS}=l;Ju=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,f),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,Qu,ed),this._renderer.xr.enabled=td,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:$s,format:fi,colorSpace:qs,depthBuffer:!1},o=ym(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kS(l)),this._blurMaterial=VS(l,e,n),this._ggxMaterial=BS(l,e,n)}return o}_compileMaterial(e){const n=new pi(new Ai,e);this._renderer.compile(n,ka)}_sceneToCubeUV(e,n,r,o,l){const m=new ei(90,1,n,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(_m),v.toneMapping=wr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pi(new Qr,new sf({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let g=!1;const N=e.background;N?N.isColor&&(y.color.copy(N),e.background=null,g=!0):(y.color.copy(_m),g=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(m.up.set(0,p[P],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+x[P],l.y,l.z)):U===1?(m.up.set(0,0,p[P]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+x[P],l.z)):(m.up.set(0,p[P],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+x[P]));const G=this._cubeSize;Bs(o,U*G,P>2?G:0,G,G),v.setRenderTarget(o),g&&v.render(b,m),v.render(e,m)}v.toneMapping=S,v.autoClear=_,e.background=N}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Xs||e.mapping===Ys;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const m=this._cubeSize;Bs(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(u,ka)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-x*x),_=.05+p*.95,S=v*_,{_lodMax:M}=this,b=this._sizeLods[r],y=3*b*(r>M-Tr?r-M+Tr:0),g=4*(this._cubeSize-b);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=M-n,Bs(l,y,g,3*b,2*b),o.setRenderTarget(l),o.render(f,ka),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=M-r,Bs(e,y,g,3*b,2*b),o.setRenderTarget(e),o.render(f,ka)}_blur(e,n,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,n,r,o,l,u,f){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Kt("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[o];v.material=p;const _=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*qr-1),b=l/M,y=isFinite(l)?1+Math.floor(x*b):qr;y>qr&&ct(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${qr}`);const g=[];let N=0;for(let B=0;B<qr;++B){const J=B/b,C=Math.exp(-J*J/2);g.push(C),B===0?N+=C:B<y&&(N+=2*C)}for(let B=0;B<g.length;B++)g[B]=g[B]/N;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=g,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:P}=this;_.dTheta.value=M,_.mipInt.value=P-r;const U=this._sizeLods[o],G=3*U*(o>P-Tr?o-P+Tr:0),L=4*(this._cubeSize-U);Bs(n,G,L,3*U,2*U),m.setRenderTarget(n),m.render(v,ka)}}function kS(s){const e=[],n=[],r=[];let o=s;const l=s-Tr+1+gm.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let m=1/f;u>s-Tr?m=gm[u-s+Tr-1]:u===0&&(m=0),n.push(m);const p=1/(f-2),x=-p,v=1+p,_=[x,x,v,x,v,v,x,x,v,v,x,v],S=6,M=6,b=3,y=2,g=1,N=new Float32Array(b*M*S),P=new Float32Array(y*M*S),U=new Float32Array(g*M*S);for(let L=0;L<S;L++){const B=L%3*2/3-1,J=L>2?0:-1,C=[B,J,0,B+2/3,J,0,B+2/3,J+1,0,B,J,0,B+2/3,J+1,0,B,J+1,0];N.set(C,b*M*L),P.set(_,y*M*L);const A=[L,L,L,L,L,L];U.set(A,g*M*L)}const G=new Ai;G.setAttribute("position",new bi(N,b)),G.setAttribute("uv",new bi(P,y)),G.setAttribute("faceIndex",new bi(U,g)),r.push(new pi(G,null)),o>Tr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function ym(s,e,n){const r=new Jr(s,e,n);return r.texture.mapping=kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Bs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function BS(s,e,n){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function VS(s,e,n){const r=new Float32Array(qr),o=new Q(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Sm(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Mm(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function HS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const m=f.mapping,p=m===hd||m===pd,x=m===Xs||m===Ys;if(p||x){let v=e.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new vm(s)),v=p?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||x&&S&&o(S)?(n===null&&(n=new vm(s)),v=p?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f){let m=0;const p=6;for(let x=0;x<p;x++)f[x]!==void 0&&m++;return m===p}function l(f){const m=f.target;m.removeEventListener("dispose",l);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function GS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&ja("WebGLRenderer: "+r+" extension not supported."),o}}}function WS(s,e,n,r){const o={},l=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete o[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function m(v){const _=v.attributes;for(const S in _)e.update(_[S],s.ARRAY_BUFFER)}function p(v){const _=[],S=v.index,M=v.attributes.position;let b=0;if(S!==null){const N=S.array;b=S.version;for(let P=0,U=N.length;P<U;P+=3){const G=N[P+0],L=N[P+1],B=N[P+2];_.push(G,L,L,B,B,G)}}else if(M!==void 0){const N=M.array;b=M.version;for(let P=0,U=N.length/3-1;P<U;P+=3){const G=P+0,L=P+1,B=P+2;_.push(G,L,L,B,B,G)}}else return;const y=new(t0(_)?a0:s0)(_,1);y.version=b;const g=l.get(v);g&&e.remove(g),l.set(v,y)}function x(v){const _=l.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:m,getWireframeAttribute:x}}function jS(s,e,n){let r;function o(_){r=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function m(_,S){s.drawElements(r,S,l,_*u),n.update(S,r,1)}function p(_,S,M){M!==0&&(s.drawElementsInstanced(r,S,l,_*u,M),n.update(S,r,M))}function x(_,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,_,0,M);let y=0;for(let g=0;g<M;g++)y+=S[g];n.update(y,r,1)}function v(_,S,M,b){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<_.length;g++)p(_[g]/u,S[g],b[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,_,0,b,0,M);let g=0;for(let N=0;N<M;N++)g+=S[N]*b[N];n.update(g,r,1)}}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function XS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:Kt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function YS(s,e,n){const r=new WeakMap,o=new Xt;function l(u,f,m){const p=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let _=r.get(f);if(_===void 0||_.count!==v){let A=function(){J.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var S=A;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let U=0;M===!0&&(U=1),b===!0&&(U=2),y===!0&&(U=3);let G=f.attributes.position.count*U,L=1;G>e.maxTextureSize&&(L=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const B=new Float32Array(G*L*4*v),J=new n0(B,G,L,v);J.type=Wi,J.needsUpdate=!0;const C=U*4;for(let H=0;H<v;H++){const Z=g[H],ie=N[H],fe=P[H],ce=G*L*4*H;for(let ue=0;ue<Z.count;ue++){const de=ue*C;M===!0&&(o.fromBufferAttribute(Z,ue),B[ce+de+0]=o.x,B[ce+de+1]=o.y,B[ce+de+2]=o.z,B[ce+de+3]=0),b===!0&&(o.fromBufferAttribute(ie,ue),B[ce+de+4]=o.x,B[ce+de+5]=o.y,B[ce+de+6]=o.z,B[ce+de+7]=0),y===!0&&(o.fromBufferAttribute(fe,ue),B[ce+de+8]=o.x,B[ce+de+9]=o.y,B[ce+de+10]=o.z,B[ce+de+11]=fe.itemSize===4?o.w:1)}}_={count:v,texture:J,size:new ft(G,L)},r.set(f,_),f.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const b=f.morphTargetsRelative?1:1-M;m.getUniforms().setValue(s,"morphTargetBaseInfluence",b),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function qS(s,e,n,r){let o=new WeakMap;function l(m){const p=r.render.frame,x=m.geometry,v=e.get(m,x);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),o.get(m)!==p&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return v}function u(){o=new WeakMap}function f(m){const p=m.target;p.removeEventListener("dispose",f),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:u}}const x0=new wn,Em=new d0(1,1),g0=new n0,_0=new p_,v0=new c0,bm=[],Tm=[],wm=new Float32Array(16),Am=new Float32Array(9),Cm=new Float32Array(4);function Js(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=bm[o];if(l===void 0&&(l=new Float32Array(o),bm[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(l,f)}return l}function sn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function an(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Hl(s,e){let n=Tm[e];n===void 0&&(n=new Int32Array(e),Tm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function KS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function $S(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;s.uniform2fv(this.addr,e),an(n,e)}}function ZS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(sn(n,e))return;s.uniform3fv(this.addr,e),an(n,e)}}function JS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;s.uniform4fv(this.addr,e),an(n,e)}}function QS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(sn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(n,e)}else{if(sn(n,r))return;Cm.set(r),s.uniformMatrix2fv(this.addr,!1,Cm),an(n,r)}}function eM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(sn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(n,e)}else{if(sn(n,r))return;Am.set(r),s.uniformMatrix3fv(this.addr,!1,Am),an(n,r)}}function tM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(sn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(n,e)}else{if(sn(n,r))return;wm.set(r),s.uniformMatrix4fv(this.addr,!1,wm),an(n,r)}}function nM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function iM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;s.uniform2iv(this.addr,e),an(n,e)}}function rM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;s.uniform3iv(this.addr,e),an(n,e)}}function sM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;s.uniform4iv(this.addr,e),an(n,e)}}function aM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function oM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;s.uniform2uiv(this.addr,e),an(n,e)}}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;s.uniform3uiv(this.addr,e),an(n,e)}}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;s.uniform4uiv(this.addr,e),an(n,e)}}function uM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Em.compareFunction=e0,l=Em):l=x0,n.setTexture2D(e||l,o)}function dM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||_0,o)}function fM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||v0,o)}function hM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||g0,o)}function pM(s){switch(s){case 5126:return KS;case 35664:return $S;case 35665:return ZS;case 35666:return JS;case 35674:return QS;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return sM;case 5125:return aM;case 36294:return oM;case 36295:return lM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return hM}}function mM(s,e){s.uniform1fv(this.addr,e)}function xM(s,e){const n=Js(e,this.size,2);s.uniform2fv(this.addr,n)}function gM(s,e){const n=Js(e,this.size,3);s.uniform3fv(this.addr,n)}function _M(s,e){const n=Js(e,this.size,4);s.uniform4fv(this.addr,n)}function vM(s,e){const n=Js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function yM(s,e){const n=Js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function SM(s,e){const n=Js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function MM(s,e){s.uniform1iv(this.addr,e)}function EM(s,e){s.uniform2iv(this.addr,e)}function bM(s,e){s.uniform3iv(this.addr,e)}function TM(s,e){s.uniform4iv(this.addr,e)}function wM(s,e){s.uniform1uiv(this.addr,e)}function AM(s,e){s.uniform2uiv(this.addr,e)}function CM(s,e){s.uniform3uiv(this.addr,e)}function RM(s,e){s.uniform4uiv(this.addr,e)}function PM(s,e,n){const r=this.cache,o=e.length,l=Hl(n,o);sn(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||x0,l[u])}function DM(s,e,n){const r=this.cache,o=e.length,l=Hl(n,o);sn(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||_0,l[u])}function LM(s,e,n){const r=this.cache,o=e.length,l=Hl(n,o);sn(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||v0,l[u])}function NM(s,e,n){const r=this.cache,o=e.length,l=Hl(n,o);sn(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||g0,l[u])}function UM(s){switch(s){case 5126:return mM;case 35664:return xM;case 35665:return gM;case 35666:return _M;case 35674:return vM;case 35675:return yM;case 35676:return SM;case 5124:case 35670:return MM;case 35667:case 35671:return EM;case 35668:case 35672:return bM;case 35669:case 35673:return TM;case 5125:return wM;case 36294:return AM;case 36295:return CM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return LM;case 36289:case 36303:case 36311:case 36292:return NM}}class IM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=pM(n.type)}}class FM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=UM(n.type)}}class OM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,n[f.id],r)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function Rm(s,e){s.seq.push(e),s.map[e.id]=e}function zM(s,e,n){const r=s.name,o=r.length;for(nd.lastIndex=0;;){const l=nd.exec(r),u=nd.lastIndex;let f=l[1];const m=l[2]==="]",p=l[3];if(m&&(f=f|0),p===void 0||p==="["&&u+2===o){Rm(n,p===void 0?new IM(f,s,e):new FM(f,s,e));break}else{let v=n.map[f];v===void 0&&(v=new OM(f),Rm(n,v)),n=v}}}class Nl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(n,o),u=e.getUniformLocation(n,l.name);zM(l,u,this)}}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const f=n[l],m=r[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Pm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const kM=37297;let BM=0;function VM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const Dm=new pt;function HM(s){wt._getMatrix(Dm,wt.workingColorSpace,s);const e=`mat3( ${Dm.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(s)){case Ul:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Lm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+VM(s.getShaderSource(e),f)}else return l}function GM(s,e){const n=HM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function WM(s,e){let n;switch(e){case Vg:n="Linear";break;case Hg:n="Reinhard";break;case Gg:n="Cineon";break;case Wg:n="ACESFilmic";break;case Xg:n="AgX";break;case Yg:n="Neutral";break;case jg:n="Custom";break;default:ct("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wl=new Q;function jM(){wt.getLuminanceCoefficients(wl);const s=wl.x.toFixed(4),e=wl.y.toFixed(4),n=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function YM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function qM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Ba(s){return s!==""}function Nm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Um(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(s){return s.replace(KM,ZM)}const $M=new Map;function ZM(s,e){let n=xt[e];if(n===void 0){const r=$M.get(e);if(r!==void 0)n=xt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Xd(n)}const JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(s){return s.replace(JM,QM)}function QM(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Fm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===yg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function tE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case Ys:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function iE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wm:e="ENVMAP_BLENDING_MULTIPLY";break;case kg:e="ENVMAP_BLENDING_MIX";break;case Bg:e="ENVMAP_BLENDING_ADD";break}return e}function rE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function sE(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const m=eE(n),p=tE(n),x=nE(n),v=iE(n),_=rE(n),S=XM(n),M=YM(l),b=o.createProgram();let y,g,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Ba).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Ba).join(`
`),g.length>0&&(g+=`
`)):(y=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),g=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+x:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wr?"#define TONE_MAPPING":"",n.toneMapping!==wr?xt.tonemapping_pars_fragment:"",n.toneMapping!==wr?WM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,GM("linearToOutputTexel",n.outputColorSpace),jM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ba).join(`
`)),u=Xd(u),u=Nm(u,n),u=Um(u,n),f=Xd(f),f=Nm(f,n),f=Um(f,n),u=Im(u),f=Im(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=N+y+u,U=N+g+f,G=Pm(o,o.VERTEX_SHADER,P),L=Pm(o,o.FRAGMENT_SHADER,U);o.attachShader(b,G),o.attachShader(b,L),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function B(H){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(b)||"",ie=o.getShaderInfoLog(G)||"",fe=o.getShaderInfoLog(L)||"",ce=Z.trim(),ue=ie.trim(),de=fe.trim();let V=!0,ae=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,b,G,L);else{const ee=Lm(o,G,"vertex"),I=Lm(o,L,"fragment");Kt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ce+`
`+ee+`
`+I)}else ce!==""?ct("WebGLProgram: Program Info Log:",ce):(ue===""||de==="")&&(ae=!1);ae&&(H.diagnostics={runnable:V,programLog:ce,vertexShader:{log:ue,prefix:y},fragmentShader:{log:de,prefix:g}})}o.deleteShader(G),o.deleteShader(L),J=new Nl(o,b),C=qM(o,b)}let J;this.getUniforms=function(){return J===void 0&&B(this),J};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(b,kM)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=BM++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=G,this.fragmentShader=L,this}let aE=0;class oE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new lE(e),n.set(e,r)),r}}class lE{constructor(e){this.id=aE++,this.code=e,this.usedTimes=0}}function cE(s,e,n,r,o,l,u){const f=new i0,m=new oE,p=new Set,x=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,A,H,Z,ie){const fe=Z.fog,ce=ie.geometry,ue=C.isMeshStandardMaterial?Z.environment:null,de=(C.isMeshStandardMaterial?n:e).get(C.envMap||ue),V=de&&de.mapping===kl?de.image.height:null,ae=M[C.type];C.precision!==null&&(S=o.getMaxPrecision(C.precision),S!==C.precision&&ct("WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const ee=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,I=ee!==void 0?ee.length:0;let se=0;ce.morphAttributes.position!==void 0&&(se=1),ce.morphAttributes.normal!==void 0&&(se=2),ce.morphAttributes.color!==void 0&&(se=3);let Ne,ze,je,ne;if(ae){const Et=Si[ae];Ne=Et.vertexShader,ze=Et.fragmentShader}else Ne=C.vertexShader,ze=C.fragmentShader,m.update(C),je=m.getVertexShaderID(C),ne=m.getFragmentShaderID(C);const le=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),Ie=ie.isInstancedMesh===!0,Fe=ie.isBatchedMesh===!0,ht=!!C.map,$t=!!C.matcap,dt=!!de,Dt=!!C.aoMap,F=!!C.lightMap,gt=!!C.bumpMap,mt=!!C.normalMap,Ct=!!C.displacementMap,ke=!!C.emissiveMap,Rt=!!C.metalnessMap,Xe=!!C.roughnessMap,at=C.anisotropy>0,R=C.clearcoat>0,T=C.dispersion>0,K=C.iridescence>0,he=C.sheen>0,me=C.transmission>0,oe=at&&!!C.anisotropyMap,qe=R&&!!C.clearcoatMap,Ae=R&&!!C.clearcoatNormalMap,$e=R&&!!C.clearcoatRoughnessMap,Ye=K&&!!C.iridescenceMap,_e=K&&!!C.iridescenceThicknessMap,we=he&&!!C.sheenColorMap,it=he&&!!C.sheenRoughnessMap,Qe=!!C.specularMap,De=!!C.specularColorMap,rt=!!C.specularIntensityMap,z=me&&!!C.transmissionMap,Ce=me&&!!C.thicknessMap,Ee=!!C.gradientMap,be=!!C.alphaMap,ye=C.alphaTest>0,pe=!!C.alphaHash,Be=!!C.extensions;let ot=wr;C.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ot=s.toneMapping);const Lt={shaderID:ae,shaderType:C.type,shaderName:C.name,vertexShader:Ne,fragmentShader:ze,defines:C.defines,customVertexShaderID:je,customFragmentShaderID:ne,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Fe,batchingColor:Fe&&ie._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&ie.instanceColor!==null,instancingMorph:Ie&&ie.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:qs,alphaToCoverage:!!C.alphaToCoverage,map:ht,matcap:$t,envMap:dt,envMapMode:dt&&de.mapping,envMapCubeUVHeight:V,aoMap:Dt,lightMap:F,bumpMap:gt,normalMap:mt,displacementMap:_&&Ct,emissiveMap:ke,normalMapObjectSpace:mt&&C.normalMapType===Zg,normalMapTangentSpace:mt&&C.normalMapType===Qm,metalnessMap:Rt,roughnessMap:Xe,anisotropy:at,anisotropyMap:oe,clearcoat:R,clearcoatMap:qe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:$e,dispersion:T,iridescence:K,iridescenceMap:Ye,iridescenceThicknessMap:_e,sheen:he,sheenColorMap:we,sheenRoughnessMap:it,specularMap:Qe,specularColorMap:De,specularIntensityMap:rt,transmission:me,transmissionMap:z,thicknessMap:Ce,gradientMap:Ee,opaque:C.transparent===!1&&C.blending===Gs&&C.alphaToCoverage===!1,alphaMap:be,alphaTest:ye,alphaHash:pe,combine:C.combine,mapUv:ht&&b(C.map.channel),aoMapUv:Dt&&b(C.aoMap.channel),lightMapUv:F&&b(C.lightMap.channel),bumpMapUv:gt&&b(C.bumpMap.channel),normalMapUv:mt&&b(C.normalMap.channel),displacementMapUv:Ct&&b(C.displacementMap.channel),emissiveMapUv:ke&&b(C.emissiveMap.channel),metalnessMapUv:Rt&&b(C.metalnessMap.channel),roughnessMapUv:Xe&&b(C.roughnessMap.channel),anisotropyMapUv:oe&&b(C.anisotropyMap.channel),clearcoatMapUv:qe&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:we&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:it&&b(C.sheenRoughnessMap.channel),specularMapUv:Qe&&b(C.specularMap.channel),specularColorMapUv:De&&b(C.specularColorMap.channel),specularIntensityMapUv:rt&&b(C.specularIntensityMap.channel),transmissionMapUv:z&&b(C.transmissionMap.channel),thicknessMapUv:Ce&&b(C.thicknessMap.channel),alphaMapUv:be&&b(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(mt||at),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!ce.attributes.uv&&(ht||be),fog:!!fe,useFog:C.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Se,skinning:ie.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:se,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:ot,decodeVideoTexture:ht&&C.map.isVideoTexture===!0&&wt.getTransfer(C.map.colorSpace)===Nt,decodeVideoTextureEmissive:ke&&C.emissiveMap.isVideoTexture===!0&&wt.getTransfer(C.emissiveMap.colorSpace)===Nt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Mi,flipSided:C.side===Fn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Be&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&C.extensions.multiDraw===!0||Fe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Lt.vertexUv1s=p.has(1),Lt.vertexUv2s=p.has(2),Lt.vertexUv3s=p.has(3),p.clear(),Lt}function g(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)A.push(H),A.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(N(A,C),P(A,C),A.push(s.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function N(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function P(C,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),A.gradientMap&&f.enable(22),C.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reversedDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),C.push(f.mask)}function U(C){const A=M[C.type];let H;if(A){const Z=Si[A];H=A_.clone(Z.uniforms)}else H=C.uniforms;return H}function G(C,A){let H;for(let Z=0,ie=x.length;Z<ie;Z++){const fe=x[Z];if(fe.cacheKey===A){H=fe,++H.usedTimes;break}}return H===void 0&&(H=new sE(s,A,C,l),x.push(H)),H}function L(C){if(--C.usedTimes===0){const A=x.indexOf(C);x[A]=x[x.length-1],x.pop(),C.destroy()}}function B(C){m.remove(C)}function J(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:U,acquireProgram:G,releaseProgram:L,releaseShaderCache:B,programs:x,dispose:J}}function uE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,m){s.get(u)[f]=m}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function dE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Om(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zm(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(v,_,S,M,b,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:_,material:S,groupOrder:M,renderOrder:v.renderOrder,z:b,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=_,g.material=S,g.groupOrder=M,g.renderOrder=v.renderOrder,g.z=b,g.group=y),e++,g}function f(v,_,S,M,b,y){const g=u(v,_,S,M,b,y);S.transmission>0?r.push(g):S.transparent===!0?o.push(g):n.push(g)}function m(v,_,S,M,b,y){const g=u(v,_,S,M,b,y);S.transmission>0?r.unshift(g):S.transparent===!0?o.unshift(g):n.unshift(g)}function p(v,_){n.length>1&&n.sort(v||dE),r.length>1&&r.sort(_||Om),o.length>1&&o.sort(_||Om)}function x(){for(let v=e,_=s.length;v<_;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:f,unshift:m,finish:x,sort:p}}function fE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new zm,s.set(r,[u])):o>=l.length?(u=new zm,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function hE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new St};break;case"SpotLight":n={position:new Q,direction:new Q,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=n,n}}}function pE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let mE=0;function xE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gE(s){const e=new hE,n=pE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Q);const o=new Q,l=new Yt,u=new Yt;function f(p){let x=0,v=0,_=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,M=0,b=0,y=0,g=0,N=0,P=0,U=0,G=0,L=0,B=0;p.sort(xE);for(let C=0,A=p.length;C<A;C++){const H=p[C],Z=H.color,ie=H.intensity,fe=H.distance,ce=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)x+=Z.r*ie,v+=Z.g*ie,_+=Z.b*ie;else if(H.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(H.sh.coefficients[ue],ie);B++}else if(H.isDirectionalLight){const ue=e.get(H);if(ue.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const de=H.shadow,V=n.get(H);V.shadowIntensity=de.intensity,V.shadowBias=de.bias,V.shadowNormalBias=de.normalBias,V.shadowRadius=de.radius,V.shadowMapSize=de.mapSize,r.directionalShadow[S]=V,r.directionalShadowMap[S]=ce,r.directionalShadowMatrix[S]=H.shadow.matrix,N++}r.directional[S]=ue,S++}else if(H.isSpotLight){const ue=e.get(H);ue.position.setFromMatrixPosition(H.matrixWorld),ue.color.copy(Z).multiplyScalar(ie),ue.distance=fe,ue.coneCos=Math.cos(H.angle),ue.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ue.decay=H.decay,r.spot[b]=ue;const de=H.shadow;if(H.map&&(r.spotLightMap[G]=H.map,G++,de.updateMatrices(H),H.castShadow&&L++),r.spotLightMatrix[b]=de.matrix,H.castShadow){const V=n.get(H);V.shadowIntensity=de.intensity,V.shadowBias=de.bias,V.shadowNormalBias=de.normalBias,V.shadowRadius=de.radius,V.shadowMapSize=de.mapSize,r.spotShadow[b]=V,r.spotShadowMap[b]=ce,U++}b++}else if(H.isRectAreaLight){const ue=e.get(H);ue.color.copy(Z).multiplyScalar(ie),ue.halfWidth.set(H.width*.5,0,0),ue.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=ue,y++}else if(H.isPointLight){const ue=e.get(H);if(ue.color.copy(H.color).multiplyScalar(H.intensity),ue.distance=H.distance,ue.decay=H.decay,H.castShadow){const de=H.shadow,V=n.get(H);V.shadowIntensity=de.intensity,V.shadowBias=de.bias,V.shadowNormalBias=de.normalBias,V.shadowRadius=de.radius,V.shadowMapSize=de.mapSize,V.shadowCameraNear=de.camera.near,V.shadowCameraFar=de.camera.far,r.pointShadow[M]=V,r.pointShadowMap[M]=ce,r.pointShadowMatrix[M]=H.shadow.matrix,P++}r.point[M]=ue,M++}else if(H.isHemisphereLight){const ue=e.get(H);ue.skyColor.copy(H.color).multiplyScalar(ie),ue.groundColor.copy(H.groundColor).multiplyScalar(ie),r.hemi[g]=ue,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=_;const J=r.hash;(J.directionalLength!==S||J.pointLength!==M||J.spotLength!==b||J.rectAreaLength!==y||J.hemiLength!==g||J.numDirectionalShadows!==N||J.numPointShadows!==P||J.numSpotShadows!==U||J.numSpotMaps!==G||J.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=y,r.point.length=M,r.hemi.length=g,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=U+G-L,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=B,J.directionalLength=S,J.pointLength=M,J.spotLength=b,J.rectAreaLength=y,J.hemiLength=g,J.numDirectionalShadows=N,J.numPointShadows=P,J.numSpotShadows=U,J.numSpotMaps=G,J.numLightProbes=B,r.version=mE++)}function m(p,x){let v=0,_=0,S=0,M=0,b=0;const y=x.matrixWorldInverse;for(let g=0,N=p.length;g<N;g++){const P=p[g];if(P.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(y),v++}else if(P.isSpotLight){const U=r.spot[S];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const U=r.rectArea[M];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(y),u.identity(),l.copy(P.matrixWorld),l.premultiply(y),u.extractRotation(l),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),M++}else if(P.isPointLight){const U=r.point[_];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(y),_++}else if(P.isHemisphereLight){const U=r.hemi[b];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(y),b++}}}return{setup:f,setupView:m,state:r}}function km(s){const e=new gE(s),n=[],r=[];function o(x){p.camera=x,n.length=0,r.length=0}function l(x){n.push(x)}function u(x){r.push(x)}function f(){e.setup(n)}function m(x){e.setupView(n,x)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:m,pushLight:l,pushShadow:u}}function _E(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new km(s),e.set(o,[f])):l>=u.length?(f=new km(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const vE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SE(s,e,n){let r=new af;const o=new ft,l=new ft,u=new Xt,f=new B_({depthPacking:$g}),m=new V_,p={},x=n.maxTextureSize,v={[Ar]:Fn,[Fn]:Ar,[Mi]:Mi},_=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:vE,fragmentShader:yE}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const M=new Ai;M.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new pi(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gm;let g=this.type;this.render=function(L,B,J){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;const C=s.getRenderTarget(),A=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(ji),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ie=g!==Hi&&this.type===Hi,fe=g===Hi&&this.type!==Hi;for(let ce=0,ue=L.length;ce<ue;ce++){const de=L[ce],V=de.shadow;if(V===void 0){ct("WebGLShadowMap:",de,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ae=V.getFrameExtents();if(o.multiply(ae),l.copy(V.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/ae.x),o.x=l.x*ae.x,V.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/ae.y),o.y=l.y*ae.y,V.mapSize.y=l.y)),V.map===null||ie===!0||fe===!0){const I=this.type!==Hi?{minFilter:jn,magFilter:jn}:{};V.map!==null&&V.map.dispose(),V.map=new Jr(o.x,o.y,I),V.map.texture.name=de.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ee=V.getViewportCount();for(let I=0;I<ee;I++){const se=V.getViewport(I);u.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),Z.viewport(u),V.updateMatrices(de,I),r=V.getFrustum(),U(B,J,V.camera,de,this.type)}V.isPointLightShadow!==!0&&this.type===Hi&&N(V,J),V.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(C,A,H)};function N(L,B){const J=e.update(b);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Jr(o.x,o.y)),_.uniforms.shadow_pass.value=L.map.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(B,null,J,_,b,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(B,null,J,S,b,null)}function P(L,B,J,C){let A=null;const H=J.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(H!==void 0)A=H;else if(A=J.isPointLight===!0?m:f,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Z=A.uuid,ie=B.uuid;let fe=p[Z];fe===void 0&&(fe={},p[Z]=fe);let ce=fe[ie];ce===void 0&&(ce=A.clone(),fe[ie]=ce,B.addEventListener("dispose",G)),A=ce}if(A.visible=B.visible,A.wireframe=B.wireframe,C===Hi?A.side=B.shadowSide!==null?B.shadowSide:B.side:A.side=B.shadowSide!==null?B.shadowSide:v[B.side],A.alphaMap=B.alphaMap,A.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,A.map=B.map,A.clipShadows=B.clipShadows,A.clippingPlanes=B.clippingPlanes,A.clipIntersection=B.clipIntersection,A.displacementMap=B.displacementMap,A.displacementScale=B.displacementScale,A.displacementBias=B.displacementBias,A.wireframeLinewidth=B.wireframeLinewidth,A.linewidth=B.linewidth,J.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Z=s.properties.get(A);Z.light=J}return A}function U(L,B,J,C,A){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&A===Hi)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,L.matrixWorld);const ie=e.update(L),fe=L.material;if(Array.isArray(fe)){const ce=ie.groups;for(let ue=0,de=ce.length;ue<de;ue++){const V=ce[ue],ae=fe[V.materialIndex];if(ae&&ae.visible){const ee=P(L,ae,C,A);L.onBeforeShadow(s,L,B,J,ie,ee,V),s.renderBufferDirect(J,null,ie,ee,L,V),L.onAfterShadow(s,L,B,J,ie,ee,V)}}}else if(fe.visible){const ce=P(L,fe,C,A);L.onBeforeShadow(s,L,B,J,ie,ce,null),s.renderBufferDirect(J,null,ie,ce,L,null),L.onAfterShadow(s,L,B,J,ie,ce,null)}}const Z=L.children;for(let ie=0,fe=Z.length;ie<fe;ie++)U(Z[ie],B,J,C,A)}function G(L){L.target.removeEventListener("dispose",G);for(const J in p){const C=p[J],A=L.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const ME={[ad]:od,[ld]:dd,[cd]:fd,[js]:ud,[od]:ad,[dd]:ld,[fd]:cd,[ud]:js};function EE(s,e){function n(){let z=!1;const Ce=new Xt;let Ee=null;const be=new Xt(0,0,0,0);return{setMask:function(ye){Ee!==ye&&!z&&(s.colorMask(ye,ye,ye,ye),Ee=ye)},setLocked:function(ye){z=ye},setClear:function(ye,pe,Be,ot,Lt){Lt===!0&&(ye*=ot,pe*=ot,Be*=ot),Ce.set(ye,pe,Be,ot),be.equals(Ce)===!1&&(s.clearColor(ye,pe,Be,ot),be.copy(Ce))},reset:function(){z=!1,Ee=null,be.set(-1,0,0,0)}}}function r(){let z=!1,Ce=!1,Ee=null,be=null,ye=null;return{setReversed:function(pe){if(Ce!==pe){const Be=e.get("EXT_clip_control");pe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Ce=pe;const ot=ye;ye=null,this.setClear(ot)}},getReversed:function(){return Ce},setTest:function(pe){pe?le(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(pe){Ee!==pe&&!z&&(s.depthMask(pe),Ee=pe)},setFunc:function(pe){if(Ce&&(pe=ME[pe]),be!==pe){switch(pe){case ad:s.depthFunc(s.NEVER);break;case od:s.depthFunc(s.ALWAYS);break;case ld:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case cd:s.depthFunc(s.EQUAL);break;case ud:s.depthFunc(s.GEQUAL);break;case dd:s.depthFunc(s.GREATER);break;case fd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=pe}},setLocked:function(pe){z=pe},setClear:function(pe){ye!==pe&&(Ce&&(pe=1-pe),s.clearDepth(pe),ye=pe)},reset:function(){z=!1,Ee=null,be=null,ye=null,Ce=!1}}}function o(){let z=!1,Ce=null,Ee=null,be=null,ye=null,pe=null,Be=null,ot=null,Lt=null;return{setTest:function(Et){z||(Et?le(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(Et){Ce!==Et&&!z&&(s.stencilMask(Et),Ce=Et)},setFunc:function(Et,On,dn){(Ee!==Et||be!==On||ye!==dn)&&(s.stencilFunc(Et,On,dn),Ee=Et,be=On,ye=dn)},setOp:function(Et,On,dn){(pe!==Et||Be!==On||ot!==dn)&&(s.stencilOp(Et,On,dn),pe=Et,Be=On,ot=dn)},setLocked:function(Et){z=Et},setClear:function(Et){Lt!==Et&&(s.clearStencil(Et),Lt=Et)},reset:function(){z=!1,Ce=null,Ee=null,be=null,ye=null,pe=null,Be=null,ot=null,Lt=null}}}const l=new n,u=new r,f=new o,m=new WeakMap,p=new WeakMap;let x={},v={},_=new WeakMap,S=[],M=null,b=!1,y=null,g=null,N=null,P=null,U=null,G=null,L=null,B=new St(0,0,0),J=0,C=!1,A=null,H=null,Z=null,ie=null,fe=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,de=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(V)[1]),ue=de>=1):V.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ue=de>=2);let ae=null,ee={};const I=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Ne=new Xt().fromArray(I),ze=new Xt().fromArray(se);function je(z,Ce,Ee,be){const ye=new Uint8Array(4),pe=s.createTexture();s.bindTexture(z,pe),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<Ee;Be++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(Ce+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return pe}const ne={};ne[s.TEXTURE_2D]=je(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=je(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=je(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=je(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),le(s.DEPTH_TEST),u.setFunc(js),gt(!1),mt(Op),le(s.CULL_FACE),Dt(ji);function le(z){x[z]!==!0&&(s.enable(z),x[z]=!0)}function Se(z){x[z]!==!1&&(s.disable(z),x[z]=!1)}function Ie(z,Ce){return v[z]!==Ce?(s.bindFramebuffer(z,Ce),v[z]=Ce,z===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ce),z===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Fe(z,Ce){let Ee=S,be=!1;if(z){Ee=_.get(Ce),Ee===void 0&&(Ee=[],_.set(Ce,Ee));const ye=z.textures;if(Ee.length!==ye.length||Ee[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Be=ye.length;pe<Be;pe++)Ee[pe]=s.COLOR_ATTACHMENT0+pe;Ee.length=ye.length,be=!0}}else Ee[0]!==s.BACK&&(Ee[0]=s.BACK,be=!0);be&&s.drawBuffers(Ee)}function ht(z){return M!==z?(s.useProgram(z),M=z,!0):!1}const $t={[Yr]:s.FUNC_ADD,[Mg]:s.FUNC_SUBTRACT,[Eg]:s.FUNC_REVERSE_SUBTRACT};$t[bg]=s.MIN,$t[Tg]=s.MAX;const dt={[wg]:s.ZERO,[Ag]:s.ONE,[Cg]:s.SRC_COLOR,[rd]:s.SRC_ALPHA,[Ug]:s.SRC_ALPHA_SATURATE,[Lg]:s.DST_COLOR,[Pg]:s.DST_ALPHA,[Rg]:s.ONE_MINUS_SRC_COLOR,[sd]:s.ONE_MINUS_SRC_ALPHA,[Ng]:s.ONE_MINUS_DST_COLOR,[Dg]:s.ONE_MINUS_DST_ALPHA,[Ig]:s.CONSTANT_COLOR,[Fg]:s.ONE_MINUS_CONSTANT_COLOR,[Og]:s.CONSTANT_ALPHA,[zg]:s.ONE_MINUS_CONSTANT_ALPHA};function Dt(z,Ce,Ee,be,ye,pe,Be,ot,Lt,Et){if(z===ji){b===!0&&(Se(s.BLEND),b=!1);return}if(b===!1&&(le(s.BLEND),b=!0),z!==Sg){if(z!==y||Et!==C){if((g!==Yr||U!==Yr)&&(s.blendEquation(s.FUNC_ADD),g=Yr,U=Yr),Et)switch(z){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zp:s.blendFunc(s.ONE,s.ONE);break;case kp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Kt("WebGLState: Invalid blending: ",z);break}else switch(z){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case kp:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bp:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",z);break}N=null,P=null,G=null,L=null,B.set(0,0,0),J=0,y=z,C=Et}return}ye=ye||Ce,pe=pe||Ee,Be=Be||be,(Ce!==g||ye!==U)&&(s.blendEquationSeparate($t[Ce],$t[ye]),g=Ce,U=ye),(Ee!==N||be!==P||pe!==G||Be!==L)&&(s.blendFuncSeparate(dt[Ee],dt[be],dt[pe],dt[Be]),N=Ee,P=be,G=pe,L=Be),(ot.equals(B)===!1||Lt!==J)&&(s.blendColor(ot.r,ot.g,ot.b,Lt),B.copy(ot),J=Lt),y=z,C=!1}function F(z,Ce){z.side===Mi?Se(s.CULL_FACE):le(s.CULL_FACE);let Ee=z.side===Fn;Ce&&(Ee=!Ee),gt(Ee),z.blending===Gs&&z.transparent===!1?Dt(ji):Dt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),l.setMask(z.colorWrite);const be=z.stencilWrite;f.setTest(be),be&&(f.setMask(z.stencilWriteMask),f.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),f.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ke(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(z){A!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),A=z)}function mt(z){z!==_g?(le(s.CULL_FACE),z!==H&&(z===Op?s.cullFace(s.BACK):z===vg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),H=z}function Ct(z){z!==Z&&(ue&&s.lineWidth(z),Z=z)}function ke(z,Ce,Ee){z?(le(s.POLYGON_OFFSET_FILL),(ie!==Ce||fe!==Ee)&&(s.polygonOffset(Ce,Ee),ie=Ce,fe=Ee)):Se(s.POLYGON_OFFSET_FILL)}function Rt(z){z?le(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function Xe(z){z===void 0&&(z=s.TEXTURE0+ce-1),ae!==z&&(s.activeTexture(z),ae=z)}function at(z,Ce,Ee){Ee===void 0&&(ae===null?Ee=s.TEXTURE0+ce-1:Ee=ae);let be=ee[Ee];be===void 0&&(be={type:void 0,texture:void 0},ee[Ee]=be),(be.type!==z||be.texture!==Ce)&&(ae!==Ee&&(s.activeTexture(Ee),ae=Ee),s.bindTexture(z,Ce||ne[z]),be.type=z,be.texture=Ce)}function R(){const z=ee[ae];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(z){z("WebGLState:",z)}}function K(){try{s.compressedTexImage3D(...arguments)}catch(z){z("WebGLState:",z)}}function he(){try{s.texSubImage2D(...arguments)}catch(z){z("WebGLState:",z)}}function me(){try{s.texSubImage3D(...arguments)}catch(z){z("WebGLState:",z)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(z){z("WebGLState:",z)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(z){z("WebGLState:",z)}}function Ae(){try{s.texStorage2D(...arguments)}catch(z){z("WebGLState:",z)}}function $e(){try{s.texStorage3D(...arguments)}catch(z){z("WebGLState:",z)}}function Ye(){try{s.texImage2D(...arguments)}catch(z){z("WebGLState:",z)}}function _e(){try{s.texImage3D(...arguments)}catch(z){z("WebGLState:",z)}}function we(z){Ne.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Ne.copy(z))}function it(z){ze.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),ze.copy(z))}function Qe(z,Ce){let Ee=p.get(Ce);Ee===void 0&&(Ee=new WeakMap,p.set(Ce,Ee));let be=Ee.get(z);be===void 0&&(be=s.getUniformBlockIndex(Ce,z.name),Ee.set(z,be))}function De(z,Ce){const be=p.get(Ce).get(z);m.get(Ce)!==be&&(s.uniformBlockBinding(Ce,be,z.__bindingPointIndex),m.set(Ce,be))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},ae=null,ee={},v={},_=new WeakMap,S=[],M=null,b=!1,y=null,g=null,N=null,P=null,U=null,G=null,L=null,B=new St(0,0,0),J=0,C=!1,A=null,H=null,Z=null,ie=null,fe=null,Ne.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:le,disable:Se,bindFramebuffer:Ie,drawBuffers:Fe,useProgram:ht,setBlending:Dt,setMaterial:F,setFlipSided:gt,setCullFace:mt,setLineWidth:Ct,setPolygonOffset:ke,setScissorTest:Rt,activeTexture:Xe,bindTexture:at,unbindTexture:R,compressedTexImage2D:T,compressedTexImage3D:K,texImage2D:Ye,texImage3D:_e,updateUBOMapping:Qe,uniformBlockBinding:De,texStorage2D:Ae,texStorage3D:$e,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:oe,compressedTexSubImage3D:qe,scissor:we,viewport:it,reset:rt}}function bE(s,e,n,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ft,x=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,T){return S?new OffscreenCanvas(R,T):Fl("canvas")}function b(R,T,K){let he=1;const me=at(R);if((me.width>K||me.height>K)&&(he=K/Math.max(me.width,me.height)),he<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor(he*me.width),qe=Math.floor(he*me.height);v===void 0&&(v=M(oe,qe));const Ae=T?M(oe,qe):v;return Ae.width=oe,Ae.height=qe,Ae.getContext("2d").drawImage(R,0,0,oe,qe),ct("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+oe+"x"+qe+")."),Ae}else return"data"in R&&ct("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),R;return R}function y(R){return R.generateMipmaps}function g(R){s.generateMipmap(R)}function N(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(R,T,K,he,me=!1){if(R!==null){if(s[R]!==void 0)return s[R];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=T;if(T===s.RED&&(K===s.FLOAT&&(oe=s.R32F),K===s.HALF_FLOAT&&(oe=s.R16F),K===s.UNSIGNED_BYTE&&(oe=s.R8)),T===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(oe=s.R8UI),K===s.UNSIGNED_SHORT&&(oe=s.R16UI),K===s.UNSIGNED_INT&&(oe=s.R32UI),K===s.BYTE&&(oe=s.R8I),K===s.SHORT&&(oe=s.R16I),K===s.INT&&(oe=s.R32I)),T===s.RG&&(K===s.FLOAT&&(oe=s.RG32F),K===s.HALF_FLOAT&&(oe=s.RG16F),K===s.UNSIGNED_BYTE&&(oe=s.RG8)),T===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(oe=s.RG8UI),K===s.UNSIGNED_SHORT&&(oe=s.RG16UI),K===s.UNSIGNED_INT&&(oe=s.RG32UI),K===s.BYTE&&(oe=s.RG8I),K===s.SHORT&&(oe=s.RG16I),K===s.INT&&(oe=s.RG32I)),T===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),K===s.UNSIGNED_INT&&(oe=s.RGB32UI),K===s.BYTE&&(oe=s.RGB8I),K===s.SHORT&&(oe=s.RGB16I),K===s.INT&&(oe=s.RGB32I)),T===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),K===s.UNSIGNED_INT&&(oe=s.RGBA32UI),K===s.BYTE&&(oe=s.RGBA8I),K===s.SHORT&&(oe=s.RGBA16I),K===s.INT&&(oe=s.RGBA32I)),T===s.RGB&&(K===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(oe=s.R11F_G11F_B10F)),T===s.RGBA){const qe=me?Ul:wt.getTransfer(he);K===s.FLOAT&&(oe=s.RGBA32F),K===s.HALF_FLOAT&&(oe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(oe=qe===Nt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function U(R,T){let K;return R?T===null||T===$r||T===Ha?K=s.DEPTH24_STENCIL8:T===Wi?K=s.DEPTH32F_STENCIL8:T===Va&&(K=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===$r||T===Ha?K=s.DEPTH_COMPONENT24:T===Wi?K=s.DEPTH_COMPONENT32F:T===Va&&(K=s.DEPTH_COMPONENT16),K}function G(R,T){return y(R)===!0||R.isFramebufferTexture&&R.minFilter!==jn&&R.minFilter!==ti?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function L(R){const T=R.target;T.removeEventListener("dispose",L),J(T),T.isVideoTexture&&x.delete(T)}function B(R){const T=R.target;T.removeEventListener("dispose",B),A(T)}function J(R){const T=r.get(R);if(T.__webglInit===void 0)return;const K=R.source,he=_.get(K);if(he){const me=he[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&C(R),Object.keys(he).length===0&&_.delete(K)}r.remove(R)}function C(R){const T=r.get(R);s.deleteTexture(T.__webglTexture);const K=R.source,he=_.get(K);delete he[T.__cacheKey],u.memory.textures--}function A(R){const T=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let me=0;me<T.__webglFramebuffer[he].length;me++)s.deleteFramebuffer(T.__webglFramebuffer[he][me]);else s.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)s.deleteFramebuffer(T.__webglFramebuffer[he]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=R.textures;for(let he=0,me=K.length;he<me;he++){const oe=r.get(K[he]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),u.memory.textures--),r.remove(K[he])}r.remove(R)}let H=0;function Z(){H=0}function ie(){const R=H;return R>=o.maxTextures&&ct("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),H+=1,R}function fe(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function ce(R,T){const K=r.get(R);if(R.isVideoTexture&&Rt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&K.__version!==R.version){const he=R.image;if(he===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(K,R,T);return}}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+T)}function ue(R,T){const K=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){ne(K,R,T);return}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+T)}function de(R,T){const K=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){ne(K,R,T);return}n.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+T)}function V(R,T){const K=r.get(R);if(R.version>0&&K.__version!==R.version){le(K,R,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+T)}const ae={[md]:s.REPEAT,[Gi]:s.CLAMP_TO_EDGE,[xd]:s.MIRRORED_REPEAT},ee={[jn]:s.NEAREST,[qg]:s.NEAREST_MIPMAP_NEAREST,[rl]:s.NEAREST_MIPMAP_LINEAR,[ti]:s.LINEAR,[wu]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},I={[Jg]:s.NEVER,[r_]:s.ALWAYS,[Qg]:s.LESS,[e0]:s.LEQUAL,[e_]:s.EQUAL,[i_]:s.GEQUAL,[t_]:s.GREATER,[n_]:s.NOTEQUAL};function se(R,T){if(T.type===Wi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ti||T.magFilter===wu||T.magFilter===rl||T.magFilter===Kr||T.minFilter===ti||T.minFilter===wu||T.minFilter===rl||T.minFilter===Kr)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ae[T.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ae[T.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ae[T.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ee[T.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ee[T.minFilter]),T.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===jn||T.minFilter!==rl&&T.minFilter!==Kr||T.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ne(R,T){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",L));const he=T.source;let me=_.get(he);me===void 0&&(me={},_.set(he,me));const oe=fe(T);if(oe!==R.__cacheKey){me[oe]===void 0&&(me[oe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,K=!0),me[oe].usedTimes++;const qe=me[R.__cacheKey];qe!==void 0&&(me[R.__cacheKey].usedTimes--,qe.usedTimes===0&&C(T)),R.__cacheKey=oe,R.__webglTexture=me[oe].texture}return K}function ze(R,T,K){return Math.floor(Math.floor(R/K)/T)}function je(R,T,K,he){const oe=R.updateRanges;if(oe.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,K,he,T.data);else{oe.sort((_e,we)=>_e.start-we.start);let qe=0;for(let _e=1;_e<oe.length;_e++){const we=oe[qe],it=oe[_e],Qe=we.start+we.count,De=ze(it.start,T.width,4),rt=ze(we.start,T.width,4);it.start<=Qe+1&&De===rt&&ze(it.start+it.count-1,T.width,4)===De?we.count=Math.max(we.count,it.start+it.count-we.start):(++qe,oe[qe]=it)}oe.length=qe+1;const Ae=s.getParameter(s.UNPACK_ROW_LENGTH),$e=s.getParameter(s.UNPACK_SKIP_PIXELS),Ye=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let _e=0,we=oe.length;_e<we;_e++){const it=oe[_e],Qe=Math.floor(it.start/4),De=Math.ceil(it.count/4),rt=Qe%T.width,z=Math.floor(Qe/T.width),Ce=De,Ee=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),s.pixelStorei(s.UNPACK_SKIP_ROWS,z),n.texSubImage2D(s.TEXTURE_2D,0,rt,z,Ce,Ee,K,he,T.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,$e),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ye)}}function ne(R,T,K){let he=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=s.TEXTURE_3D);const me=Ne(R,T),oe=T.source;n.bindTexture(he,R.__webglTexture,s.TEXTURE0+K);const qe=r.get(oe);if(oe.version!==qe.__version||me===!0){n.activeTexture(s.TEXTURE0+K);const Ae=wt.getPrimaries(wt.workingColorSpace),$e=T.colorSpace===br?null:wt.getPrimaries(T.colorSpace),Ye=T.colorSpace===br||Ae===$e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let _e=b(T.image,!1,o.maxTextureSize);_e=Xe(T,_e);const we=l.convert(T.format,T.colorSpace),it=l.convert(T.type);let Qe=P(T.internalFormat,we,it,T.colorSpace,T.isVideoTexture);se(he,T);let De;const rt=T.mipmaps,z=T.isVideoTexture!==!0,Ce=qe.__version===void 0||me===!0,Ee=oe.dataReady,be=G(T,_e);if(T.isDepthTexture)Qe=U(T.format===Wa,T.type),Ce&&(z?n.texStorage2D(s.TEXTURE_2D,1,Qe,_e.width,_e.height):n.texImage2D(s.TEXTURE_2D,0,Qe,_e.width,_e.height,0,we,it,null));else if(T.isDataTexture)if(rt.length>0){z&&Ce&&n.texStorage2D(s.TEXTURE_2D,be,Qe,rt[0].width,rt[0].height);for(let ye=0,pe=rt.length;ye<pe;ye++)De=rt[ye],z?Ee&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,De.width,De.height,we,it,De.data):n.texImage2D(s.TEXTURE_2D,ye,Qe,De.width,De.height,0,we,it,De.data);T.generateMipmaps=!1}else z?(Ce&&n.texStorage2D(s.TEXTURE_2D,be,Qe,_e.width,_e.height),Ee&&je(T,_e,we,it)):n.texImage2D(s.TEXTURE_2D,0,Qe,_e.width,_e.height,0,we,it,_e.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){z&&Ce&&n.texStorage3D(s.TEXTURE_2D_ARRAY,be,Qe,rt[0].width,rt[0].height,_e.depth);for(let ye=0,pe=rt.length;ye<pe;ye++)if(De=rt[ye],T.format!==fi)if(we!==null)if(z){if(Ee)if(T.layerUpdates.size>0){const Be=xm(De.width,De.height,T.format,T.type);for(const ot of T.layerUpdates){const Lt=De.data.subarray(ot*Be/De.data.BYTES_PER_ELEMENT,(ot+1)*Be/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,ot,De.width,De.height,1,we,Lt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,De.width,De.height,_e.depth,we,De.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,Qe,De.width,De.height,_e.depth,0,De.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Ee&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,De.width,De.height,_e.depth,we,it,De.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ye,Qe,De.width,De.height,_e.depth,0,we,it,De.data)}else{z&&Ce&&n.texStorage2D(s.TEXTURE_2D,be,Qe,rt[0].width,rt[0].height);for(let ye=0,pe=rt.length;ye<pe;ye++)De=rt[ye],T.format!==fi?we!==null?z?Ee&&n.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,De.width,De.height,we,De.data):n.compressedTexImage2D(s.TEXTURE_2D,ye,Qe,De.width,De.height,0,De.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Ee&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,De.width,De.height,we,it,De.data):n.texImage2D(s.TEXTURE_2D,ye,Qe,De.width,De.height,0,we,it,De.data)}else if(T.isDataArrayTexture)if(z){if(Ce&&n.texStorage3D(s.TEXTURE_2D_ARRAY,be,Qe,_e.width,_e.height,_e.depth),Ee)if(T.layerUpdates.size>0){const ye=xm(_e.width,_e.height,T.format,T.type);for(const pe of T.layerUpdates){const Be=_e.data.subarray(pe*ye/_e.data.BYTES_PER_ELEMENT,(pe+1)*ye/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,_e.width,_e.height,1,we,it,Be)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,we,it,_e.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Qe,_e.width,_e.height,_e.depth,0,we,it,_e.data);else if(T.isData3DTexture)z?(Ce&&n.texStorage3D(s.TEXTURE_3D,be,Qe,_e.width,_e.height,_e.depth),Ee&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,we,it,_e.data)):n.texImage3D(s.TEXTURE_3D,0,Qe,_e.width,_e.height,_e.depth,0,we,it,_e.data);else if(T.isFramebufferTexture){if(Ce)if(z)n.texStorage2D(s.TEXTURE_2D,be,Qe,_e.width,_e.height);else{let ye=_e.width,pe=_e.height;for(let Be=0;Be<be;Be++)n.texImage2D(s.TEXTURE_2D,Be,Qe,ye,pe,0,we,it,null),ye>>=1,pe>>=1}}else if(rt.length>0){if(z&&Ce){const ye=at(rt[0]);n.texStorage2D(s.TEXTURE_2D,be,Qe,ye.width,ye.height)}for(let ye=0,pe=rt.length;ye<pe;ye++)De=rt[ye],z?Ee&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,we,it,De):n.texImage2D(s.TEXTURE_2D,ye,Qe,we,it,De);T.generateMipmaps=!1}else if(z){if(Ce){const ye=at(_e);n.texStorage2D(s.TEXTURE_2D,be,Qe,ye.width,ye.height)}Ee&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,we,it,_e)}else n.texImage2D(s.TEXTURE_2D,0,Qe,we,it,_e);y(T)&&g(he),qe.__version=oe.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function le(R,T,K){if(T.image.length!==6)return;const he=Ne(R,T),me=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+K);const oe=r.get(me);if(me.version!==oe.__version||he===!0){n.activeTexture(s.TEXTURE0+K);const qe=wt.getPrimaries(wt.workingColorSpace),Ae=T.colorSpace===br?null:wt.getPrimaries(T.colorSpace),$e=T.colorSpace===br||qe===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,_e=T.image[0]&&T.image[0].isDataTexture,we=[];for(let pe=0;pe<6;pe++)!Ye&&!_e?we[pe]=b(T.image[pe],!0,o.maxCubemapSize):we[pe]=_e?T.image[pe].image:T.image[pe],we[pe]=Xe(T,we[pe]);const it=we[0],Qe=l.convert(T.format,T.colorSpace),De=l.convert(T.type),rt=P(T.internalFormat,Qe,De,T.colorSpace),z=T.isVideoTexture!==!0,Ce=oe.__version===void 0||he===!0,Ee=me.dataReady;let be=G(T,it);se(s.TEXTURE_CUBE_MAP,T);let ye;if(Ye){z&&Ce&&n.texStorage2D(s.TEXTURE_CUBE_MAP,be,rt,it.width,it.height);for(let pe=0;pe<6;pe++){ye=we[pe].mipmaps;for(let Be=0;Be<ye.length;Be++){const ot=ye[Be];T.format!==fi?Qe!==null?z?Ee&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,0,0,ot.width,ot.height,Qe,ot.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,rt,ot.width,ot.height,0,ot.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,0,0,ot.width,ot.height,Qe,De,ot.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,rt,ot.width,ot.height,0,Qe,De,ot.data)}}}else{if(ye=T.mipmaps,z&&Ce){ye.length>0&&be++;const pe=at(we[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,be,rt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(_e){z?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,we[pe].width,we[pe].height,Qe,De,we[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,rt,we[pe].width,we[pe].height,0,Qe,De,we[pe].data);for(let Be=0;Be<ye.length;Be++){const Lt=ye[Be].image[pe].image;z?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,0,0,Lt.width,Lt.height,Qe,De,Lt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,rt,Lt.width,Lt.height,0,Qe,De,Lt.data)}}else{z?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Qe,De,we[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,rt,Qe,De,we[pe]);for(let Be=0;Be<ye.length;Be++){const ot=ye[Be];z?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,0,0,Qe,De,ot.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,rt,Qe,De,ot.image[pe])}}}y(T)&&g(s.TEXTURE_CUBE_MAP),oe.__version=me.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Se(R,T,K,he,me,oe){const qe=l.convert(K.format,K.colorSpace),Ae=l.convert(K.type),$e=P(K.internalFormat,qe,Ae,K.colorSpace),Ye=r.get(T),_e=r.get(K);if(_e.__renderTarget=T,!Ye.__hasExternalTextures){const we=Math.max(1,T.width>>oe),it=Math.max(1,T.height>>oe);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?n.texImage3D(me,oe,$e,we,it,T.depth,0,qe,Ae,null):n.texImage2D(me,oe,$e,we,it,0,qe,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,R),ke(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,me,_e.__webglTexture,0,Ct(T)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,me,_e.__webglTexture,oe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(R,T,K){if(s.bindRenderbuffer(s.RENDERBUFFER,R),T.depthBuffer){const he=T.depthTexture,me=he&&he.isDepthTexture?he.type:null,oe=U(T.stencilBuffer,me),qe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=Ct(T);ke(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,oe,T.width,T.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,oe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,oe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,R)}else{const he=T.textures;for(let me=0;me<he.length;me++){const oe=he[me],qe=l.convert(oe.format,oe.colorSpace),Ae=l.convert(oe.type),$e=P(oe.internalFormat,qe,Ae,oe.colorSpace),Ye=Ct(T);K&&ke(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,$e,T.width,T.height):ke(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,$e,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,$e,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Fe(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(T.depthTexture);he.__renderTarget=T,(!he.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ce(T.depthTexture,0);const me=he.__webglTexture,oe=Ct(T);if(T.depthTexture.format===Ga)ke(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(T.depthTexture.format===Wa)ke(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function ht(R){const T=r.get(R),K=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const he=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",me)};he.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=he}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const he=R.texture.mipmaps;he&&he.length>0?Fe(T.__webglFramebuffer[0],R):Fe(T.__webglFramebuffer,R)}else if(K){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=s.createRenderbuffer(),Ie(T.__webglDepthbuffer[he],R,!1);else{const me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,oe)}}else{const he=R.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Ie(T.__webglDepthbuffer,R,!1);else{const me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,oe)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(R,T,K){const he=r.get(R);T!==void 0&&Se(he.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&ht(R)}function dt(R){const T=R.texture,K=r.get(R),he=r.get(T);R.addEventListener("dispose",B);const me=R.textures,oe=R.isWebGLCubeRenderTarget===!0,qe=me.length>1;if(qe||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=T.version,u.memory.textures++),oe){K.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Ae]=[];for(let $e=0;$e<T.mipmaps.length;$e++)K.__webglFramebuffer[Ae][$e]=s.createFramebuffer()}else K.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)K.__webglFramebuffer[Ae]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Ae=0,$e=me.length;Ae<$e;Ae++){const Ye=r.get(me[Ae]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),u.memory.textures++)}if(R.samples>0&&ke(R)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ae=0;Ae<me.length;Ae++){const $e=me[Ae];K.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Ae]);const Ye=l.convert($e.format,$e.colorSpace),_e=l.convert($e.type),we=P($e.internalFormat,Ye,_e,$e.colorSpace,R.isXRRenderTarget===!0),it=Ct(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,we,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,K.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(K.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),se(s.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let $e=0;$e<T.mipmaps.length;$e++)Se(K.__webglFramebuffer[Ae][$e],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e);else Se(K.__webglFramebuffer[Ae],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(T)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let Ae=0,$e=me.length;Ae<$e;Ae++){const Ye=me[Ae],_e=r.get(Ye);let we=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(we=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(we,_e.__webglTexture),se(we,Ye),Se(K.__webglFramebuffer,R,Ye,s.COLOR_ATTACHMENT0+Ae,we,0),y(Ye)&&g(we)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ae=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,he.__webglTexture),se(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let $e=0;$e<T.mipmaps.length;$e++)Se(K.__webglFramebuffer[$e],R,T,s.COLOR_ATTACHMENT0,Ae,$e);else Se(K.__webglFramebuffer,R,T,s.COLOR_ATTACHMENT0,Ae,0);y(T)&&g(Ae),n.unbindTexture()}R.depthBuffer&&ht(R)}function Dt(R){const T=R.textures;for(let K=0,he=T.length;K<he;K++){const me=T[K];if(y(me)){const oe=N(R),qe=r.get(me).__webglTexture;n.bindTexture(oe,qe),g(oe),n.unbindTexture()}}}const F=[],gt=[];function mt(R){if(R.samples>0){if(ke(R)===!1){const T=R.textures,K=R.width,he=R.height;let me=s.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(R),Ae=T.length>1;if(Ae)for(let Ye=0;Ye<T.length;Ye++)n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const $e=R.texture.mipmaps;$e&&$e.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Ye=0;Ye<T.length;Ye++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Ye]);const _e=r.get(T[Ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,K,he,0,0,K,he,me,s.NEAREST),m===!0&&(F.length=0,gt.length=0,F.push(s.COLOR_ATTACHMENT0+Ye),R.depthBuffer&&R.resolveDepthBuffer===!1&&(F.push(oe),gt.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,F))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Ye=0;Ye<T.length;Ye++){n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Ye]);const _e=r.get(T[Ye]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,_e,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&m){const T=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ct(R){return Math.min(o.maxSamples,R.samples)}function ke(R){const T=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Rt(R){const T=u.render.frame;x.get(R)!==T&&(x.set(R,T),R.update())}function Xe(R,T){const K=R.colorSpace,he=R.format,me=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==qs&&K!==br&&(wt.getTransfer(K)===Nt?(he!==fi||me!==Ti)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",K)),T}function at(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(p.width=R.naturalWidth||R.width,p.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(p.width=R.displayWidth,p.height=R.displayHeight):(p.width=R.width,p.height=R.height),p}this.allocateTextureUnit=ie,this.resetTextureUnits=Z,this.setTexture2D=ce,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=V,this.rebindTextures=$t,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ke}function TE(s,e){function n(r,o=br){let l;const u=wt.getTransfer(o);if(r===Ti)return s.UNSIGNED_BYTE;if(r===$d)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===qm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Km)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Xm)return s.BYTE;if(r===Ym)return s.SHORT;if(r===Va)return s.UNSIGNED_SHORT;if(r===Kd)return s.INT;if(r===$r)return s.UNSIGNED_INT;if(r===Wi)return s.FLOAT;if(r===$s)return s.HALF_FLOAT;if(r===$m)return s.ALPHA;if(r===Zm)return s.RGB;if(r===fi)return s.RGBA;if(r===Ga)return s.DEPTH_COMPONENT;if(r===Wa)return s.DEPTH_STENCIL;if(r===Jm)return s.RED;if(r===Jd)return s.RED_INTEGER;if(r===Qd)return s.RG;if(r===ef)return s.RG_INTEGER;if(r===tf)return s.RGBA_INTEGER;if(r===Cl||r===Rl||r===Pl||r===Dl)if(u===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Cl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Rl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Cl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Rl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gd||r===_d||r===vd||r===yd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===gd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_d)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sd||r===Md||r===Ed)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Sd||r===Md)return u===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ed)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bd||r===Td||r===wd||r===Ad||r===Cd||r===Rd||r===Pd||r===Dd||r===Ld||r===Nd||r===Ud||r===Id||r===Fd||r===Od)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===bd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Td)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ad)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ld)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ud)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Id)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Od)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zd||r===kd||r===Bd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===zd)return u===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vd||r===Hd||r===Gd||r===Wd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Vd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Hd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ha?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const wE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new f0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Yi({vertexShader:wE,fragmentShader:AE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pi(new qa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RE extends es{constructor(e,n){super();const r=this;let o=null,l=1,u=null,f="local-floor",m=1,p=null,x=null,v=null,_=null,S=null,M=null;const b=typeof XRWebGLBinding<"u",y=new CE,g={},N=n.getContextAttributes();let P=null,U=null;const G=[],L=[],B=new ft;let J=null;const C=new ei;C.viewport=new Xt;const A=new ei;A.viewport=new Xt;const H=[C,A],Z=new X_;let ie=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let le=G[ne];return le===void 0&&(le=new qu,G[ne]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ne){let le=G[ne];return le===void 0&&(le=new qu,G[ne]=le),le.getGripSpace()},this.getHand=function(ne){let le=G[ne];return le===void 0&&(le=new qu,G[ne]=le),le.getHandSpace()};function ce(ne){const le=L.indexOf(ne.inputSource);if(le===-1)return;const Se=G[le];Se!==void 0&&(Se.update(ne.inputSource,ne.frame,p||u),Se.dispatchEvent({type:ne.type,data:ne.inputSource}))}function ue(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",de);for(let ne=0;ne<G.length;ne++){const le=L[ne];le!==null&&(L[ne]=null,G[ne].disconnect(le))}ie=null,fe=null,y.reset();for(const ne in g)delete g[ne];e.setRenderTarget(P),S=null,_=null,v=null,o=null,U=null,je.stop(),r.isPresenting=!1,e.setPixelRatio(J),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){f=ne,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",de),N.xrCompatible!==!0&&await n.makeXRCompatible(),J=e.getPixelRatio(),e.getSize(B),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ie=null,Fe=null;N.depth&&(Fe=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=N.stencil?Wa:Ga,Ie=N.stencil?Ha:$r);const ht={colorFormat:n.RGBA8,depthFormat:Fe,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(ht),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),U=new Jr(_.textureWidth,_.textureHeight,{format:fi,type:Ti,depthTexture:new d0(_.textureWidth,_.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Se={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,n,Se),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Jr(S.framebufferWidth,S.framebufferHeight,{format:fi,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(f),je.setContext(o),je.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function de(ne){for(let le=0;le<ne.removed.length;le++){const Se=ne.removed[le],Ie=L.indexOf(Se);Ie>=0&&(L[Ie]=null,G[Ie].disconnect(Se))}for(let le=0;le<ne.added.length;le++){const Se=ne.added[le];let Ie=L.indexOf(Se);if(Ie===-1){for(let ht=0;ht<G.length;ht++)if(ht>=L.length){L.push(Se),Ie=ht;break}else if(L[ht]===null){L[ht]=Se,Ie=ht;break}if(Ie===-1)break}const Fe=G[Ie];Fe&&Fe.connect(Se)}}const V=new Q,ae=new Q;function ee(ne,le,Se){V.setFromMatrixPosition(le.matrixWorld),ae.setFromMatrixPosition(Se.matrixWorld);const Ie=V.distanceTo(ae),Fe=le.projectionMatrix.elements,ht=Se.projectionMatrix.elements,$t=Fe[14]/(Fe[10]-1),dt=Fe[14]/(Fe[10]+1),Dt=(Fe[9]+1)/Fe[5],F=(Fe[9]-1)/Fe[5],gt=(Fe[8]-1)/Fe[0],mt=(ht[8]+1)/ht[0],Ct=$t*gt,ke=$t*mt,Rt=Ie/(-gt+mt),Xe=Rt*-gt;if(le.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Xe),ne.translateZ(Rt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Fe[10]===-1)ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const at=$t+Rt,R=dt+Rt,T=Ct-Xe,K=ke+(Ie-Xe),he=Dt*dt/R*at,me=F*dt/R*at;ne.projectionMatrix.makePerspective(T,K,he,me,at,R),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function I(ne,le){le===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(le.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let le=ne.near,Se=ne.far;y.texture!==null&&(y.depthNear>0&&(le=y.depthNear),y.depthFar>0&&(Se=y.depthFar)),Z.near=A.near=C.near=le,Z.far=A.far=C.far=Se,(ie!==Z.near||fe!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ie=Z.near,fe=Z.far),Z.layers.mask=ne.layers.mask|6,C.layers.mask=Z.layers.mask&3,A.layers.mask=Z.layers.mask&5;const Ie=ne.parent,Fe=Z.cameras;I(Z,Ie);for(let ht=0;ht<Fe.length;ht++)I(Fe[ht],Ie);Fe.length===2?ee(Z,C,A):Z.projectionMatrix.copy(C.projectionMatrix),se(ne,Z,Ie)};function se(ne,le,Se){Se===null?ne.matrix.copy(le.matrixWorld):(ne.matrix.copy(Se.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(le.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=jd*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&S===null))return m},this.setFoveation=function(ne){m=ne,_!==null&&(_.fixedFoveation=ne),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(ne){return g[ne]};let Ne=null;function ze(ne,le){if(x=le.getViewerPose(p||u),M=le,x!==null){const Se=x.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let Ie=!1;Se.length!==Z.cameras.length&&(Z.cameras.length=0,Ie=!0);for(let dt=0;dt<Se.length;dt++){const Dt=Se[dt];let F=null;if(S!==null)F=S.getViewport(Dt);else{const mt=v.getViewSubImage(_,Dt);F=mt.viewport,dt===0&&(e.setRenderTargetTextures(U,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(U))}let gt=H[dt];gt===void 0&&(gt=new ei,gt.layers.enable(dt),gt.viewport=new Xt,H[dt]=gt),gt.matrix.fromArray(Dt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Dt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(F.x,F.y,F.width,F.height),dt===0&&(Z.matrix.copy(gt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ie===!0&&Z.cameras.push(gt)}const Fe=o.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){v=r.getBinding();const dt=v.getDepthInformation(Se[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,o.renderState)}if(Fe&&Fe.includes("camera-access")&&b){e.state.unbindTexture(),v=r.getBinding();for(let dt=0;dt<Se.length;dt++){const Dt=Se[dt].camera;if(Dt){let F=g[Dt];F||(F=new f0,g[Dt]=F);const gt=v.getCameraImage(Dt);F.sourceTexture=gt}}}}for(let Se=0;Se<G.length;Se++){const Ie=L[Se],Fe=G[Se];Ie!==null&&Fe!==void 0&&Fe.update(Ie,le,p||u)}Ne&&Ne(ne,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),M=null}const je=new m0;je.setAnimationLoop(ze),this.setAnimationLoop=function(ne){Ne=ne},this.dispose=function(){}}}const Xr=new wi,PE=new Yt;function DE(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,o0(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function o(y,g,N,P,U){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(y,g):g.isMeshToonMaterial?(l(y,g),v(y,g)):g.isMeshPhongMaterial?(l(y,g),x(y,g)):g.isMeshStandardMaterial?(l(y,g),_(y,g),g.isMeshPhysicalMaterial&&S(y,g,U)):g.isMeshMatcapMaterial?(l(y,g),M(y,g)):g.isMeshDepthMaterial?l(y,g):g.isMeshDistanceMaterial?(l(y,g),b(y,g)):g.isMeshNormalMaterial?l(y,g):g.isLineBasicMaterial?(u(y,g),g.isLineDashedMaterial&&f(y,g)):g.isPointsMaterial?m(y,g,N,P):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Fn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Fn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const N=e.get(g),P=N.envMap,U=N.envMapRotation;P&&(y.envMap.value=P,Xr.copy(U),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),y.envMapRotation.value.setFromMatrix4(PE.makeRotationFromEuler(Xr)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function u(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function f(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,N,P){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*N,y.scale.value=P*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function x(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function _(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,N){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,g){g.matcap&&(y.matcap.value=g.matcap)}function b(y,g){const N=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function LE(s,e,n,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,P){const U=P.program;r.uniformBlockBinding(N,U)}function p(N,P){let U=o[N.id];U===void 0&&(M(N),U=x(N),o[N.id]=U,N.addEventListener("dispose",y));const G=P.program;r.updateUBOMapping(N,G);const L=e.render.frame;l[N.id]!==L&&(_(N),l[N.id]=L)}function x(N){const P=v();N.__bindingPointIndex=P;const U=s.createBuffer(),G=N.__size,L=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,G,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,U),U}function v(){for(let N=0;N<f;N++)if(u.indexOf(N)===-1)return u.push(N),N;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const P=o[N.id],U=N.uniforms,G=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let L=0,B=U.length;L<B;L++){const J=Array.isArray(U[L])?U[L]:[U[L]];for(let C=0,A=J.length;C<A;C++){const H=J[C];if(S(H,L,C,G)===!0){const Z=H.__offset,ie=Array.isArray(H.value)?H.value:[H.value];let fe=0;for(let ce=0;ce<ie.length;ce++){const ue=ie[ce],de=b(ue);typeof ue=="number"||typeof ue=="boolean"?(H.__data[0]=ue,s.bufferSubData(s.UNIFORM_BUFFER,Z+fe,H.__data)):ue.isMatrix3?(H.__data[0]=ue.elements[0],H.__data[1]=ue.elements[1],H.__data[2]=ue.elements[2],H.__data[3]=0,H.__data[4]=ue.elements[3],H.__data[5]=ue.elements[4],H.__data[6]=ue.elements[5],H.__data[7]=0,H.__data[8]=ue.elements[6],H.__data[9]=ue.elements[7],H.__data[10]=ue.elements[8],H.__data[11]=0):(ue.toArray(H.__data,fe),fe+=de.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,P,U,G){const L=N.value,B=P+"_"+U;if(G[B]===void 0)return typeof L=="number"||typeof L=="boolean"?G[B]=L:G[B]=L.clone(),!0;{const J=G[B];if(typeof L=="number"||typeof L=="boolean"){if(J!==L)return G[B]=L,!0}else if(J.equals(L)===!1)return J.copy(L),!0}return!1}function M(N){const P=N.uniforms;let U=0;const G=16;for(let B=0,J=P.length;B<J;B++){const C=Array.isArray(P[B])?P[B]:[P[B]];for(let A=0,H=C.length;A<H;A++){const Z=C[A],ie=Array.isArray(Z.value)?Z.value:[Z.value];for(let fe=0,ce=ie.length;fe<ce;fe++){const ue=ie[fe],de=b(ue),V=U%G,ae=V%de.boundary,ee=V+ae;U+=ae,ee!==0&&G-ee<de.storage&&(U+=G-ee),Z.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=U,U+=de.storage}}}const L=U%G;return L>0&&(U+=G-L),N.__size=U,N.__cache={},this}function b(N){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=48,P.storage=48):N.isMatrix4?(P.boundary=64,P.storage=64):N.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ct("WebGLRenderer: Unsupported uniform value type.",N),P}function y(N){const P=N.target;P.removeEventListener("dispose",y);const U=u.indexOf(P.__bindingPointIndex);u.splice(U,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function g(){for(const N in o)s.deleteBuffer(o[N]);u=[],o={},l={}}return{bind:m,update:p,dispose:g}}const NE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Vi=null;function UE(){return Vi===null&&(Vi=new U_(NE,32,32,Qd,$s),Vi.minFilter=ti,Vi.magFilter=ti,Vi.wrapS=Gi,Vi.wrapT=Gi,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class IE{constructor(e={}){const{canvas:n=s_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const M=new Set([tf,ef,Jd]),b=new Set([Ti,$r,Va,Ha,$d,Zd]),y=new Uint32Array(4),g=new Int32Array(4);let N=null,P=null;const U=[],G=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let B=!1;this._outputColorSpace=Qn;let J=0,C=0,A=null,H=-1,Z=null;const ie=new Xt,fe=new Xt;let ce=null;const ue=new St(0);let de=0,V=n.width,ae=n.height,ee=1,I=null,se=null;const Ne=new Xt(0,0,V,ae),ze=new Xt(0,0,V,ae);let je=!1;const ne=new af;let le=!1,Se=!1;const Ie=new Yt,Fe=new Q,ht=new Xt,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Dt(){return A===null?ee:1}let F=r;function gt(w,j){return n.getContext(w,j)}try{const w={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qd}`),n.addEventListener("webglcontextlost",ye,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",Be,!1),F===null){const j="webgl2";if(F=gt(j,w),F===null)throw gt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let mt,Ct,ke,Rt,Xe,at,R,T,K,he,me,oe,qe,Ae,$e,Ye,_e,we,it,Qe,De,rt,z,Ce;function Ee(){mt=new GS(F),mt.init(),rt=new TE(F,mt),Ct=new US(F,mt,e,rt),ke=new EE(F,mt),Ct.reversedDepthBuffer&&_&&ke.buffers.depth.setReversed(!0),Rt=new XS(F),Xe=new uE,at=new bE(F,mt,ke,Xe,Ct,rt,Rt),R=new FS(L),T=new HS(L),K=new $_(F),z=new LS(F,K),he=new WS(F,K,Rt,z),me=new qS(F,he,K,Rt),it=new YS(F,Ct,at),Ye=new IS(Xe),oe=new cE(L,R,T,mt,Ct,z,Ye),qe=new DE(L,Xe),Ae=new fE,$e=new _E(mt),we=new DS(L,R,T,ke,me,S,m),_e=new SE(L,me,Ct),Ce=new LE(F,Rt,Ct,ke),Qe=new NS(F,mt,Rt),De=new jS(F,mt,Rt),Rt.programs=oe.programs,L.capabilities=Ct,L.extensions=mt,L.properties=Xe,L.renderLists=Ae,L.shadowMap=_e,L.state=ke,L.info=Rt}Ee();const be=new RE(L,F);this.xr=be,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(V,ae,!1))},this.getSize=function(w){return w.set(V,ae)},this.setSize=function(w,j,q=!0){if(be.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,ae=j,n.width=Math.floor(w*ee),n.height=Math.floor(j*ee),q===!0&&(n.style.width=w+"px",n.style.height=j+"px"),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(V*ee,ae*ee).floor()},this.setDrawingBufferSize=function(w,j,q){V=w,ae=j,ee=q,n.width=Math.floor(w*q),n.height=Math.floor(j*q),this.setViewport(0,0,w,j)},this.getCurrentViewport=function(w){return w.copy(ie)},this.getViewport=function(w){return w.copy(Ne)},this.setViewport=function(w,j,q,re){w.isVector4?Ne.set(w.x,w.y,w.z,w.w):Ne.set(w,j,q,re),ke.viewport(ie.copy(Ne).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(ze)},this.setScissor=function(w,j,q,re){w.isVector4?ze.set(w.x,w.y,w.z,w.w):ze.set(w,j,q,re),ke.scissor(fe.copy(ze).multiplyScalar(ee).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(w){ke.setScissorTest(je=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,q=!0){let re=0;if(w){let X=!1;if(A!==null){const Te=A.texture.format;X=M.has(Te)}if(X){const Te=A.texture.type,Re=b.has(Te),He=we.getClearColor(),Ue=we.getClearAlpha(),et=He.r,Ke=He.g,Je=He.b;Re?(y[0]=et,y[1]=Ke,y[2]=Je,y[3]=Ue,F.clearBufferuiv(F.COLOR,0,y)):(g[0]=et,g[1]=Ke,g[2]=Je,g[3]=Ue,F.clearBufferiv(F.COLOR,0,g))}else re|=F.COLOR_BUFFER_BIT}j&&(re|=F.DEPTH_BUFFER_BIT),q&&(re|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ye,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",Be,!1),we.dispose(),Ae.dispose(),$e.dispose(),Xe.dispose(),R.dispose(),T.dispose(),me.dispose(),z.dispose(),Ce.dispose(),oe.dispose(),be.dispose(),be.removeEventListener("sessionstart",qi),be.removeEventListener("sessionend",Ka),zn.stop()};function ye(w){w.preventDefault(),jp("WebGLRenderer: Context Lost."),B=!0}function pe(){jp("WebGLRenderer: Context Restored."),B=!1;const w=Rt.autoReset,j=_e.enabled,q=_e.autoUpdate,re=_e.needsUpdate,X=_e.type;Ee(),Rt.autoReset=w,_e.enabled=j,_e.autoUpdate=q,_e.needsUpdate=re,_e.type=X}function Be(w){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ot(w){const j=w.target;j.removeEventListener("dispose",ot),Lt(j)}function Lt(w){Et(w),Xe.remove(w)}function Et(w){const j=Xe.get(w).programs;j!==void 0&&(j.forEach(function(q){oe.releaseProgram(q)}),w.isShaderMaterial&&oe.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,q,re,X,Te){j===null&&(j=$t);const Re=X.isMesh&&X.matrixWorld.determinant()<0,He=Za(w,j,q,re,X);ke.setMaterial(re,Re);let Ue=q.index,et=1;if(re.wireframe===!0){if(Ue=he.getWireframeAttribute(q),Ue===void 0)return;et=2}const Ke=q.drawRange,Je=q.attributes.position;let st=Ke.start*et,At=(Ke.start+Ke.count)*et;Te!==null&&(st=Math.max(st,Te.start*et),At=Math.min(At,(Te.start+Te.count)*et)),Ue!==null?(st=Math.max(st,0),At=Math.min(At,Ue.count)):Je!=null&&(st=Math.max(st,0),At=Math.min(At,Je.count));const kt=At-st;if(kt<0||kt===1/0)return;z.setup(X,re,He,q,Ue);let Bt,bt=Qe;if(Ue!==null&&(Bt=K.get(Ue),bt=De,bt.setIndex(Bt)),X.isMesh)re.wireframe===!0?(ke.setLineWidth(re.wireframeLinewidth*Dt()),bt.setMode(F.LINES)):bt.setMode(F.TRIANGLES);else if(X.isLine){let Ze=re.linewidth;Ze===void 0&&(Ze=1),ke.setLineWidth(Ze*Dt()),X.isLineSegments?bt.setMode(F.LINES):X.isLineLoop?bt.setMode(F.LINE_LOOP):bt.setMode(F.LINE_STRIP)}else X.isPoints?bt.setMode(F.POINTS):X.isSprite&&bt.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ja("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))bt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ze=X._multiDrawStarts,Pt=X._multiDrawCounts,vt=X._multiDrawCount,Mn=Ue?K.get(Ue).bytesPerElement:1,$i=Xe.get(re).currentProgram.getUniforms();for(let fn=0;fn<vt;fn++)$i.setValue(F,"_gl_DrawID",fn),bt.render(Ze[fn]/Mn,Pt[fn])}else if(X.isInstancedMesh)bt.renderInstances(st,kt,X.count);else if(q.isInstancedBufferGeometry){const Ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pt=Math.min(q.instanceCount,Ze);bt.renderInstances(st,kt,Pt)}else bt.render(st,kt)};function On(w,j,q){w.transparent===!0&&w.side===Mi&&w.forceSinglePass===!1?(w.side=Fn,w.needsUpdate=!0,is(w,j,q),w.side=Ar,w.needsUpdate=!0,is(w,j,q),w.side=Mi):is(w,j,q)}this.compile=function(w,j,q=null){q===null&&(q=w),P=$e.get(q),P.init(j),G.push(P),q.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(P.pushLight(X),X.castShadow&&P.pushShadow(X))}),w!==q&&w.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(P.pushLight(X),X.castShadow&&P.pushShadow(X))}),P.setupLights();const re=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Te=X.material;if(Te)if(Array.isArray(Te))for(let Re=0;Re<Te.length;Re++){const He=Te[Re];On(He,q,X),re.add(He)}else On(Te,q,X),re.add(Te)}),P=G.pop(),re},this.compileAsync=function(w,j,q=null){const re=this.compile(w,j,q);return new Promise(X=>{function Te(){if(re.forEach(function(Re){Xe.get(Re).currentProgram.isReady()&&re.delete(Re)}),re.size===0){X(w);return}setTimeout(Te,10)}mt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let dn=null;function Qs(w){dn&&dn(w)}function qi(){zn.stop()}function Ka(){zn.start()}const zn=new m0;zn.setAnimationLoop(Qs),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(w){dn=w,be.setAnimationLoop(w),w===null?zn.stop():zn.start()},be.addEventListener("sessionstart",qi),be.addEventListener("sessionend",Ka),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(j),j=be.getCamera()),w.isScene===!0&&w.onBeforeRender(L,w,j,A),P=$e.get(w,G.length),P.init(j),G.push(P),Ie.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ne.setFromProjectionMatrix(Ie,Ei,j.reversedDepth),Se=this.localClippingEnabled,le=Ye.init(this.clippingPlanes,Se),N=Ae.get(w,U.length),N.init(),U.push(N),be.enabled===!0&&be.isPresenting===!0){const Te=L.xr.getDepthSensingMesh();Te!==null&&Ki(Te,j,-1/0,L.sortObjects)}Ki(w,j,0,L.sortObjects),N.finish(),L.sortObjects===!0&&N.sort(I,se),dt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,dt&&we.addToRenderList(N,w),this.info.render.frame++,le===!0&&Ye.beginShadows();const q=P.state.shadowsArray;_e.render(q,w,j),le===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=N.opaque,X=N.transmissive;if(P.setupLights(),j.isArrayCamera){const Te=j.cameras;if(X.length>0)for(let Re=0,He=Te.length;Re<He;Re++){const Ue=Te[Re];ts(re,X,w,Ue)}dt&&we.render(w);for(let Re=0,He=Te.length;Re<He;Re++){const Ue=Te[Re];Cr(N,w,Ue,Ue.viewport)}}else X.length>0&&ts(re,X,w,j),dt&&we.render(w),Cr(N,w,j);A!==null&&C===0&&(at.updateMultisampleRenderTarget(A),at.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(L,w,j),z.resetDefaultState(),H=-1,Z=null,G.pop(),G.length>0?(P=G[G.length-1],le===!0&&Ye.setGlobalState(L.clippingPlanes,P.state.camera)):P=null,U.pop(),U.length>0?N=U[U.length-1]:N=null};function Ki(w,j,q,re){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)P.pushLight(w),w.castShadow&&P.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ne.intersectsSprite(w)){re&&ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ie);const Re=me.update(w),He=w.material;He.visible&&N.push(w,Re,He,q,ht.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ne.intersectsObject(w))){const Re=me.update(w),He=w.material;if(re&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ht.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ht.copy(Re.boundingSphere.center)),ht.applyMatrix4(w.matrixWorld).applyMatrix4(Ie)),Array.isArray(He)){const Ue=Re.groups;for(let et=0,Ke=Ue.length;et<Ke;et++){const Je=Ue[et],st=He[Je.materialIndex];st&&st.visible&&N.push(w,Re,st,q,ht.z,Je)}}else He.visible&&N.push(w,Re,He,q,ht.z,null)}}const Te=w.children;for(let Re=0,He=Te.length;Re<He;Re++)Ki(Te[Re],j,q,re)}function Cr(w,j,q,re){const{opaque:X,transmissive:Te,transparent:Re}=w;P.setupLightsView(q),le===!0&&Ye.setGlobalState(L.clippingPlanes,q),re&&ke.viewport(ie.copy(re)),X.length>0&&ns(X,j,q),Te.length>0&&ns(Te,j,q),Re.length>0&&ns(Re,j,q),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function ts(w,j,q,re){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;P.state.transmissionRenderTarget[re.id]===void 0&&(P.state.transmissionRenderTarget[re.id]=new Jr(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?$s:Ti,minFilter:Kr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Te=P.state.transmissionRenderTarget[re.id],Re=re.viewport||ie;Te.setSize(Re.z*L.transmissionResolutionScale,Re.w*L.transmissionResolutionScale);const He=L.getRenderTarget(),Ue=L.getActiveCubeFace(),et=L.getActiveMipmapLevel();L.setRenderTarget(Te),L.getClearColor(ue),de=L.getClearAlpha(),de<1&&L.setClearColor(16777215,.5),L.clear(),dt&&we.render(q);const Ke=L.toneMapping;L.toneMapping=wr;const Je=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),P.setupLightsView(re),le===!0&&Ye.setGlobalState(L.clippingPlanes,re),ns(w,q,re),at.updateMultisampleRenderTarget(Te),at.updateRenderTargetMipmap(Te),mt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let At=0,kt=j.length;At<kt;At++){const Bt=j[At],{object:bt,geometry:Ze,material:Pt,group:vt}=Bt;if(Pt.side===Mi&&bt.layers.test(re.layers)){const Mn=Pt.side;Pt.side=Fn,Pt.needsUpdate=!0,$a(bt,q,re,Ze,Pt,vt),Pt.side=Mn,Pt.needsUpdate=!0,st=!0}}st===!0&&(at.updateMultisampleRenderTarget(Te),at.updateRenderTargetMipmap(Te))}L.setRenderTarget(He,Ue,et),L.setClearColor(ue,de),Je!==void 0&&(re.viewport=Je),L.toneMapping=Ke}function ns(w,j,q){const re=j.isScene===!0?j.overrideMaterial:null;for(let X=0,Te=w.length;X<Te;X++){const Re=w[X],{object:He,geometry:Ue,group:et}=Re;let Ke=Re.material;Ke.allowOverride===!0&&re!==null&&(Ke=re),He.layers.test(q.layers)&&$a(He,j,q,Ue,Ke,et)}}function $a(w,j,q,re,X,Te){w.onBeforeRender(L,j,q,re,X,Te),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(L,j,q,re,w,Te),X.transparent===!0&&X.side===Mi&&X.forceSinglePass===!1?(X.side=Fn,X.needsUpdate=!0,L.renderBufferDirect(q,j,re,X,w,Te),X.side=Ar,X.needsUpdate=!0,L.renderBufferDirect(q,j,re,X,w,Te),X.side=Mi):L.renderBufferDirect(q,j,re,X,w,Te),w.onAfterRender(L,j,q,re,X,Te)}function is(w,j,q){j.isScene!==!0&&(j=$t);const re=Xe.get(w),X=P.state.lights,Te=P.state.shadowsArray,Re=X.state.version,He=oe.getParameters(w,X.state,Te,j,q),Ue=oe.getProgramCacheKey(He);let et=re.programs;re.environment=w.isMeshStandardMaterial?j.environment:null,re.fog=j.fog,re.envMap=(w.isMeshStandardMaterial?T:R).get(w.envMap||re.environment),re.envMapRotation=re.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",ot),et=new Map,re.programs=et);let Ke=et.get(Ue);if(Ke!==void 0){if(re.currentProgram===Ke&&re.lightsStateVersion===Re)return ea(w,He),Ke}else He.uniforms=oe.getUniforms(w),w.onBeforeCompile(He,L),Ke=oe.acquireProgram(He,Ue),et.set(Ue,Ke),re.uniforms=He.uniforms;const Je=re.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Je.clippingPlanes=Ye.uniform),ea(w,He),re.needsLights=Ja(w),re.lightsStateVersion=Re,re.needsLights&&(Je.ambientLightColor.value=X.state.ambient,Je.lightProbe.value=X.state.probe,Je.directionalLights.value=X.state.directional,Je.directionalLightShadows.value=X.state.directionalShadow,Je.spotLights.value=X.state.spot,Je.spotLightShadows.value=X.state.spotShadow,Je.rectAreaLights.value=X.state.rectArea,Je.ltc_1.value=X.state.rectAreaLTC1,Je.ltc_2.value=X.state.rectAreaLTC2,Je.pointLights.value=X.state.point,Je.pointLightShadows.value=X.state.pointShadow,Je.hemisphereLights.value=X.state.hemi,Je.directionalShadowMap.value=X.state.directionalShadowMap,Je.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Je.spotShadowMap.value=X.state.spotShadowMap,Je.spotLightMatrix.value=X.state.spotLightMatrix,Je.spotLightMap.value=X.state.spotLightMap,Je.pointShadowMap.value=X.state.pointShadowMap,Je.pointShadowMatrix.value=X.state.pointShadowMatrix),re.currentProgram=Ke,re.uniformsList=null,Ke}function mi(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=Nl.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function ea(w,j){const q=Xe.get(w);q.outputColorSpace=j.outputColorSpace,q.batching=j.batching,q.batchingColor=j.batchingColor,q.instancing=j.instancing,q.instancingColor=j.instancingColor,q.instancingMorph=j.instancingMorph,q.skinning=j.skinning,q.morphTargets=j.morphTargets,q.morphNormals=j.morphNormals,q.morphColors=j.morphColors,q.morphTargetsCount=j.morphTargetsCount,q.numClippingPlanes=j.numClippingPlanes,q.numIntersection=j.numClipIntersection,q.vertexAlphas=j.vertexAlphas,q.vertexTangents=j.vertexTangents,q.toneMapping=j.toneMapping}function Za(w,j,q,re,X){j.isScene!==!0&&(j=$t),at.resetTextureUnits();const Te=j.fog,Re=re.isMeshStandardMaterial?j.environment:null,He=A===null?L.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:qs,Ue=(re.isMeshStandardMaterial?T:R).get(re.envMap||Re),et=re.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ke=!!q.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Je=!!q.morphAttributes.position,st=!!q.morphAttributes.normal,At=!!q.morphAttributes.color;let kt=wr;re.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(kt=L.toneMapping);const Bt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,bt=Bt!==void 0?Bt.length:0,Ze=Xe.get(re),Pt=P.state.lights;if(le===!0&&(Se===!0||w!==Z)){const en=w===Z&&re.id===H;Ye.setState(re,w,en)}let vt=!1;re.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Pt.state.version||Ze.outputColorSpace!==He||X.isBatchedMesh&&Ze.batching===!1||!X.isBatchedMesh&&Ze.batching===!0||X.isBatchedMesh&&Ze.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ze.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ze.instancing===!1||!X.isInstancedMesh&&Ze.instancing===!0||X.isSkinnedMesh&&Ze.skinning===!1||!X.isSkinnedMesh&&Ze.skinning===!0||X.isInstancedMesh&&Ze.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ze.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ze.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ze.instancingMorph===!1&&X.morphTexture!==null||Ze.envMap!==Ue||re.fog===!0&&Ze.fog!==Te||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ye.numPlanes||Ze.numIntersection!==Ye.numIntersection)||Ze.vertexAlphas!==et||Ze.vertexTangents!==Ke||Ze.morphTargets!==Je||Ze.morphNormals!==st||Ze.morphColors!==At||Ze.toneMapping!==kt||Ze.morphTargetsCount!==bt)&&(vt=!0):(vt=!0,Ze.__version=re.version);let Mn=Ze.currentProgram;vt===!0&&(Mn=is(re,j,X));let $i=!1,fn=!1,Zi=!1;const It=Mn.getUniforms(),Zt=Ze.uniforms;if(ke.useProgram(Mn.program)&&($i=!0,fn=!0,Zi=!0),re.id!==H&&(H=re.id,fn=!0),$i||Z!==w){ke.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),It.setValue(F,"projectionMatrix",w.projectionMatrix),It.setValue(F,"viewMatrix",w.matrixWorldInverse);const ut=It.map.cameraPosition;ut!==void 0&&ut.setValue(F,Fe.setFromMatrixPosition(w.matrixWorld)),Ct.logarithmicDepthBuffer&&It.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&It.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),Z!==w&&(Z=w,fn=!0,Zi=!0)}if(X.isSkinnedMesh){It.setOptional(F,X,"bindMatrix"),It.setOptional(F,X,"bindMatrixInverse");const en=X.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),It.setValue(F,"boneTexture",en.boneTexture,at))}X.isBatchedMesh&&(It.setOptional(F,X,"batchingTexture"),It.setValue(F,"batchingTexture",X._matricesTexture,at),It.setOptional(F,X,"batchingIdTexture"),It.setValue(F,"batchingIdTexture",X._indirectTexture,at),It.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&It.setValue(F,"batchingColorTexture",X._colorsTexture,at));const An=q.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&it.update(X,q,Mn),(fn||Ze.receiveShadow!==X.receiveShadow)&&(Ze.receiveShadow=X.receiveShadow,It.setValue(F,"receiveShadow",X.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Zt.envMap.value=Ue,Zt.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&j.environment!==null&&(Zt.envMapIntensity.value=j.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=UE()),fn&&(It.setValue(F,"toneMappingExposure",L.toneMappingExposure),Ze.needsLights&&Gl(Zt,Zi),Te&&re.fog===!0&&qe.refreshFogUniforms(Zt,Te),qe.refreshMaterialUniforms(Zt,re,ee,ae,P.state.transmissionRenderTarget[w.id]),Nl.upload(F,mi(Ze),Zt,at)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Nl.upload(F,mi(Ze),Zt,at),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&It.setValue(F,"center",X.center),It.setValue(F,"modelViewMatrix",X.modelViewMatrix),It.setValue(F,"normalMatrix",X.normalMatrix),It.setValue(F,"modelMatrix",X.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const en=re.uniformsGroups;for(let ut=0,rs=en.length;ut<rs;ut++){const xi=en[ut];Ce.update(xi,Mn),Ce.bind(xi,Mn)}}return Mn}function Gl(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function Ja(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,j,q){const re=Xe.get(w);re.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Xe.get(w.texture).__webglTexture=j,Xe.get(w.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:q,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const q=Xe.get(w);q.__webglFramebuffer=j,q.__useDefaultFramebuffer=j===void 0};const Qa=F.createFramebuffer();this.setRenderTarget=function(w,j=0,q=0){A=w,J=j,C=q;let re=!0,X=null,Te=!1,Re=!1;if(w){const Ue=Xe.get(w);if(Ue.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(F.FRAMEBUFFER,null),re=!1;else if(Ue.__webglFramebuffer===void 0)at.setupRenderTarget(w);else if(Ue.__hasExternalTextures)at.rebindTextures(w,Xe.get(w.texture).__webglTexture,Xe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Je=w.depthTexture;if(Ue.__boundDepthTexture!==Je){if(Je!==null&&Xe.has(Je)&&(w.width!==Je.image.width||w.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(w)}}const et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const Ke=Xe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ke[j])?X=Ke[j][q]:X=Ke[j],Te=!0):w.samples>0&&at.useMultisampledRTT(w)===!1?X=Xe.get(w).__webglMultisampledFramebuffer:Array.isArray(Ke)?X=Ke[q]:X=Ke,ie.copy(w.viewport),fe.copy(w.scissor),ce=w.scissorTest}else ie.copy(Ne).multiplyScalar(ee).floor(),fe.copy(ze).multiplyScalar(ee).floor(),ce=je;if(q!==0&&(X=Qa),ke.bindFramebuffer(F.FRAMEBUFFER,X)&&re&&ke.drawBuffers(w,X),ke.viewport(ie),ke.scissor(fe),ke.setScissorTest(ce),Te){const Ue=Xe.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ue.__webglTexture,q)}else if(Re){const Ue=j;for(let et=0;et<w.textures.length;et++){const Ke=Xe.get(w.textures[et]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+et,Ke.__webglTexture,q,Ue)}}else if(w!==null&&q!==0){const Ue=Xe.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ue.__webglTexture,q)}H=-1},this.readRenderTargetPixels=function(w,j,q,re,X,Te,Re,He=0){if(!(w&&w.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue){ke.bindFramebuffer(F.FRAMEBUFFER,Ue);try{const et=w.textures[He],Ke=et.format,Je=et.type;if(!Ct.textureFormatReadable(Ke)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Je)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-re&&q>=0&&q<=w.height-X&&(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+He),F.readPixels(j,q,re,X,rt.convert(Ke),rt.convert(Je),Te))}finally{const et=A!==null?Xe.get(A).__webglFramebuffer:null;ke.bindFramebuffer(F.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(w,j,q,re,X,Te,Re,He=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue)if(j>=0&&j<=w.width-re&&q>=0&&q<=w.height-X){ke.bindFramebuffer(F.FRAMEBUFFER,Ue);const et=w.textures[He],Ke=et.format,Je=et.type;if(!Ct.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,st),F.bufferData(F.PIXEL_PACK_BUFFER,Te.byteLength,F.STREAM_READ),w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+He),F.readPixels(j,q,re,X,rt.convert(Ke),rt.convert(Je),0);const At=A!==null?Xe.get(A).__webglFramebuffer:null;ke.bindFramebuffer(F.FRAMEBUFFER,At);const kt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await a_(F,kt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,st),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Te),F.deleteBuffer(st),F.deleteSync(kt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,q=0){const re=Math.pow(2,-q),X=Math.floor(w.image.width*re),Te=Math.floor(w.image.height*re),Re=j!==null?j.x:0,He=j!==null?j.y:0;at.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,Re,He,X,Te),ke.unbindTexture()};const eo=F.createFramebuffer(),to=F.createFramebuffer();this.copyTextureToTexture=function(w,j,q=null,re=null,X=0,Te=null){Te===null&&(X!==0?(ja("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=X,X=0):Te=0);let Re,He,Ue,et,Ke,Je,st,At,kt;const Bt=w.isCompressedTexture?w.mipmaps[Te]:w.image;if(q!==null)Re=q.max.x-q.min.x,He=q.max.y-q.min.y,Ue=q.isBox3?q.max.z-q.min.z:1,et=q.min.x,Ke=q.min.y,Je=q.isBox3?q.min.z:0;else{const An=Math.pow(2,-X);Re=Math.floor(Bt.width*An),He=Math.floor(Bt.height*An),w.isDataArrayTexture?Ue=Bt.depth:w.isData3DTexture?Ue=Math.floor(Bt.depth*An):Ue=1,et=0,Ke=0,Je=0}re!==null?(st=re.x,At=re.y,kt=re.z):(st=0,At=0,kt=0);const bt=rt.convert(j.format),Ze=rt.convert(j.type);let Pt;j.isData3DTexture?(at.setTexture3D(j,0),Pt=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(at.setTexture2DArray(j,0),Pt=F.TEXTURE_2D_ARRAY):(at.setTexture2D(j,0),Pt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const vt=F.getParameter(F.UNPACK_ROW_LENGTH),Mn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),$i=F.getParameter(F.UNPACK_SKIP_PIXELS),fn=F.getParameter(F.UNPACK_SKIP_ROWS),Zi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Bt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Bt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,et),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ke),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Je);const It=w.isDataArrayTexture||w.isData3DTexture,Zt=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const An=Xe.get(w),en=Xe.get(j),ut=Xe.get(An.__renderTarget),rs=Xe.get(en.__renderTarget);ke.bindFramebuffer(F.READ_FRAMEBUFFER,ut.__webglFramebuffer),ke.bindFramebuffer(F.DRAW_FRAMEBUFFER,rs.__webglFramebuffer);for(let xi=0;xi<Ue;xi++)It&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xe.get(w).__webglTexture,X,Je+xi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xe.get(j).__webglTexture,Te,kt+xi)),F.blitFramebuffer(et,Ke,Re,He,st,At,Re,He,F.DEPTH_BUFFER_BIT,F.NEAREST);ke.bindFramebuffer(F.READ_FRAMEBUFFER,null),ke.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||Xe.has(w)){const An=Xe.get(w),en=Xe.get(j);ke.bindFramebuffer(F.READ_FRAMEBUFFER,eo),ke.bindFramebuffer(F.DRAW_FRAMEBUFFER,to);for(let ut=0;ut<Ue;ut++)It?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,An.__webglTexture,X,Je+ut):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,An.__webglTexture,X),Zt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,en.__webglTexture,Te,kt+ut):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,en.__webglTexture,Te),X!==0?F.blitFramebuffer(et,Ke,Re,He,st,At,Re,He,F.COLOR_BUFFER_BIT,F.NEAREST):Zt?F.copyTexSubImage3D(Pt,Te,st,At,kt+ut,et,Ke,Re,He):F.copyTexSubImage2D(Pt,Te,st,At,et,Ke,Re,He);ke.bindFramebuffer(F.READ_FRAMEBUFFER,null),ke.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Zt?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Pt,Te,st,At,kt,Re,He,Ue,bt,Ze,Bt.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(Pt,Te,st,At,kt,Re,He,Ue,bt,Bt.data):F.texSubImage3D(Pt,Te,st,At,kt,Re,He,Ue,bt,Ze,Bt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Te,st,At,Re,He,bt,Ze,Bt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Te,st,At,Bt.width,Bt.height,bt,Bt.data):F.texSubImage2D(F.TEXTURE_2D,Te,st,At,Re,He,bt,Ze,Bt);F.pixelStorei(F.UNPACK_ROW_LENGTH,vt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$i),F.pixelStorei(F.UNPACK_SKIP_ROWS,fn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zi),Te===0&&j.generateMipmaps&&F.generateMipmap(Pt),ke.unbindTexture()},this.initRenderTarget=function(w){Xe.get(w).__webglFramebuffer===void 0&&at.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?at.setTextureCube(w,0):w.isData3DTexture?at.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?at.setTexture2DArray(w,0):at.setTexture2D(w,0),ke.unbindTexture()},this.resetState=function(){J=0,C=0,A=null,ke.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}const Bm={type:"change"},of={type:"start"},y0={type:"end"},Al=new rf,Vm=new Er,FE=Math.cos(70*l_.DEG2RAD),rn=new Q,In=2*Math.PI,Ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},id=1e-6;class OE extends q_{constructor(e,n=null){super(e,n),this.state=Ut.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hs.ROTATE,MIDDLE:Hs.DOLLY,RIGHT:Hs.PAN},this.touches={ONE:Vs.ROTATE,TWO:Vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new Zr,this._lastTargetPosition=new Q,this._quat=new Zr().setFromUnitVectors(e.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mm,this._sphericalDelta=new mm,this._scale=1,this._panOffset=new Q,this._rotateStart=new ft,this._rotateEnd=new ft,this._rotateDelta=new ft,this._panStart=new ft,this._panEnd=new ft,this._panDelta=new ft,this._dollyStart=new ft,this._dollyEnd=new ft,this._dollyDelta=new ft,this._dollyDirection=new Q,this._mouse=new ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kE.bind(this),this._onPointerDown=zE.bind(this),this._onPointerUp=BE.bind(this),this._onContextMenu=YE.bind(this),this._onMouseWheel=GE.bind(this),this._onKeyDown=WE.bind(this),this._onTouchStart=jE.bind(this),this._onTouchMove=XE.bind(this),this._onMouseDown=VE.bind(this),this._onMouseMove=HE.bind(this),this._interceptControlDown=qE.bind(this),this._interceptControlUp=KE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bm),this.update(),this.state=Ut.NONE}update(e=null){const n=this.object.position;rn.copy(n).sub(this.target),rn.applyQuaternion(this._quat),this._spherical.setFromVector3(rn),this.autoRotate&&this.state===Ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=In:r>Math.PI&&(r-=In),o<-Math.PI?o+=In:o>Math.PI&&(o-=In),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(rn.setFromSpherical(this._spherical),rn.applyQuaternion(this._quatInverse),n.copy(this.target).add(rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=rn.length();u=this._clampDistance(f*this._scale);const m=f-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),l=!!m}else if(this.object.isOrthographicCamera){const f=new Q(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=m!==this.object.zoom;const p=new Q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(f),this.object.updateMatrixWorld(),u=rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Al.origin.copy(this.object.position),Al.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Al.direction))<FE?this.object.lookAt(this.target):(Vm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Al.intersectPlane(Vm,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>id||this._lastTargetPosition.distanceToSquared(this.target)>id?(this.dispatchEvent(Bm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?In/60*this.autoRotateSpeed*e:In/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){rn.setFromMatrixColumn(n,0),rn.multiplyScalar(-e),this._panOffset.add(rn)}_panUp(e,n){this.screenSpacePanning===!0?rn.setFromMatrixColumn(n,1):(rn.setFromMatrixColumn(n,0),rn.crossVectors(this.object.up,rn)),rn.multiplyScalar(e),this._panOffset.add(rn)}_pan(e,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;rn.copy(o).sub(this.target);let l=rn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*n*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=n-r.top,u=r.width,f=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(In*this._rotateDelta.x/n.clientHeight),this._rotateUp(In*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,o=e.pageY-n.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(In*this._rotateDelta.x/n.clientHeight),this._rotateUp(In*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,o=e.pageY-n.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+n.x)*.5,f=(e.pageY+n.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ft,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function zE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function kE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function BE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(y0),this.state=Ut.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function VE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Hs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ut.DOLLY;break;case Hs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ut.ROTATE}break;case Hs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ut.PAN}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(of)}function HE(s){switch(this.state){case Ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function GE(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ut.NONE||(s.preventDefault(),this.dispatchEvent(of),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(y0))}function WE(s){this.enabled!==!1&&this._handleKeyDown(s)}function jE(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ut.TOUCH_ROTATE;break;case Vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ut.TOUCH_PAN;break;default:this.state=Ut.NONE}break;case 2:switch(this.touches.TWO){case Vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ut.TOUCH_DOLLY_PAN;break;case Vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ut.TOUCH_DOLLY_ROTATE;break;default:this.state=Ut.NONE}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(of)}function XE(s){switch(this._trackPointer(s),this.state){case Ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ut.NONE}}function YE(s){this.enabled!==!1&&s.preventDefault()}function qE(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function KE(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const $E=({workVolume:s,pose:e})=>{const n=Ht.useRef(null),r=Ht.useRef(null),o=.01,l=s.x*o,u=s.y*o,f=s.z*o,m=(p,x,v)=>Math.min(Math.max(p,x),v);return Ht.useEffect(()=>{const p=n.current;if(!p)return;const x=new N_;x.background=new St("#020617");const v=p.clientWidth||400,_=p.clientHeight||300,S=new ei(40,v/_,.1,1e3),M=Math.sqrt(l*l+u*u+f*f);S.position.set(M,M,M),S.lookAt(0,0,0);const b=new IE({antialias:!0});b.setSize(v,_),b.setPixelRatio(window.devicePixelRatio||1),p.appendChild(b.domElement);const y=new j_(16777215,.4);x.add(y);const g=new W_(16777215,.8);g.position.set(2,4,3),x.add(g);const N=new OE(S,b.domElement);N.enableDamping=!0,N.dampingFactor=.1,N.target.set(0,0,0);const P=new qa(l*1.1,u*1.1),U=new fm({color:"#18181b",metalness:.2,roughness:.8,side:Mi}),G=new pi(P,U);G.rotation.x=-Math.PI/2,G.position.set(0,-f/2,0),x.add(G);const L=new Qr(l,f,u),B=new sf({color:"#3f3f46",wireframe:!0,transparent:!0,opacity:.6}),J=new pi(L,B);x.add(J);const C=new Y_(Math.max(l,u,f));x.add(C);const A=Math.max(l,u,f)*.05,H=new Qr(A,A,A),Z=new fm({color:"#22c55e",metalness:.6,roughness:.3}),ie=new pi(H,Z);r.current=ie,x.add(ie);const fe=m(e.x,0,s.x)*o-l/2,ce=m(e.y,0,s.y)*o-u/2,ue=m(e.z,0,s.z)*o-f/2;ie.position.set(fe,ue,ce);const de=()=>{if(!p)return;const ee=p.clientWidth||400,I=p.clientHeight||300;S.aspect=ee/I,S.updateProjectionMatrix(),b.setSize(ee,I)};window.addEventListener("resize",de);let V;const ae=()=>{V=requestAnimationFrame(ae),N.update(),b.render(x,S)};return ae(),()=>{cancelAnimationFrame(V),window.removeEventListener("resize",de),N.dispose(),b.dispose(),P.dispose(),U.dispose(),L.dispose(),B.dispose(),H.dispose(),Z.dispose(),x.clear(),b.domElement&&b.domElement.parentNode&&b.domElement.parentNode.removeChild(b.domElement)}},[]),Ht.useEffect(()=>{if(!r.current)return;const p=m(e.x,0,s.x)*o-l/2,x=m(e.y,0,s.y)*o-u/2,v=m(e.z,0,s.z)*o-f/2;r.current.position.set(p,v,x)},[e,s,l,u,f]),O.jsxs("div",{className:"w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4",children:[O.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[O.jsxs("div",{children:[O.jsx("h3",{className:"text-sm font-semibold text-zinc-100",children:"Digital Twin (3D)"}),O.jsx("p",{className:"text-[11px] text-zinc-400",children:"Live toolhead position inside the machine work volume."})]}),O.jsxs("div",{className:"text-[11px] text-zinc-400",children:[O.jsxs("span",{className:"font-mono",children:["X: ",e.x.toFixed(2)," · Y: ",e.y.toFixed(2)," · Z:"," ",e.z.toFixed(2)]})," ",O.jsx("span",{className:"text-zinc-500",children:"(units)"})]})]}),O.jsx("div",{ref:n,className:"h-72 w-full overflow-hidden rounded-xl bg-zinc-900"})]})};function ZE(){const{sendMessage:s,lastMessage:e,isConnected:n,isPiConnected:r}=ug("/ws/controller"),[o,l]=Ht.useState({x:0,y:0,z:0});return Ht.useEffect(()=>{e&&e.type==="status"&&e.axes&&l({x:e.axes.X?.units??0,y:e.axes.Y?.units??0,z:e.axes.Z?.units??0})},[e]),O.jsx("div",{className:"min-h-screen bg-zinc-950 text-zinc-50",children:O.jsxs("div",{className:"mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8",children:[O.jsx("header",{className:"mb-6 border-b border-zinc-800 pb-4",children:O.jsx("div",{className:"flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center",children:O.jsxs("div",{children:[O.jsx("h1",{className:"text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl",children:"🤖 Raspberry Pi Cartesian Controller"}),O.jsx("p",{className:"mt-1 max-w-xl text-sm text-zinc-400",children:"Control a 3-axis CNC / pick-and-place and see its live position with a 3D digital twin."})]})})}),O.jsxs("main",{className:"flex-1 space-y-6 pb-6",children:[O.jsx(gg,{isConnected:n,isPiConnected:r,lastMessage:e}),O.jsx($E,{workVolume:{x:300,y:200,z:150},pose:o}),O.jsx(xg,{onSendCommand:s,isPiConnected:r,lastMessage:e})]})]})})}cg.createRoot(document.getElementById("root")).render(O.jsx(ng.StrictMode,{children:O.jsx(ZE,{})}));
