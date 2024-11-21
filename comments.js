// Create web server
const http = require('http');

// Create web server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello World!');
});

// Start the server
server.listen(3000, '