import { Router } from "express";
import { isLoggedIn } from "../controllers/user.controller.js";

const router = Router();

router.get("/", (req, res) => {
    res.render("home");
});
//go to product page
router.get('/products',isLoggedIn, (req,res)=>{
    res.render('product.ejs');
});

router.get('/products/:id', isLoggedIn, (req,res)=>{
    res.render('item.ejs');
});

router.get('/register', (req, res) => {
    res.render('register.ejs');
});

router.get('/login', (req, res) => {
    res.render('login.ejs')
})
router.get('/confirmation',isLoggedIn, (req, res) => {
    res.render('confirm.ejs')
})

router.get("/cart", isLoggedIn, (req,res)=>{
    res.render('cart.ejs')
})

//route just for testing
// router.get("/cart", (req, res) => {
//     res.render('cart.ejs')
// })

export default router;