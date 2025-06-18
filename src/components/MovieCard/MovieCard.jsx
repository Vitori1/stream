 import { Link } from "react-router-dom";

 const MovieCard = (props) => {
    return (
        <div className="MovieCard">
            <div className="movie-image">
                <img src={`https://image.tmdb.org/t/p/w1280${props.movie.poster_path}`} alt={props.movieProp.title}/>
            </div> 
            <div className="movie-description">
                <h3>{props.movieProp.title}</h3> 
                <Link to={`/movie/${props.movieProps.id}`} className="btn-details">
                Ver Detalhes
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;