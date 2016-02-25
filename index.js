const http = require('http');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

server.listen(port, () => console.log(`started server to port: ${port}`));
