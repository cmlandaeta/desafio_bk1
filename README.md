# Chistes API

Proyecto Express + TypeScript que expone endpoints para chistes (consumo de APIs externas y persistencia en PostgreSQL) y endpoints matemáticos simples.

## Requisitos
- Node >= 18
- PostgreSQL
- npm

## Instalación
1. Clona el repo:
   ```bash
   git clone <repo-url> chistes-api
   cd chistes-api

2. Instala dependencias:
```bash
npm install

3. Crea la BD y ejecuta scripts SQL:
createdb chistesdb
psql -d chistesdb -f sql/schema.sql
psql -d chistesdb -f sql/seed.sql

4. Scripts:
```bash
npm run dev — arranca server en modo desarrollo (ts-node-dev)

npm run build — transpila TypeScript a JS

npm start — arranca la app (usar después de build)

npm test — corre tests unitarios (Jest)

5. Endpoints:

Base: http://localhost:3000/api

6. Chistes:

GET /api/chistes — chiste aleatorio (elige Chuck o Dad)

GET /api/chistes/Chuck — chiste de Chuck

GET /api/chistes/Dad — chiste de Dad

POST /api/chistes — crea chiste (body: { texto, usuario, tematica })

PUT /api/chistes/:number — actualiza chiste por id (body: { texto })

DELETE /api/chistes/:number — elimina chiste por id

GET /api/chistes/emparejados — 5 peticiones a cada API, empareja 1:1 y devuelve array combinado

6. Matemáticas

GET /api/math/lcm?numbers=2,3,4 — devuelve MCM (LCM)

GET /api/math/inc?number=5 — devuelve 6

7. Test:
```bash
npm test

## Ejemplos de uso (curl)

Obtener chiste aleatorio:
```bash
curl http://localhost:3000/api/chistes

Obtener chiste de Chuck:
curl http://localhost:3000/api/chistes/Chuck

Crear chiste:

curl -X POST http://localhost:3000/api/chistes -H "Content-Type: application/json" \
  -d '{"texto":"Mi chiste nuevo","usuario":"Carlos","tematica":"humor negro"}'


Emparajados:

curl http://localhost:3000/api/chistes/emparejados

LCM:

curl "http://localhost:3000/api/math/lcm?numbers=3,4,6"
