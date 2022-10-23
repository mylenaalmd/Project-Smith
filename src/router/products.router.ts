import { Router } from 'express';
import ProductController from '../controller/products.controller';

const router = Router();

const controller = new ProductController();

router.get('/', controller.getAll);
router.post('/', controller.insertProdutc);

export default router;
