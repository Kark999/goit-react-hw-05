import SearchForm from "../../components/SearchForm/SearchForm";
import { Toaster } from "react-hot-toast";
import { searchMovies } from "../../services/api";
import { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  // const location = useLocation();
  // console.log("location: ", location);

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const fetchMoviesByQuery = async () => {
      try {
        setIsLoading(true);
        const data = await searchMovies(query);
        console.log("data: ", data);
        setMovies(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchMoviesByQuery();
    }
  }, [query]);

  const handleSearch = (term) => {
    setSearchParams({ query: term });
  };

  return (
    <div>
      <Toaster
        containerStyle={{
          top: 100,
        }}
        toastOptions={{
          duration: 3000,
          position: "top-center",
          reverseOrder: false,
          style: {
            background: "red",
            color: "#fff",
          },
        }}
        position="top-center"
        reverseOrder={false}
      />
      <SearchForm onSearchQuery={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
