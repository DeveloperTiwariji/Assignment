require('dotenv').config();
const mongoose = require('mongoose');
const Incident = require('../models/Incident');

const seedData = [
  {
    title: "AI drone misclassification",
    description: "Drone incorrectly identified civilians as targets.",
    severity: "High"
  },
  {
    title: "Chatbot hallucination",
    description: "Generated misleading medical information.",
    severity: "Medium"
  }
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Incident.deleteMany({});
  await Incident.insertMany(seedData);
  console.log('Database seeded!');
  process.exit();
});
