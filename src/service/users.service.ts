import connection from '../models/connection';
import UserModel from '../models/users.model';
import IUser from '../interfaces/users.interface';
import generateToken from '../utils/generateToken';

export default class ProductService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async insertUser(newUser: IUser): Promise<string> {
    await this.model.registerUser(newUser);
    const token = generateToken({ id: newUser.id, username: newUser.username });
    return token;
  }
}
