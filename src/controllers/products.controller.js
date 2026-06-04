import { findAllProducts, findProductById } from "../services/bench.service.js";


export const getAllProducts=async(req,res)=>{
    try{
        const results = await findAllProducts();
        res.status(200).json(results);
    }
    catch{
        res.status(500).json({message:'Server failed :('})
    }
}

export const getProduct=async(req,res)=>{
    console.log(req.params.id);
    try{
        const id= req.params.id;
        const result= await findProductById(id);
        res.status(201).json(result);
    }
    catch{
        res.status(500).json({ message: 'Server failed :(' })
    }
}