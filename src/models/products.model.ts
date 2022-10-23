import { Pool, ResultSetHeader } from "mysql2/promise";
import IProduct from "../interfaces/products.interface";

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<IProduct[]> {
    const [products] = await this.connection.execute(
      "SELECT * FROM Trybesmith.Products"
    );
    return products as IProduct[];
  }

  async insertProdutc(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(
      "INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?);",
      [name, amount]
    );
    return { id, name, amount };
  }

  // public async updateProducts = (orderId: number, productId: number): Promise<void> {
  //   await this.connection.execute<ResultSetHeader>(
  //     'UPDATE Trybesmith.Products SET orderId=? WHERE id=?',
  //     [orderId, productId],
  //   )
  // }
}
