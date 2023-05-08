import express from 'express';
import userRoute from './routes/user.js'
import productRoute from './routes/product.js'
import orderRoute from './routes/order.js'

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use('/api/v1', userRoute)
app.use('/api/v1', productRoute)
app.use('/api/v1', orderRoute)


export default app