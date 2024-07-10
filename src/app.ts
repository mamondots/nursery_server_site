import express, { Application, Request, Response } from 'express';
const app: Application = express();

import cors from 'cors';
import { productRouter } from './app/product/product.route';

app.use(express.json());
app.use(cors());

app.use('/api', productRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Nursiry server site is running');
});

export default app;
