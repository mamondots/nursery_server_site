import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  city: {
    type: String,
  },
  email: {
    type: String,
  },
  deliveryAddress: {
    type: String,
  },
  note: {
    type: String,
  },
  items: {
    type: Number,
  },
  totalPrice: {
    type: Number,
  },
});

export const Order = model<TOrder>('Order', orderSchema);
