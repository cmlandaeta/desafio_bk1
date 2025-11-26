import db from '../db';
import { getChuckJoke, getDadJoke } from './externalJokes.service';
import logger from '../utils/logger';

export interface Joke {
  id?: number;
  texto: string;
  usuario: string;
  tematica: string;
}

export async function createJoke(joke: Joke) {
  const { texto, usuario, tematica } = joke;
  const res = await db.query(
    `INSERT INTO chistes (texto, usuario, tematica) VALUES ($1,$2,$3) RETURNING *`,
    [texto, usuario, tematica]
  );
  return res.rows[0];
}

export async function updateJoke(id: number, texto: string) {
  const res = await db.query(`UPDATE chistes SET texto = $1, updated_at = NOW() WHERE id = $2 RETURNING *`, [texto, id]);
  return res.rows[0];
}

export async function deleteJoke(id: number) {
  await db.query(`DELETE FROM chistes WHERE id = $1`, [id]);
  return { deleted: true };
}

export async function getRandomExternal(source?: string): Promise<string> {
  if (!source) {
    // fallback: choose randomly between two
    const r = Math.random() < 0.5;
    return r ? getChuckJoke() : getDadJoke();
  }

  if (source.toLowerCase() === 'chuck') return getChuckJoke();
  if (source.toLowerCase() === 'dad') return getDadJoke();

  throw new Error('Source must be either "Chuck" or "Dad"');
}
