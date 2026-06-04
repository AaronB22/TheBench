import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("home");
});
//go to product page
router.get('/products',(req,res)=>{
    res.render('product.ejs');
});

export default router;