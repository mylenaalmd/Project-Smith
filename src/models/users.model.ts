import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IUser from '../interfaces/users.interface';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAuthUser(
    username: string,
    password: string,
  ): Promise<IUser> {
    const [[user]] = await this.connection.execute<RowDataPacket[]>(
      `SELECT 
      * 
      FROM 
       Trybesmith.Users
      WHERE 
       username = ? AND password = ?;`,
      [username, password],
    );
    return user as IUser;
  }

  public async registerUser(newUser: IUser) {
    const { username, classe, level, password } = newUser;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
      [username, classe, level, password],
    );
  }
}
