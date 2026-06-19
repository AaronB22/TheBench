import {Router } from "express";
import { getAllProducts, getProduct} from '../controllers/products.controller.js';
import { addCart, testCart } from "../controllers/cart.controller.js";
import { isLoggedIn } from "../controllers/user.controller.js";
const router = Router();

router.get("/", getAllProducts);
router.get("/products/:id", getProduct);

router.post('/cart', isLoggedIn, addCart);
router.get('/cart', isLoggedIn, (req,res)=>{
    res.status(200).json(req.session.cart);
})

router.get('/cart/test',testCart)

export default router;