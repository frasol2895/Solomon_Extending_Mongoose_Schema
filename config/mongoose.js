const config = require('./config');
const mongoose = require('mongoose');
require('../app/models/user.server.model');

module.exports = function() {
    return mongoose.connect(config.db);
};