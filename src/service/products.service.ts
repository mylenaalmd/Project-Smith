import connection from '../models/connection';
import ProductModel from '../models/products.model';
import IProduct from '../interfaces/products.interface';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }

  async insertProdutc(newProduct: IProduct): Promise<IProduct> {
    const products = await this.model.insertProdutc(newProduct);
    return products;
  }
}
