import { useEffect, useState } from "react";
import{ Link, useParams } from "react-router-dom"
import { MovieService } from "../../api/MovieService"

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    async function getMovie() {
        const { data } = await MovieService.getMovieDetails(id);
        setMovie(data);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <section className="MovieDetail">
            <div className="Movie__container">
                <div className="MovieDetail__col">
                    <h1 className="MovieDetail__title">{movie.title}</h1>
                    <div className="MovieDetail__image">
                        <img    src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                        alt=""/>

                    </div>
                </div>
            </div>
        </section>
    )
}