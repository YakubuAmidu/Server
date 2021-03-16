// keys.js: Figure out what the set of credentials will be
if (process.env.NODE_ENV === 'production') {
  // We are production. Return the set of keys
  module.exports = require('./prod');
} else {
  // We are in development. Return  the set of keys
  module.exports = require('./dev');
}
