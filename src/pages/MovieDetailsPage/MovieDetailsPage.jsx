import { Link } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  return (
    <div>
      <Link to={"/"}>Go Home</Link>
      <img src="" alt="" />
      <h2>Movie title</h2>
      <p>User score:</p>
      <h3>Overview</h3>
      <p>Movie description</p>
      <h3>Genres:</h3>
      <p>Genre</p>
      <div>
        <h3>Additional information</h3>
        <MovieCast />
        <MovieReviews />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
