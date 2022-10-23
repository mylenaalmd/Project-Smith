import { Request, Response } from 'express';
import OrderService from '../service/orders.service';

export default class OrderController {
  service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getOrders = async (_req: Request, res: Response) => {
    const allOrders = await this.service.getAllOrder();
    return res.status(200).json(allOrders);
  };

  public addOrder = async (req: Request, res: Response) => {
    const { id } = req.cookies;
    const { productsIds } = req.body;
    const newOrder = await this.service.addOrder(productsIds, id);
    return res.status(201).json(newOrder);
  };
}
