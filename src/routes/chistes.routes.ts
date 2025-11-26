import { Router } from 'express';
import * as controller from '../controllers/chistes.controller';

const router = Router();

router.get('/emparejados', controller.emparejados);
router.get('/:source?', controller.getRandom); // /chistes or /chistes/Chuck or /chistes/Dad
router.post('/', controller.create);
router.put('/:number', controller.update);
router.delete('/:number', controller.remove);

export default router;
