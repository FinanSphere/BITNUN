// bitnun-frontend/src/components/CryptoData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CryptoData = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/crypto');
        setCryptoData(response.data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Crypto Market Data</h2>
      {cryptoData.length > 0 ? (
        <ul>
          {cryptoData.map((coin) => (
            <li key={coin.id}>
              <p>{coin.name}: ${coin.current_price}</p>
              <p>24h Change: {coin.price_change_percentage_24h}%</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CryptoData;
