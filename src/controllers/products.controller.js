import { findAllProducts, findProductById, findProductByPrice } from "../services/bench.service.js";


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

    try{
        const id= req.params.id;
        const result= await findProductById(id);
        res.status(201).json(result);
    }
    catch{
        res.status(500).json({ message: 'Server failed :(' })
    }
}

export const getProductByPriceRange=async(req,res)=>{
    
    try{
        const minPrice= req.params.minPrice;
        const maxPrice = req.params.maxPrice;
        
        const result = await findProductByPrice(minPrice,maxPrice);
        res.status(200).json(result);
    }
    catch{
        res.status(500).json({ message: 'Server failed :(' })
    }
}