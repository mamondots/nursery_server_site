import express, { Application, Request, Response } from 'express';
const app: Application = express();

import cors from 'cors';
import { productRouter } from './app/product/product.route';
import { orderRouter } from './app/order/order.route';

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);

app.use('/api', productRouter);
app.use('/api', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Nursiry server site is running');
});

export default app;
