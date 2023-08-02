const express=require('express');
const router=express.Router();
const Reservation = require('../models/Reservation');

// Get all Reservations
router.get('/', async (req,res)=>{
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    }catch(err) {
        res.status(500).json({message: 'Server error'});
    }
})

// Get a specific reservation by ID
router.get('/:id', async (req,res)=>{
    try {
        const reservation = await Reservation.findById(req.params.id);
        if(reservation){
            res.json(reservation);
        } else {
            res.status(404).json({message: 'Reservation not found'})
        }
    }catch(err) {
        res.status(500).json({message: 'Server error'});
    }
})

// Create a new Reservation
router.post('/',async(req,res)=>{
    try{
        const {customerId, date, time, tableNo } = req.body;
        const reservation = new Reservation({customerId, date, time, tableNo});
        await reservation.save();
        res.status(201).json(reservation);
    }catch(err) {
        res.status(500).json({message: 'Server error'});
    }
})

// Update a reservation by ID
router.put('/:id',async(req,res)=>{
    try{
        const {date, time, tableNo} = req.body;
        const reservationId = req.params.id;

        const reservation = await Reservation.findById(reservationId);

        if(!reservation) {
            return  res.status(404).json({message: "Reservation not found"});
        }

        // Update the reservation
        reservation.date = date;
        reservation.time = time;
        reservation.tableNo = tableNo;

        await reservation.save();

        res.json(reservation);
    }catch(err) {
        res.status(500).json({message: 'Server error'});
    }
})

// Delete a reservation by ID
router.delete('/:id', async(req, res)=>{
    try{
        const deletedReservation = await Reservation.findByIdAndDelete(req.params.id);
        if(deletedReservation) {
            res.json({message: 'Reservation deleted successfully'});
        } else {
            res.status(404).json({message: "Reservation not found"});
        }
    }catch(err) {
        res.status(500).json({message: 'Server error'});
    }
})

module.exports=router;