import {Router } from "express";
import { getAllProducts, getProduct } from '../controllers/products.controller.js';
const router = Router();

router.get("/products",getAllProducts);
router.get("/product/:id",getProduct);

export default router;