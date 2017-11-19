const mongoose = require('mongoose');
const connect = require('../../lib/setup-mongoose');
const url = 'mongodb://localhost:27017/image-test';
const request = require('./request'); // eslint-disable-line

before(() => connect(url));
after(() => mongoose.close);

module.exports = {
    drop() {
        return mongoose.dropDatabase();
    }
};