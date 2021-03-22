const mongoose = require('mongoose');
const requireCredits = require('../models/requireCredits');
const requireLogin = require('../models/requireLogin');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
  app.post('/api/surveys', (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients,
    });
  });
};
