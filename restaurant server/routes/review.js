const express = require('express');
const router = express.Router();
const Review = require('../models/Review');


// Get all reviews
router.get('/', async (req, res) => {
    try{
        const reviews = await Review.find();
        res.json(reviews);
    }catch(err){
        res.status(500).json({message: 'Server error'});
    }
})


// Get a specific review by ID
router.get('/:id', async(req, res)=> {
    try{
        const review = await Review.findById(req.params.id);
        if(review) {
            res.json(review);
        } else {
            res.status(404).json({message: 'Review not found'});
        }
    }catch(err){
        res.status(500).json({message: 'Server error'});
    }
})

// Create a new review
router.post('/', async(req, res) => {
    try{
        const {customerId, rating, comment} = req.body;
        const review = new Review({customerId, rating, comment});
        await review.save();
        res.status(201).json(review);
    }catch(err){
        res.status(500).json({message: 'Server error'});
    }
})

// Delete a review by ID
router.delete('/:id', async(req, res) => {
    try{
        const deletedReview = await Review.findByIdAndDelete(req.params.id);
        if(deletedReview) {
            res.json({message: 'Review deleted successfully'});
        } else {
            res.status(404).json({message: 'Review not found'})
        }
    }catch(err){
        res.status(500).json({message: 'Server error'});
    }
})

module.exports = router;