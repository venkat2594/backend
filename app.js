const express = require('express');
// const {ValidationError} = require('express-validation');

const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


module.exports = app;