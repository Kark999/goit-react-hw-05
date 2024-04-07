import { Link, useParams, Route, Routes } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  return (
    <div>
      <div>
        <Link to={"/"}>Go back</Link>
        <img src="" alt="" />
        <h2>Movie title: {movieId}</h2>
        <p>User score:</p>
        <h3>Overview</h3>
        <p>Movie description</p>
        <h3>Genres:</h3>
        <p>Genre</p>
      </div>
      <div>
        <h3>Additional information</h3>
        <Link to="cast">Cast</Link>
        <Link to="review">Review</Link>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="review" element={<MovieReviews />} />
        </Routes>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
