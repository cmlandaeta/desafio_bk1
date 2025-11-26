import { Request, Response } from 'express';
import * as chistesService from '../services/chistes.service';
import { getChuckJoke, getDadJoke } from '../services/externalJokes.service';
import logger from '../utils/logger';
import { pairJokes } from '../services/pair.service';
import axios from 'axios';

export async function getRandom(req: Request, res: Response) {
  try {
    const source = req.params.source; // optional
    const joke = await chistesService.getRandomExternal(source);
    res.json({ joke });
  } catch (err: any) {
    res.status(400).json({ error: err.message || 'Error' });
  }
}

export async function create(req: Request, res: Response) {
  try {
    const { texto, usuario, tematica } = req.body;
    if (!texto) return res.status(400).json({ error: 'texto es requerido' });
    const result = await chistesService.createJoke({ texto, usuario: usuario || 'anon', tematica: tematica || 'sin-tematica' });
    res.status(201).json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function update(req: Request, res: Response) {
  try {
    const id = Number(req.params.number);
    const { texto } = req.body;
    if (!texto) return res.status(400).json({ error: 'texto es requerido' });
    const updated = await chistesService.updateJoke(id, texto);
    res.json(updated);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const id = Number(req.params.number);
    await chistesService.deleteJoke(id);
    res.json({ deleted: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * Emparejados: 5 peticiones a cada API en paralelo, combinar 1:1
 */
export async function emparejados(req: Request, res: Response) {
  try {
    // lanzar 5 peticiones a cada API en paralelo
    const chuckPromises = Array.from({ length: 5 }).map(() => getChuckJoke().catch(e => { logger.error(e); return null; }));
    const dadPromises = Array.from({ length: 5 }).map(() => getDadJoke().catch(e => { logger.error(e); return null; }));

    const chucks = (await Promise.all(chuckPromises)).filter(Boolean) as string[];
    const dads = (await Promise.all(dadPromises)).filter(Boolean) as string[];

    const paired = pairJokes(chucks, dads);
    res.json(paired);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
