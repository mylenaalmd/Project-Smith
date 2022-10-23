import { Request, Response } from "express";
import ProductService from "../service/products.service";

export default class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public insertProdutc = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await this.service.insertProdutc(product);
    return res.status(201).json(newProduct);
  };

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();
    return res.status(200).json(products);
  };
}
