const connection = require('mongoose').connection;
const state =  require('mongoose/lib/connectionstate');

module.exports = function getCheckConnection() {
    return function checkConnection(req, res, next) {
        if(connection.readyState !== state.connection) {
            next({
                error: 'database not available'
            });
        }
        else next();
    };
};