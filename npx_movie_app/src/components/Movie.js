import PropTypes from "prop-types";

function Movie({title, coverImg, summary, genres}){
    return  <div>
                <h2>{title}</h2>
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