const express = require('express');
const path = require('path');
const router = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static('data/images'));
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is running on port ${port}`);
