import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

router.post('/create-product', productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/product/:id', productController.getSingleProduct);
router.delete('/product/:id', productController.deleteSingleProduct);
router.patch('/product/:id', productController.updateSingleProduct);

export const productRouter = router;
