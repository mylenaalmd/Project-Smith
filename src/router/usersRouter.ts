import { Router } from 'express';
import UsersController from '../controller/users.controller';

const router = Router();

const controller = new UsersController();

router.post('/', controller.addUser);

export default router;
