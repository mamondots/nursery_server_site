import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';
const productSchema = new Schema<TProduct>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ['Hanging', 'Indoor', 'Low', 'Money', 'Flowering'],
      required: true,
    },
    stock: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    availability: {
      type: String,
      enum: ['Instock', 'Outofstock'],
      required: true,
    },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Product = model<TProduct>('product', productSchema);
