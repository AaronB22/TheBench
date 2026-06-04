import { findAllProducts } from "../services/bench.service.js";


export const getAllProducts=async(req,res)=>{
    try{
        const results = await findAllProducts();
        res.status(200).json(results);
    }
    catch{
        res.status(500).json({message:'Server failed :('})
    }
}

export const getProduct=(req,res)=>{
    try{
        const id= req.params.id;
    }
    catch{
        res.status(500).json({ message: 'Server failed :(' })
    }
}