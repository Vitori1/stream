import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService.js"
import { MovieCard } from "../../components/MovieCard/MovieCard"
const Home = () => {
    const [movies, setMovies] = useState([]);

    async function getMovies() {
        const { data: {results} } = await MovieService.getMovies();
        setMovies(results);
    }

    async function getMoviesSearch(movieString) {
        const {
            data: { results },
        } = await MovieService.searchMovies(movieString);

        setMovies(results);
    }

    useEffect(() => {
        if (searchValueProp) {
            getMoviesSearch(searchValueProp);
        }
        if (searchValueProp  === "") {
            getMovies();
        }
    }, [searchValueProp]);

    useEffect(() => {
        getMovies();
    }, []);

    useEffect(() => {
        console.log(movies);
    });

    return <section className="Home">{movies.map((movie) => ( <div key={movie.id}><MovieCard /></div>))}</section>
};

export default Home;