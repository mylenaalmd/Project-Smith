import { Router } from 'express';
import OrderController from '../controller/orders.controller';

const router = Router();

const controller = new OrderController();

router.post('/', controller.addOrder);
router.get('/', controller.getOrders);

export default router;