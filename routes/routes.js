// Setup the routes for the application

// Path: routes/routes.js

const express = require('express');
const router = express.Router();


// import controllers
const polygonController = require('../controllers/polygonController');
const openaiController = require('../controllers/openaiController');

// polygon routes
router.get('/polygon/:symbol', polygonController.getStockData);
router.get('/polygon/group/:symbols', polygonController.getGroupTickers); // get a group of stock tickers sperated by commas and return the data
router.get('/polygon/candlestick/:symbol', polygonController.getCandlestickData); // fetch stock data for candlestick chart
router.get('/polygon/summary/:symbol', polygonController.getSummary); // fetches data for openai api and returns a summary of the stock

// openai routes
router.get('/openai/analyst-summary/:stock', openaiController.getAnalystSummary);

module.exports = router;