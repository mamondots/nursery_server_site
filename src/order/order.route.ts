import express from 'express';
import { orderController } from './order.contorller';

const router = express.Router();

router.post('/create-order', orderController.createOrder);
router.get('/orders', orderController.getAllOrders);

export const orderRouter = router;
