import React from "react";
import StockData from "./components/StockData";

const App = () => {
  return (
    <div>
      <h1>Stock Data</h1>
      <StockData symbol="TSLA" />
    </div>
  );
};

export default App;
