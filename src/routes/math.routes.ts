import { Router } from 'express';
import * as controller from '../controllers/math.controller';

const router = Router();

router.get('/lcm', controller.lcmHandler);      // /math/lcm?numbers=1,2,3
router.get('/inc', controller.incHandler);      // /math/inc?number=5

export default router;
