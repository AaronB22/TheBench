import db from '../db/db.js';


export const findProductById = async (id) => {
    const [results] = await db.query(
        "SELECT ProductId as id, name, price, type FROM products WHERE ? = ProductId",
        [id]
    );
    return results[0];
};

export const findProductByPrice = async (minPrice,maxPrice) => {
    const [results] = await db.query(
        "SELECT ProductId as id, name, price, type FROM products WHERE price > ? AND price < ?",
        [minPrice,maxPrice]
    );
    return results;
};

export const findAllProducts = async (query) => {
    let sql = "SELECT ProductId as id, name, price, type FROM products"
    const params=[];
    const { minPrice, maxPrice, search, type } = query;
    if(minPrice||maxPrice||search||type) sql+=" WHERE "
    if(minPrice) {
        params.push(minPrice);
        sql+='price>? ';
        if(maxPrice||search||type)sql+='AND '
    }
    if(maxPrice) {
        params.push(maxPrice);
        sql+= 'price<? ';
        if (search||type) sql += 'AND '
    }
    if(search){ 
        params.push(`%${search}%`)
        sql += 'name LIKE ?';
        if(type)sql += 'AND '
    }
    if(type){
        params.push(type);
        sql+= 'type = ?';
    }
    const [results] = await db.query(sql,params);
    return results;
};