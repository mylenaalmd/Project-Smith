import { Request, Response } from 'express';
import LoginService from '../service/login.service';

export default class LoginController {
  service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public authUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const token = await this.service.addLogin(username, password);

    if (!token) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    return res.status(200).json({ token });
  };
}
