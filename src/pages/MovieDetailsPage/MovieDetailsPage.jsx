import { Link, useParams, Route, Routes } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  return (
    <div>
      <div className={css.movieDescription}>
        <Link to={"/"}>Go back</Link>
        <img src="" alt="" />
        <div className={css.description}>
          <h2>Movie title: {movieId}</h2>
          <p>User score:</p>
          <h3>Overview</h3>
          <p>Movie description</p>
          <h3>Genres:</h3>
          <p>Genre</p>
        </div>
      </div>
      <div className={css.information}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
        </ul>

        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="review" element={<MovieReviews />} />
        </Routes>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
