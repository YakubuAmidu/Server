const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./api/billingRoutes')(app);
require('./routes/surveyRoute')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve as production assets
  // Like our main.js file, or main.css file
  app.use(express.static('client/build'));

  // Express will serve up index.html file
  // If it doesn't recognize the routee
  const path = require('path');
  app.get('*', (req, res) => {
    res.sentFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// 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
