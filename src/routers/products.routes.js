import {Router } from "express";
import { getAllProducts, getProduct} from '../controllers/products.controller.js';
import { addCart } from "../controllers/cart.controller.js";
const router = Router();

router.get("/products",getAllProducts);
router.get("/products/:id",getProduct);

router.post('/cart',addCart);

export default router;