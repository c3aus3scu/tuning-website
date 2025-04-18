const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // ← asta lipsea
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());



// Routes
const lookupRoutes = require('./routes/lookup.routes');
app.use('/api', lookupRoutes);
const quoteRoutes = require('./routes/quote.routes');
app.use('/api', quoteRoutes);

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

module.exports = app;
