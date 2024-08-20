import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id ,title, coverImg, summary, genres}){
    return  <div>
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <img src={coverImg} alt={title}></img>
                <p>{summary}</p>
                <ul>
                    {genres.map((g) => <li>{g}</li>)}
                </ul>
            </div>
}

Movie.propTypes = {
    title: PropTypes.string,
    coverImg: PropTypes.string,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie;