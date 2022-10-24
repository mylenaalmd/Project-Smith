import { Router } from 'express';
import UsersController from '../controller/users.controller';
import ValidateClasse from '../middlewares/validateClasse';
import ValidateLevel from '../middlewares/validateLevel';
import ValidatePassword from '../middlewares/validatePassword';
import ValidateUserName from '../middlewares/validateUserName';

const router = Router();

const controller = new UsersController();

router.post(
  '/', 
  ValidateUserName, 
  ValidatePassword,
  ValidateClasse, 
  ValidateLevel, 
  controller.addUser,
);

export default router;
