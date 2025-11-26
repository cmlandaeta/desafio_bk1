-- Consulta 1: Saca todos los chistes creados por el usuario "Manolito"
SELECT * FROM chistes WHERE usuario = 'Manolito';

-- Consulta 2: Saca todos los chistes de la temática "humor negro"
SELECT * FROM chistes WHERE tematica = 'humor negro';

-- Consulta 3: Saca todos los chistes de la temática "humor negro" creados por "Manolito"
SELECT * FROM chistes WHERE tematica = 'humor negro' AND usuario = 'Manolito';
