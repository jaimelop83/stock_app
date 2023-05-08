// Desc: This is the main server file for the application

const express = require('express');
const polygonController = require('./controllers/polygonController');
const app = express();
require('dotenv').config();
const chalk = require('chalk');
const routes = require('./routes/routes');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./middleware/logger');
const cors = require('cors');

port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// cors middleware
app.use(cors());

// Middleware to parse JSON data from request body
app.use(express.json());

// logger middleware
app.use(logger);

// import routes
app.use(routes);

// Middleware to handle errors
app.use(errorHandler);

app.listen(port, () => {
  // use chalk to color the console log and make it stand out
  console.log(chalk.blue.bold(`Stock app listening on port ${port}!`));
});


module.exports = app;