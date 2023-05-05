// this file does nothing yet

const stockData = {
    labels: [
      // Your labels here
    ],
    datasets: [
      // Your datasets here
    ],
  };
  
  const trace = {
    x: stockData.labels,
    close: stockData.datasets.map((data) => data.close),
    high: stockData.datasets.map((data) => data.high),
    low: stockData.datasets.map((data) => data.low),
    open: stockData.datasets.map((data) => data.open),
    type: "candlestick",
    xaxis: "x",
    yaxis: "y",
  };
  
  const layout = {
    title: "Stock Price",
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
  
  Plotly.newPlot("stock-chart", [trace], layout);
  