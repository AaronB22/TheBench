import {Router } from "express";
import { getAllProducts, getProduct} from '../controllers/products.controller.js';
import { addCart, deleteCart, testCart } from "../controllers/cart.controller.js";
const router = Router();

router.get("/products",getAllProducts);
router.get("/products/:id",getProduct);

router.post('/cart',addCart);
router.get('/cart',(req,res)=>{
    res.status(200).json(req.session.cart);
})

router.delete('/cart',deleteCart)

router.get('/cart/test',testCart)

export default router;