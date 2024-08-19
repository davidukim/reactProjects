import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Movie from './components/Movie';
import Home from './routes/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  return <Home/>;
}


export default App;
