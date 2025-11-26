import { Request, Response } from 'express';
import * as mathService from '../services/math.service';

export function lcmHandler(req: Request, res: Response) {
  const raw = req.query.numbers;
  if (!raw) return res.status(400).json({ error: 'numbers is required' });
  // aceptar "1,2,3" o ?numbers=1&numbers=2...
  let nums: number[] = [];
  if (Array.isArray(raw)) {
    nums = raw.map(Number);
  } else {
    nums = String(raw).split(',').map(Number);
  }
  if (nums.some(isNaN)) return res.status(400).json({ error: 'numbers must be integers' });
  const result = mathService.lcmList(nums);
  res.json({ lcm: result });
}

export function incHandler(req: Request, res: Response) {
  const raw = req.query.number;
  if (!raw) return res.status(400).json({ error: 'number is required' });
  const num = Number(raw);
  if (isNaN(num)) return res.status(400).json({ error: 'number must be integer' });
  res.json({ result: mathService.increment(num) });
}
