const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://nirajkatara2612:VHCatQVnBOrhjdPi@cluster0.r2gs0ft.mongodb.net/';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Connected to MongoDB.');
}).catch((err)=> {
    console.error('Error connecting to MongoDB:', err);
})