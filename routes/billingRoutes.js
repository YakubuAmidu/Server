const keys = require('../config/Keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
  app.post('/api/stripe', (req, res) => {
    console.log(req.body);
  });
};
