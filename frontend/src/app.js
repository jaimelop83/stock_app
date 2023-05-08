import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StockData from './components/StockData';
import VolumeChartPage from './components/VolumeChartPage';
import Navbar from './components/Navbar';
import ClosePriceChartPage from './components/ClosePriceChartPage';

function App() {
  const [symbol, setSymbol] = useState('AAPL');
  return (
    <Router>
      <div className="App">
        <Navbar />
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          placeholder="Enter stock symbol"
        />
        <Routes>
          <Route path="/" element={<StockData symbol={symbol} />} />
          <Route
            path="/volume-chart"
            element={<VolumeChartPage symbol={symbol} />}
          />
          <Route path="/close-price-chart" element={<ClosePriceChartPage symbol={symbol} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
