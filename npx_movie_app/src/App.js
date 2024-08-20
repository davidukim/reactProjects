import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Movie from './components/Movie';
import Home from './routes/Home';
import Detail from './routes/Detail';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/movie/:id" element={<Detail/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
}


export default App;
