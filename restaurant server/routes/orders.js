const express=require('express');
const router=express.Router();
const Order = require('../models/Order');

// Get all orders
router.get('/', async(req,res)=>{
    try {
        const orders=await Order.find();
        res.json(orders);
    }catch(err){
        res.status(500).json({message: 'Server error'});
    }
} );

// Get a specifice order by ID
router.get('/:id',async(req,res)=>{
    try{
        const order=await Order.findById(req.params.id);
        if(order){
            res.json(order)
        } else {
            res.status(404).json({message: "Order not found"});
        }
    }catch(err){
        res.status(500).json({message: 'Server error'});
    }
})

// Create a new order
router.post('/',async(req,res)=>{
    try{
        const {customerId, items, totalAmount} = req.body;
        const order = new Order({ customerId, items, totalAmount});
        await order.save();
        res.status(201).json(order) 
    }catch(err){
        res.status(500).json({message: 'Server error'});
    }
})

// Delete an order by ID
router.delete('/:id',async(req,res)=>{
    try{
       const deletedOrder=await Order.findByIdAndDelete(req.params.id);
       if(deletedOrder){
        res.json({message:'Order deleted succesfully'})
       } else {
        res.status(404).json({message: "Order not found"});
       }
    }catch(err){
        res.status(500).json({message: 'Server error'});
    }
})

module.exports=router;