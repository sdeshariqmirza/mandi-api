const express = require('express');
const router = express.Router();
const fetchMandiData = require('../data/fetchMandi');

// All prices
router.get('/prices', async (req, res) => {
  const data = await fetchMandiData();
  res.json(data);
});

// Filter by state
router.get('/prices/state/:state', async (req, res) => {
  const data = await fetchMandiData();
  const result = data.filter(
    item => item.state.toLowerCase() === req.params.state.toLowerCase()
  );
  if (result.length === 0) return res.status(404).json({ error: 'State not found' });
  res.json(result);
});

// Filter by crop
router.get('/prices/crop/:crop', async (req, res) => {
  const data = await fetchMandiData();
  const result = data.filter(
    item => item.commodity.toLowerCase() === req.params.crop.toLowerCase()
  );
  if (result.length === 0) return res.status(404).json({ error: 'Crop not found' });
  res.json(result);
});

module.exports = router;