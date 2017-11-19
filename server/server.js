require('./lib/setup-mongoose');
const app = require('./lib/app');
const http = require('http');
const port = process.env.PORT || 3001;

const server = http.createServer(app);

server.listen('server running at PORT: ', server.address());