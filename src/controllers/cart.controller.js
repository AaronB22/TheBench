import { findProductById } from "../services/products.service.js";

export const addCart=async(req,res)=>{
    try{
       
        const id=req.body.productId;
        const product = await findProductById(id);
        console.log(product);
        if (!req.session.cart) req.session.cart = [];
        req.session.cart.push(product);
        res.status(200).json({ message: "product added" });

    }
    catch(e){
        res.status(404).json({
            message:"product not found"
        })
        
    }
}