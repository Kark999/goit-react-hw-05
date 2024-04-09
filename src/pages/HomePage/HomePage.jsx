import { useEffect, useState } from "react";
import { getMovies } from "../../services/api";
import { ErrorMessage } from "formik";
import MoviesList from "../../components/MoviesList/MoviesList";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies();
        console.log("response: ", response);

        setMovies(response.results);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default HomePage;
