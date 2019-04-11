const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const routes = require('./routers.js');
const app = express();
const port = process.env.PORT || 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api/shop/designers', routes);

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

module.exports = app;