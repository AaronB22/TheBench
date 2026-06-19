import { findProductById } from "../services/products.service.js";

export const addCart=async(req,res)=>{
    try{
       
        const id=req.body.productId;
        const product = await findProductById(id);
  
        if (!req.session.cart) req.session.cart = [];
        req.session.cart.push(product);
        res.status(201).json({ message: "product added" });

    }
    catch(e){
        res.status(404).json({
            message:"product not found"
        })
        
    }
}

// eslint-disable-next-line consistent-return
export const deleteCart = (req, res) => {
    try {
        const id = Number(req.params.id);
        req.session.cart = req.session.cart.filter(el => el.id !== id);
        return res.status(200).json(req.session.cart);
    }
    catch (e) {
        res.status(500).json({
            message: "server failure"
        })
    }
}

export const testCart=async(req,res)=>{
    for(let i=1; i<6;i++){
        const product = await findProductById(i);

        if (!req.session.cart) req.session.cart = [];
        req.session.cart.push(product);

    }
    res.status(200).json(req.session.cart);
}