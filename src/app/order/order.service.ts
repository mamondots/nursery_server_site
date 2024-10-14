import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderInfoDB = async (order: TOrder) => {
  const result = await Order.create(order);
  return result;
};

const getAllOrderInfoDB = async () => {
  const result = await Order.find();
  return result;
};

export const orderService = {
  createOrderInfoDB,
  getAllOrderInfoDB,
};
