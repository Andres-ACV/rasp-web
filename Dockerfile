# ---- Build frontend ----
FROM node:20-alpine AS frontend-builder
WORKDIR /app

COPY frontend/package*.json ./frontend/
RUN npm ci --prefix ./frontend
COPY frontend ./frontend
RUN npm run build --prefix ./frontend

# ---- Runtime ----
FROM python:3.12-slim AS runtime

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY backend/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ /app/
COPY --from=frontend-builder /app/backend/static /app/static

ENV PORT=8080
EXPOSE 8090

CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8080}"]