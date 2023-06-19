import { Router } from 'express';
import { TrainController } from '../controllers/trainController.js';

export const router = new Router();

router.post('/trains', TrainController.createNewOne);
router.get('/trains', TrainController.getAll);
router.get('/trains/:id', TrainController.getOne);
router.delete('/trains/:id', TrainController.remove);
router.put('/trains', TrainController.update);
