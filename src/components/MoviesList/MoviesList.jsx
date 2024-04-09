// import { Link } from "react-router-dom";
import css from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  return (
    <div>
      <ul className={css.moviesList}>
        {Array.isArray(movies) &&
          movies.map((movie) => (
            <li key={movie.id}>
              <a href={movie.backdrop_path}>{movie.title}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;

{
  /* <Link to={`/movies/${movie.Id}`} state="movieId">
                  See more details
                </Link> */
}
