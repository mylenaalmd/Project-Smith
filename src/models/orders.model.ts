import { Pool, ResultSetHeader } from 'mysql2/promise';
import IOrder from '../interfaces/orders.interface';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrder(): Promise<IOrder[]> {
    const [orders] = await this.connection.execute(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM
      Trybesmith.Orders AS o
      JOIN
      Trybesmith.Products AS p ON o.id = p.orderId
      GROUP BY 
      o.id;`,
    );

    return orders as IOrder[];
  }

  public async addOrder(userId: number): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?);',
      [userId],
    );
    return insertId;
  }
}
