import logo from './logo.svg';
import './App.css';
import Button from './Button';
import {useState, useEffect} from "react";


function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => {
    setToDo(event.target.value);  
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === ""){
      return;
    }
    console.log(toDo);
    setToDo("");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your todo..."/>
        <button>Add To Do</button>
      </form>
      
    </div>
  )
}

export default App;
