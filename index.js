import app from './app.js'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const { PORT, MONGOOSE_URL } = process.env



const startServer = async()=>{
    try {
        await mongoose.connect(MONGOOSE_URL)
        console.log("Conntered To Database")
        app.listen(PORT,()=>{
            console.log(`Running Up The Hill At ${PORT}km/hr`)
        })
    } catch (error) {
        console.log(error)
    }
}
startServer()