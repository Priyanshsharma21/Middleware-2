import Product from '../models/product.js'

export const getAllProducts = async(req,res)=>{
    try {
        const products = await Product.find()

        res.status(200).json({success: true, product : products})
    } catch (error) {
        console.log(error)
    }
}


export const createProduct = async(req,res)=>{
    try {
        const product = await Product.create(req.body)

        res.status(200).json({success: true, product : product})
    } catch (error) {
        console.log(error)
    }
}