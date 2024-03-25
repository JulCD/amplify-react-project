import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { get } from 'aws-amplify/api';
import './App.css';

const App = () => {

  const [coins, updateCoins] = useState([]);

  async function fetchCoins() {

    const restOperation = await get({
      apiName: "cryptoapitwo",
      path: "/coins"
    });

    const { body } = await restOperation.response;
    const json = await body.json();
    updateCoins(json.coins);
  }

  useEffect(() => {
    fetchCoins()
  }, [])

  return (
    <div className="App">
      {
        coins.map((coin, index) => (
          <div key={index}>
            <h2>{coin.name} - {coin.symbol}</h2>
            <h5>${coin.price_usd}</h5>
          </div>
        ))
      }
    </div>
  );
}

export default App;
