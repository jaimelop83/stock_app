import React, { useState, useEffect } from "react";
import axios from "axios";
import Plot from "react-plotly.js";

const StockData = ({ symbol }) => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/polygon/candlestick/${symbol}`)
      .then((response) => {
        setStockData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stock data:", error);
      });
  }, [symbol]);

  const getChartData = () => {
    return {
      x: stockData.labels,
      close: stockData.datasets.map((data) => data.close),
      high: stockData.datasets.map((data) => data.high),
      low: stockData.datasets.map((data) => data.low),
      open: stockData.datasets.map((data) => data.open),
      type: "candlestick",
      xaxis: "x",
      yaxis: "y",
    };
  };

  const chartLayout = {
    title: `${symbol} Candlestick Chart`,
    dragmode: "zoom",
    showlegend: false,
    xaxis: {
      autorange: true,
      title: "Date",
      type: "date",
    },
    yaxis: {
      autorange: true,
      type: "linear",
      title: "Price",
    },
  };

  return (
    <div>
      {stockData ? (
        <Plot
        data={[getChartData()]}
        layout={chartLayout}
        />
      ) : (
        <p>Loading stock data...</p>
      )}
    </div>
  );
};


export default StockData;
