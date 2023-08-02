const express = require('express');
const cors = require('cors');

// Import MongoDB models and connect to the database
require('./db');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Import routes
const menuRoutes = require('./routes/menu');
const ordersRoutes = require('./routes/orders');
const reservationsRoutes = require('./routes/reservations');
const reviewRoutes = require('./routes/review');

// All API Routes
app.use("/api/menu",menuRoutes);
app.use("/api/orders",ordersRoutes);
app.use("/api/reservations",reservationsRoutes)
app.use("/api/review",reviewRoutes);


app.get('/', (req, res)=> {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})