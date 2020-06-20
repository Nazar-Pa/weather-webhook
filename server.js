const express = require('express')
const app = express();

const weatherApp = require('./app');
app.use('/', weatherApp);

app.listen(process.env.PORT || 7000);