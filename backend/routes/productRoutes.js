import express from 'express';
const router = express.Router();

import { getAllProducts, getProductById } from "../controller/productControllers.js"

//@desc GET all products from DB
//@route GET /api/products
//@access Public
router.get('/', getAllProducts);

//@desc GET a product by ID from DB
//@route GET /api/products/:id
//@access Public
router.get('/:id', getProductById);

export default router;