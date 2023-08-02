const mongoose = require('mongoose');

const reviewSchema= new mongoose.Schema({
    customerId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Customer",
        required: true
    },
    rating: {
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
})

const Review= mongoose.model('Review',reviewSchema);
module.exports = Review;