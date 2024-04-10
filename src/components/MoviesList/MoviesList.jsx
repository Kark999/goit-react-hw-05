import { Link } from "react-router-dom";
import css from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  return (
    <div>
      <ul className={css.moviesList}>
        {Array.isArray(movies) &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.Id}`} state="movieId">
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;
