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

router.get('/register', (req, res) => {
    res.render('register.ejs');
});

router.get('/login', (req, res) => {
    res.render('login.ejs')
})

router.get("/cart",(req,res)=>{
    res.render('cart.ejs')
})

export default router;