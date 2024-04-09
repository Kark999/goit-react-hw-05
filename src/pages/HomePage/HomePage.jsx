import { useEffect, useState } from "react";
import { getMovies } from "../../services/api";

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies();
        console.log("response: ", response);

        setMovies(response.results);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {Array.isArray(movies) &&
          movies.map((movie) => {
            return (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default HomePage;
