// models/Quote.js
const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  regNumber: String,
  lookupData: {
    make: String,
    model: String,
    fuelType: String,
    engineSize: String,
    euroStatus: String,
    vin: String,
    co2Emissions: String,
    year: String
  },
  matchedServices: [String],

  name: String,
  phone: String,
  email: String,
  message: String,
  preferredContact: String,
  deliveryMethod: String,
  gdpr: Boolean,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Quote', QuoteSchema);
