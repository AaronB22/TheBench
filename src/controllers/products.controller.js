

export const getAllProducts=(res,req)=>{
    try{
        console.log("test")
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