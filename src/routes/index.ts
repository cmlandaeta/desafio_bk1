import { Router } from 'express';
import chistes from './chistes.routes';
import math from './math.routes';

const router = Router();

router.use('/chistes', chistes);
router.use('/math', math);

export default router;
