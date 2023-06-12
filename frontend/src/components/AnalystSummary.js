// AnalystSummary.js
import React, { useState } from 'react';

const AnalystSummary = ({ symbol }) => {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const getAnalystSummary = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/openai/analyst-summary/${symbol}`,
        { method: 'GET' }
      );
      const data = await response.json();
      setSummary(data.summary);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching analyst summary:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={getAnalystSummary}>Get Analyst Summary</button>
      {loading && <p>Loading...</p>}
      {summary && !loading && <div><p>{summary}</p></div>}
    </div>
  );
};

export default AnalystSummary;
