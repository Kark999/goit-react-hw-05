import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

const MoviesList = () => {
  return (
    <div>
      <ul className={css.moviesList}>
        {Array.isArray() &&
          movies.map(({}) => {
            return (
              <li key="">
                <a href=""></a>
                <Link to={`/movies/${movieId}`} state="movieId">
                  See more details
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MoviesList;
