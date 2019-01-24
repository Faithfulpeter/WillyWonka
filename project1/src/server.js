'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const www = process.execPath.match(/\/node/)
  ? path.join(__dirname,'../../build/www')
  : path.join(path.dirname(process.execPath),'www');
  

// App
const app = express();

app.use(express.static(www));

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/api/ip', (req, res) => {
  require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    console.log('addr: '+add);
    res.send(add);
  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log("Serving from", www);
