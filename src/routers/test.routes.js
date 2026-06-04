import { Router } from "express";
import { findAllProducts } from "../services/bench.service.js";
const router = Router();

router.get('/db', async (req, res) => {
    console.log("TESTING DB ROUTE");
    try {
        const products = await findAllProducts();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'DB connection failed' });
    }
});

export default router;