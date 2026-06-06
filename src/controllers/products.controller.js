import { findAllProducts, findProductById} from "../services/products.service.js";


// eslint-disable-next-line consistent-return
export const getAllProducts=async(req,res)=>{
    try{
        let results = await findAllProducts();
        results= filterProducts(results, req.query);
        if(req.query.search){
            results= searchProduct(results, req.query.search);
            if(results[0]===''||!results[0]){
               return res.status(404).json({
                    message:`Products with search word ${req.query.search} not found`
                })
            }
        }
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

//helper functions, no need to export


//filter helper function, returns all products that match filters
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
//returns products that contain search key word
const searchProduct=(data,search)=>{
    data=data.filter(el=>el.name.toLowerCase().includes(search.toLowerCase()))
    return data;
};