import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  isFreeAppUser: {
    type: Boolean,
    default: true
  },
  
  date: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
