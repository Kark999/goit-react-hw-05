import SearchForm from "../../components/SearchForm/SearchForm";
import { Toaster } from "react-hot-toast";
import { searchMovies } from "../../services/api";
import { useEffect, useState } from "react";
import { ErrorMessage } from "formik";
import MoviesList from "../../components/MoviesList/MoviesList";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!query.length) return;
    const fetchMoviesByQuery = async () => {
      try {
        const data = await searchMovies(query);
        setQuery(data.results);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchMoviesByQuery();
  }, [query]);

  const onSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
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
      <SearchForm onSearchQuery={onSearchQuery} />
      {isError && <ErrorMessage />}
      {query && <MoviesList movies={query} />}
    </div>
  );
};

export default MoviesPage;
