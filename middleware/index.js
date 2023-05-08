import Product from "../models/product.js"
import User from "../models/user.js"

export const isFreeAppUser = async(req,res,next)=>{
    try {
        const {isFreeAppUser, userId, productId} = req.body

        const user = await User.findById(userId)
        const product = await Product.findById(productId)

        if(!user && !product) return res.status(500).json({success : true, message : "Send the user and productId bro"})

        if(isFreeAppUser===false){
            if(user.balance > product.price){
                user.balance -= product.price
                user.save()
            }
        }

        next()
    } catch (error) {
        console.log(error)
    }
}
