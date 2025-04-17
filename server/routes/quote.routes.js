const express = require('express');
const router = express.Router();
const Quote = require('../models/quote.model');
const sendQuoteEmail = require('../utils/mailer');

router.post('/quote', async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    await newQuote.save();

    await sendQuoteEmail(req.body); // 📩 trimite email

    res.status(201).json({ success: true });
  } catch (error) {
    console.error("Eroare la trimitere:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
