import {Router } from "express";
import { getAllProducts, getProduct} from '../controllers/products.controller.js';
import { isLoggedIn } from "../controllers/user.controller.js";
const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProduct);

export default router;