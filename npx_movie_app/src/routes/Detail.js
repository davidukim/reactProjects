import { useEffect, useState } from "react";
import { useParams } from "react-router";
import '../index.css';

function Detail(){
    const { id }  = useParams();
    const [loading, setLoading] = useState(true);   // default loading is true
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchMovie = async() => {
            try{
                const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
                const json = await response.json();
                setMovie(json.data.movie);
                setLoading(false);
            } catch (error){
                console.log("Error fetching movie details", error);
            }
        }
        fetchMovie();
    }
    ,[id])

    return <div>
        {loading? <h1>it is loading...</h1> :
            <div>
                <h2>{movie.title}</h2>
                <img src={movie.medium_cover_image}></img>
                <p>{movie.description_intro}</p>
                <p>{movie.summary}</p>
            </div>
        }
    </div>
}

export default Detail;