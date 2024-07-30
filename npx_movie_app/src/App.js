import logo from './logo.svg';
import './App.css';
import Button from './Button';
import {useState, useEffect} from "react";


function App() {
  let [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");

  console.log("i get called every re-render");

  const incrementor = () => {
    setCount(prev => prev + 1);
  }

  const ChangeKeyWord = (event) => {
    setKeyword(event.target.value)
    console.log(keyword);
  }

  useEffect( () => {
    console.log("I run only once");
  }, []);

  useEffect( () => console.log("I run when keyword changes"), [keyword])
  useEffect( () => console.log("I run when counter changes"), [count])

  return (
    <div>
      <input 
      type="text" 
      placeholder="Search here.." 
      value={keyword} 
      onChange={ChangeKeyWord}></input>
      <h1>Our count: {count}</h1>
      <Button passedInProp={incrementor}/>
    </div>
  );
}

export default App;
