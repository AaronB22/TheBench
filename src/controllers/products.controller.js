import { findAllProducts, findProductById} from "../services/bench.service.js";


// eslint-disable-next-line consistent-return
export const getAllProducts=async(req,res)=>{
    try{
        const results = await findAllProducts(req.query);
     
        return res.status(200).json(results);
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'Server failed to get Products'})
    }
}

export const getProduct=async(req,res)=>{

    try{
        const id= req.params.id;
        const result= await findProductById(id);
        res.status(201).json(result);
    }
    catch(err){
        console.log(err)
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