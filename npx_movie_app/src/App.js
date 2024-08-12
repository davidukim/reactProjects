import logo from './logo.svg';
import './App.css';
import Button from './Button';
import {useState, useEffect} from "react";


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);  
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === ""){
      return;
    }
    setToDos((currentToDos) => [toDo, ...toDos]);
    setToDo("");
  }
  useEffect(()=>{console.log(toDos)}, [toDos]);
  return (
    <div>
      <h1>My To Do's ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your todo..."/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((elem, index) => <li key={index}>{elem}</li>)}
      </ul>

    </div>
  )
}

// javascript map parameters are in order of elem, index, array :: map(elem, index, array) -> naming to readability
// Case 1: Only need access to elem :: map(elem)
// Case 2: Only need access to index:: map(_, index)
// Case 3: Only need access to array:: map(_, _, arr)
// Case 4: Need access to elem and arr:: map(elem, _, arr)
// Case 5: Need access to elem and index:: map(elem, index)
// Case 6: Need access to index and arr:: map(index, _, arr) 

export default App;
