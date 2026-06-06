import db from '../db/db.js';


export const findProductById = async (id) => {
    const [results] = await db.query(
        "SELECT name, price, type FROM products WHERE ? = ProductId",
        [id]
    );
    return results[0];
};

export const findProductByPrice = async (minPrice,maxPrice) => {
    const [results] = await db.query(
        "SELECT name, price, type FROM products WHERE price > ? AND price < ?",
        [minPrice,maxPrice]
    );
    return results;
};

export const findAllProducts = async (query) => {
    let sql = "SELECT name, price, type FROM products"
    const params=[];
    const { minPrice, maxPrice, search } = query;
    if(minPrice||maxPrice||search) sql+=" WHERE "
    if(minPrice) {
        params.push(minPrice);
        sql+='price>? ';
        if(maxPrice||search)sql+='AND '
    }
    if(maxPrice) {
        params.push(maxPrice);
        sql+= 'price<? ';
        if (search) sql += 'AND '
    }
    if(search){ 
        params.push(`%${search}%`)
        sql += 'name LIKE ?';
    }
    console.log(sql);
    const [results] = await db.query(sql,params);
    return results;
};