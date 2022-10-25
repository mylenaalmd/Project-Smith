import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import IOrder from '../interfaces/orders.interface';
import ProductModel from '../models/products.model';

export default class ProductService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrder(): Promise<IOrder[]> {
    const insertOrder = await this.model.getAllOrder();
    return insertOrder;
  }

  public async addOrder(productsIds: number[], userId: number): Promise<IOrder> {
    const product = new ProductModel(connection);
    const insertProduct = await this.model.addOrder(userId);

    Promise.all(
      productsIds.map((productId) => product.updateProductByOrder(insertProduct, productId)),
    );
    return { userId, productsIds };
  }
}
