import {Router } from "express";
import { getAllProducts, getProduct, getProductByPriceRange } from '../controllers/products.controller.js';
const router = Router();

router.get("/products",getAllProducts);
router.get("/product/:id",getProduct);
router.get("/products/:minPrice/:maxPrice", getProductByPriceRange)

export default router;