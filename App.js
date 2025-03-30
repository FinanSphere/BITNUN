// bitnun-frontend/src/App.js
import React from 'react';
import CryptoData from './components/CryptoData';
import StockData from './components/StockData';

function App() {
  return (
    <div className="App">
      <h1>Welcome to BitNun Trading Platform</h1>
      <CryptoData />
      <StockData />
    </div>
  );
}

export default App;
