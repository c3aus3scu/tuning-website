const express = require('express');
const router = express.Router();
const Quote = require('../models/quote.model');

// Algoritm simplu de matching servicii
const matchServices = (lookup) => {
  const services = [];

  if (lookup.fuelType?.toLowerCase() === 'diesel') {
    services.push('DPF Delete', 'EGR Delete');
    if (lookup.euroStatus && parseInt(lookup.euroStatus) < 6) {
      services.push('AdBlue Delete');
    }
  }

  services.push('Stage 1 Remap', 'Stage 2 Remap');

  return services;
};

// POST /api/lookup
router.post('/lookup', async (req, res) => {
  const { regNumber } = req.body;

  if (!regNumber) {
    return res.status(400).json({ error: 'Registration number is required' });
  }

  // Simulare răspuns lookup DVLA
  const mockDVLA = {
    make: "BMW",
    model: "320d",
    fuelType: "Diesel",
    engineSize: "2.0",
    euroStatus: "5",
    vin: "WBAVC31010X123456",
    co2Emissions: "138",
    year: "2013"
  };

  const matchedServices = matchServices(mockDVLA);

  // Salvează în DB (opțional)
  const quote = new Quote({
    regNumber,
    lookupData: mockDVLA,
    matchedServices
  });

  await quote.save(); // 💾 important

  res.json({ matchedServices, vehicle: mockDVLA });
});

module.exports = router;
