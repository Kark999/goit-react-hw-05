import SearchForm from "../../components/SearchForm/SearchForm";
import { Toaster } from "react-hot-toast";
import { searchMovies } from "../../services/api";
import { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MoviesList from "../../components/MoviesList/MoviesList";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState(null); // Оновлений стан для зберігання результатів запиту
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMoviesByQuery = async () => {
      try {
        setIsLoading(true);
        const data = await searchMovies(searchTerm);
        console.log("data: ", data);
        setMovies(data.results); // Оновлення стану movies з результатами запиту
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchTerm) {
      fetchMoviesByQuery();
    }
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
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
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
