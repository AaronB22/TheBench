import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("home");
});
//go to product page
router.get('/products',(req,res)=>{
    res.render('product.ejs');
});

router.get('/products/:id',(req,res)=>{
    res.render('item.ejs');
});

export default router;