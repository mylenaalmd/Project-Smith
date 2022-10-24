import { Router } from 'express';
import ProductController from '../controller/products.controller';
import ValidateAmountProduct from '../middlewares/validateAmountProduct';
import ValidateNameProduct from '../middlewares/validateNameProdct';

const router = Router();

const controller = new ProductController();

router.get('/', controller.getAll);
router.post('/', ValidateNameProduct, ValidateAmountProduct, controller.insertProdutc);

export default router;
