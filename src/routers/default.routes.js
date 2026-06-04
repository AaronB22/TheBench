import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("home");
});
//get all products
router.get('/products');

router.get('/product:id');
export default router;