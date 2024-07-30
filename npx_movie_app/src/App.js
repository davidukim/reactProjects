import logo from './logo.svg';
import './App.css';
import Button from './Button';
import {useState, useEffect} from "react";


function App() {
  let [count, setCount] = useState(0);
  console.log("i get called every re-render");

  const incrementor = () => {
    setCount(prev => prev + 1);
  }

  const Call_API = () => {
    console.log("i get called only once for initial render");
  }

  useEffect(Call_API, []);

  return (
    <div>
      <h1>Our count: {count}</h1>
      <Button passedInProp={incrementor}/>
    </div>
  );
}

export default App;
