import express from 'express'
import { isFreeAppUser } from '../middleware/index.js'
import { createOrder, getAllOrders } from '../controllers/order.js'


const router = express.Router()


router.get('/orders',getAllOrders)
router.post('/order',isFreeAppUser,createOrder)

export default router


// 6457f38beecb0aec4453731a

// 6457f25dd43ca6b90b11c5ed