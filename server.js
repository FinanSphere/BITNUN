// bitnun-backend/server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example route to get cryptocurrency data
app.get('/api/crypto', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.CRYPTO_API_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        ids: 'bitcoin,ethereum'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching crypto data" });
  }
});

// Example route to get stock data
app.get('/api/stocks', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.STOCK_API_URL}`, {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol: 'AAPL',
        interval: '5min',
        apikey: process.env.STOCK_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stock data" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`BitNun Backend running on port ${PORT}`);
});
