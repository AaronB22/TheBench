import { Router } from "express";
import { isLoggedIn } from "../controllers/user.controller.js";

const router = Router();

router.get("/", (req, res) => {
    res.render("home");
});
//go to product page
router.get('/products', isLoggedIn, (req,res)=>{
    res.render('product.ejs');
});

router.get('/products/:id', isLoggedIn, (req,res)=>{
    res.render('item.ejs');
});

router.get('/register', (req, res) => {
    const errorMessage = req.query.error;
    res.render('register.ejs', {
        errorMessage
    });
});

router.get('/login', (req, res) => {
    const errorMessage = req.query.error;
    res.render('login.ejs', {
        errorMessage
    });
})

router.get("/cart", isLoggedIn, (req,res)=>{
    res.render('cart.ejs')
})

export default router;