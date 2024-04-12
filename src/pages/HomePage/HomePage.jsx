import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { getMovies } from "../../services/api";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MoviesList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await getMovies();
        console.log("response: ", response);

        setMovies(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies} />}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default HomePage;
