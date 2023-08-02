const mongoose = require('mongoose');

const reservationSchema=new mongoose.Schema({
    customerId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Customer",
        required: true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    tableNo:{
        type:Number,
        required:true
    },
})

const Reservation = mongoose.model('Reservaton',reservationSchema);
module.exports= Reservation;