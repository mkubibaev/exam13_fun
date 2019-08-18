const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const place = require('./app/place');
const users = require('./app/users');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const port = 8001;

mongoose.connect(config.dbUrl, config.mongoOptions).then(() => {
    app.use('/places', place);
    app.use('/users', users);
    app.listen(port, () => {
        console.log(`Server started on ${port} port`);
    });
});
