import connection from '../models/connection';
import UserModel from '../models/users.model';
import generateToken from '../utils/generateToken';

export default class LoginService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async addLogin(username: string, password: string): Promise<string | boolean> {
    const user = await this.model.getAuthUser(username, password);

    if (!user) return false;
    
    return generateToken({ id: user.id, username: user.username });
  }
}