import Movie from "../components/Movie";
import {useState,useEffect} from "react";


function Home(){
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);
    useEffect(()=>{
      fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
      .then((response) => response.json())
      .then((json) => {
        setMovieList(json.data.movies);
        setLoading(false);  
      });
      
    }, []);
    console.log(movieList);
  
  
    return (<div>
      {loading ? (
      <h1>Loading..</h1> 
      ) : <div>
        {movieList.map((movie) => 
          <Movie key={movie.id} 
          title={movie.title}
          coverImg= {movie.medium_cover_image}
          summary = {movie.summary}
          genres = {movie.genres}
          />)}
        </div>}
          </div>)
}

export default Home;