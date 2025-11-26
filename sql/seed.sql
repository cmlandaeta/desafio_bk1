-- seed.sql
-- Usuarios
INSERT INTO usuarios (nombre) VALUES ('Manolito'), ('Pepe'), ('Isabel'), ('Pedro');

-- Tematicas
INSERT INTO tematicas (nombre) VALUES ('humor negro'), ('humor amarillo'), ('chistes verdes');

-- Chistes: 3 por tematica por usuario (12 chistes * 3 tematicas = 36)
-- Para acortar, se ponen ejemplos simples:
INSERT INTO chistes (texto, usuario, tematica) VALUES
-- Manolito
('Chiste MN 1 - Manolito', 'Manolito', 'humor negro'),
('Chiste MN 2 - Manolito', 'Manolito', 'humor negro'),
('Chiste MN 3 - Manolito', 'Manolito', 'humor negro'),

('Chiste MA 1 - Manolito', 'Manolito', 'humor amarillo'),
('Chiste MA 2 - Manolito', 'Manolito', 'humor amarillo'),
('Chiste MA 3 - Manolito', 'Manolito', 'humor amarillo'),

('Chiste MV 1 - Manolito', 'Manolito', 'chistes verdes'),
('Chiste MV 2 - Manolito', 'Manolito', 'chistes verdes'),
('Chiste MV 3 - Manolito', 'Manolito', 'chistes verdes'),

-- Pepe
('Chiste MN 1 - Pepe', 'Pepe', 'humor negro'),
('Chiste MN 2 - Pepe', 'Pepe', 'humor negro'),
('Chiste MN 3 - Pepe', 'Pepe', 'humor negro'),

('Chiste MA 1 - Pepe', 'Pepe', 'humor amarillo'),
('Chiste MA 2 - Pepe', 'Pepe', 'humor amarillo'),
('Chiste MA 3 - Pepe', 'Pepe', 'humor amarillo'),

('Chiste MV 1 - Pepe', 'Pepe', 'chistes verdes'),
('Chiste MV 2 - Pepe', 'Pepe', 'chistes verdes'),
('Chiste MV 3 - Pepe', 'Pepe', 'chistes verdes'),

-- Isabel
('Chiste MN 1 - Isabel', 'Isabel', 'humor negro'),
('Chiste MN 2 - Isabel', 'Isabel', 'humor negro'),
('Chiste MN 3 - Isabel', 'Isabel', 'humor negro'),

('Chiste MA 1 - Isabel', 'Isabel', 'humor amarillo'),
('Chiste MA 2 - Isabel', 'Isabel', 'humor amarillo'),
('Chiste MA 3 - Isabel', 'Isabel', 'humor amarillo'),

('Chiste MV 1 - Isabel', 'Isabel', 'chistes verdes'),
('Chiste MV 2 - Isabel', 'Isabel', 'chistes verdes'),
('Chiste MV 3 - Isabel', 'Isabel', 'chistes verdes'),

-- Pedro
('Chiste MN 1 - Pedro', 'Pedro', 'humor negro'),
('Chiste MN 2 - Pedro', 'Pedro', 'humor negro'),
('Chiste MN 3 - Pedro', 'Pedro', 'humor negro'),

('Chiste MA 1 - Pedro', 'Pedro', 'humor amarillo'),
('Chiste MA 2 - Pedro', 'Pedro', 'humor amarillo'),
('Chiste MA 3 - Pedro', 'Pedro', 'humor amarillo'),

('Chiste MV 1 - Pedro', 'Pedro', 'chistes verdes'),
('Chiste MV 2 - Pedro', 'Pedro', 'chistes verdes'),
('Chiste MV 3 - Pedro', 'Pedro', 'chistes verdes');
