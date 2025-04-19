const express = require('express');
const router = express.Router();
const Quote = require('../models/quote.model');
const sendQuoteEmail = require('../utils/mailer');

// RUTA PENTRU TRIMITEREA QUOTE-URILOR
router.post('/quote', async (req, res) => {
  try {
    const {
      email,
      name,
      phone,
      regNumber,
      lookupData,
      matchedServices,
      message,
      deliveryMethod,
      preferredContact,
      // ⚠️ Excludem gdpr aici
    } = req.body;

    // ✅ Validare câmpuri necesare
    if (!email || !name || !phone || !regNumber) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const quoteData = {
      email,
      name,
      phone,
      regNumber,
      lookupData,
      matchedServices,
      message,
      deliveryMethod,
      preferredContact
    };

    // ✅ Salvare în MongoDB fără GDPR
    const newQuote = new Quote(quoteData);
    await newQuote.save();

    // ✅ Trimitere email fără GDPR
    await sendQuoteEmail(quoteData);

    res.status(201).json({ success: true });
  } catch (error) {
    console.error("Eroare la trimitere:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
