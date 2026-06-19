import {Router } from "express";
import { getAllProducts, getProduct} from '../controllers/products.controller.js';
import { addCart, testCart, deleteCart, clearCart, } from "../controllers/cart.controller.js";
import { isLoggedIn } from "../controllers/user.controller.js";
const router = Router();
console.log("router")
router.get("/products", getAllProducts);
router.get("/products/:id", getProduct);

router.post('/cart', addCart);
router.get('/cart', (req,res)=>{
    res.status(200).json(req.session.cart);
})

router.delete('/cart/:id',deleteCart)
router.delete('/cart/', clearCart)

router.get('/cart/test',testCart)

export default router;