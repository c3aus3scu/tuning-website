const express = require('express');
const router = express.Router();
const Quote = require('../models/quote.model');
const sendQuoteEmail = require('../utils/mailer');

// RUTA PENTRU TRIMITEREA QUOTE-URILOR
router.post('/quote', async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    console.log("Received quote request:", req.body); // Adăugăm log pentru a verifica datele
    await newQuote.save();

    // Trimite email clientului
    await sendQuoteEmail(req.body);

    res.status(201).json({ success: true });
  } catch (error) {
    console.error("Eroare la trimitere:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
