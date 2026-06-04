import db from '../db/db.js';


export const findProductById = async (id) => {
    const [results] = await db.query(
        "SELECT name, price, type FROM products WHERE ? = id",
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

export const findAllProducts = async () => {
    const [results] = await db.query(
        "SELECT name, price, type FROM products"
    );
    return results;
};