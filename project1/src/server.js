'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const www = process.execPath.match(/node.exe/)
  ? path.join(__dirname,'../../build/www')
  : path.join(path.dirname(process.execPath),'www');
  

// App
const app = express();

app.use(express.static(www));

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log("Serving from", www);
