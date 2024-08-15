import logo from './logo.svg';
import './App.css';
import Button from './Button';
import {useState, useEffect} from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(()=>{fetch("https://api.coinpaprika.com/v1/tickers").then( (response) => response.json()).then( json => {setCoins(json); setLoading(false);})}, [])
  console.log(coins);

  return (<div>
    <h1>Coin Prices</h1>
    <hr/>
    {loading ? <strong>I am loading ...</strong> : <select>
      {
      coins.map((coin) => <option id={coin.id}>{coin.name}({coin.symbol}::Rank{coin.rank}) ${coin.quotes.USD.price.toFixed(2)} USD</option>)
      }
    </select>}

    
  </div>
)
}


export default App;
