import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StockData from './components/StockData';
import VolumeChartPage from './components/VolumeChartPage';
import Navbar from './components/Navbar';
import ClosePriceChartPage from './components/ClosePriceChartPage';
import AnalystSummary from './components/AnalystSummary';

function App() {
  const [symbol, setSymbol] = useState('');
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  const handleButtonClick = () => {
    setSelectedSymbol(symbol);
  };

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
        <button onClick={handleButtonClick}>Get Stock Data</button>
        <Routes>
          <Route path="/" element={<div><StockData symbol={symbol} /> <AnalystSummary symbol={symbol} /></div>} />
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
