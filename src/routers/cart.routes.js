import { Router } from "express";
import { addCart, testCart, deleteCart, clearCart, } from "../controllers/cart.controller.js";

const router = Router();

router.post('/', addCart);
router.get('/', (req, res) => {
    res.status(200).json(req.session.cart || []);
})

router.delete('/:id',deleteCart)
router.delete('/', clearCart)

router.get('/test',testCart)

export default router;