// **** Node JS Server.
const http = require('http');

const express = require ('express');

const app = express();
const server = http.createServer(app);

// **** Port Variables
const hostname = 'localhost';
const PORT = 8080;

// **** Main routes
app.get('*', (req, res) => {
    res.send('Hello World')
});

// **** Start Server
server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});