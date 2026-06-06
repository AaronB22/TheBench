import { findAllProducts, findProductById} from "../services/bench.service.js";


export const getAllProducts=async(req,res)=>{
    try{
        let results = await findAllProducts();
        results= filterProducts(results, req.query)
        res.status(200).json(results);
    }
    catch{
        res.status(500).json({message:'Server failed to get Products'})
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

//helper function for filter, does not need to be exported
const filterProducts=(data, query)=>{
    const {minPrice,maxPrice}= query;
    if(minPrice){
        data= data.filter(el=>el.price>Number(minPrice))
    }
    if(maxPrice){
        data=data.filter(el=>el.price<Number(maxPrice))
    }

    return data;
}