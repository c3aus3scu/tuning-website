const express = require('express');
const router = express.Router();
const Quote = require('../models/quote.model');
const sendQuoteEmail = require('../utils/mailer');

// RUTA PENTRU TRIMITEREA QUOTE-URILOR
router.post('/quote', async (req, res) => {
    try {
      const { email, name, phone, regNumber } = req.body;

      if (!email || !name || !phone || !regNumber) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const newQuote = new Quote(req.body);
      console.log("Received quote request:", req.body);
      await newQuote.save();

      await sendQuoteEmail(req.body);

      res.status(201).json({ success: true });
    } catch (error) {
      console.error("Eroare la trimitere:", error);
      res.status(500).json({ error: "Server error" });
    }
  });


module.exports = router;
