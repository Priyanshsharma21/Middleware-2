import User from '../models/user.js'

export const getAllUsers = async(req,res)=>{
    try {
        const users = await User.find()

        res.status(200).json({success: true, users : users})
    } catch (error) {
        console.log(error)
    }
}


export const createUsers = async(req,res)=>{
    try {
        const user = await User.create(req.body)

        res.status(200).json({success: true, user : user})
    } catch (error) {
        console.log(error)
    }
}