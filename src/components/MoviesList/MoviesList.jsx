// import { Link } from "react-router-dom";
import css from "./MoviesList.module.css";

const MoviesList = ({ movies, query }) => {
  return (
    <div>
      <ul className={css.moviesList}>
        {Array.isArray(movies, query) &&
          movies.map((movie) => {
            return (
              <li key={movie.id}>
                <a href={movie.backdrop_path}>{movie.title}</a>
                {/* <Link to={`/movies/${movie.Id}`} state="movieId">
                  See more details
                </Link> */}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MoviesList;
