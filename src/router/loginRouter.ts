import { Router } from 'express';
import LoginController from '../controller/login.controller';
import ValidatePassword from '../middlewares/validatePassword';
import ValidateUserName from '../middlewares/validateUserName';

const router = Router();

const controller = new LoginController();

router.post('/', ValidateUserName, ValidatePassword, controller.authUser);

export default router;
