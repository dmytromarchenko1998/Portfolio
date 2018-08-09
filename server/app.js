const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();

app.use('/', express.static(path.join(__dirname, '/../dist')));

module.exports = app;
