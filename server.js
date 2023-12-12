const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on('request', (req, res) => {
  const pathname = req.url === '/' ? '/index.html' : req.url + '/index.html';

  const fullPath = path.join(__dirname, pathname);
  console.log('Full Path:', fullPath);

  fs.readFile(fullPath, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    }
  });
});

server.listen(3000, () => {
  console.log('server started on http://127.0.0.1:3000');
});
