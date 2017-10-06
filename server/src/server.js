const express = require('express');
const server = express();

server.get('/status', (req, res) => res.send('OK'));

//export for testing
module.exports = server;