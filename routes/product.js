import express from 'express'
import { isFreeAppUser } from '../middleware/index.js'
import { createProduct, getAllProducts } from '../controllers/product.js'

const router = express.Router()


router.get('/products', getAllProducts)
router.post('/product', createProduct)

export default router