const mongoose = require('mongoose');
const { schema } = require('./MenuItem');

const orderSchema=new mongoose.Schema({
    customerId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Customer",
        required: true
    },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MenuItem",
            required: true
        },
    ],
    totalAmount: {
        type: Number,
        required: true
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;