import { Request, Response } from 'express';
import UserService from '../service/users.service';

export default class UsersController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public addUser = async (req: Request, res: Response) => {
    const newUser = req.body;
    const insertedUser = await this.service.insertUser(newUser);
    return res.status(201).json({ token: insertedUser });
  };
}
