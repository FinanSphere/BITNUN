// bitnun-frontend/src/components/StockData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StockData = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/stocks');
        setStockData(response.data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Stock Market Data</h2>
      {stockData.length > 0 ? (
        <ul>
          {Object.entries(stockData['Time Series (5min)'] || {}).map(([time, data]) => (
            <li key={time}>
              <p>{time}</p>
              <p>Open: ${data['1. open']}</p>
              <p>Close: ${data['4. close']}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StockData;
