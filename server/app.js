const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();

app.use('/', express.static(path.join(__dirname, '/../dist')));

app.get('/loaderio-bc62e2a4b191bdaeedb6af8dd45f58be', (req, res) => {res.send('loaderio-bc62e2a4b191bdaeedb6af8dd45f58be')})

module.exports = app;
