-- schema.sql
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE tematicas (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE chistes (
  id SERIAL PRIMARY KEY,
  texto TEXT NOT NULL,
  usuario VARCHAR(100) NOT NULL, -- simplificado: guardamos nombre del usuario
  tematica VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- índices
CREATE INDEX idx_chistes_usuario ON chistes(usuario);
CREATE INDEX idx_chistes_tematica ON chistes(tematica);
