import Order from '../models/order.js'

export const getAllOrders = async(req,res)=>{
    try {
        const orders = await Order.find()

        res.status(200).json({success: true, orders : orders})
    } catch (error) {
        console.log(error)
    }
}


export const createOrder = async(req,res)=>{
    try {
        const order = await Order.create(req.body)
        const populateOrder = await order.populate('userId')
        const orderPopulate = await populateOrder.populate('productId')

        res.status(200).json({success: true, order : orderPopulate})
    } catch (error) {
        console.log(error)
    }
}