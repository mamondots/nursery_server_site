import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';
const productSchema = new Schema<TProduct>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    availability: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      required: true,
    },
    color: { type: String, required: true },
    size: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Product = model<TProduct>('product', productSchema);
