const express = require('express');
const router = express.Router();
const Incident = require('../model/Incident');
const validateIncident = require('../middleware/validateIncident');




// GET /incidents - 
router.get('/', async (req, res) => {
  const incidents = await Incident.find();
  res.status(200).json(incidents);
});

// GET /incidents/:id - 
router.get('/:id', async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);
    if (!incident) return res.status(404).json({ message: 'Incident not found' });
    res.json(incident);
  } catch {
    res.status(400).json({ message: 'Invalid ID format' });
  }
});

// POST /incidents - 
router.post('/', validateIncident, async (req, res) => {
  const { title, description, severity } = req.body;
  if (!title || !description || !severity) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  if (!['Low', 'Medium', 'High'].includes(severity)) {
    return res.status(400).json({ message: 'Invalid severity level' });
  }
  try {
    const newIncident = await Incident.create({ title, description, severity });
    res.status(201).json(newIncident);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE /incidents/:id - 
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Incident.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Incident not found' });
    res.status(204).send({ message: 'Incident deleted successfully' });
  } catch {
    res.status(400).json({ message: 'Invalid ID format' });
  }
});

module.exports = router;
