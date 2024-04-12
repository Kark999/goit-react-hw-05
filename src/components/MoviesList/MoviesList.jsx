import { Link, useLocation } from "react-router-dom";
import css from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={css.moviesList}>
        {Array.isArray(movies) &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;
