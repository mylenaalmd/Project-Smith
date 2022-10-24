import { Router } from 'express';
import OrderController from '../controller/orders.controller';
import auth from '../middlewares/auth';
import ValidateProductsIds from '../middlewares/validateProductsIds';

const router = Router();

const controller = new OrderController();

router.post('/', auth, ValidateProductsIds, controller.addOrder);
router.get('/', controller.getOrders);

export default router;