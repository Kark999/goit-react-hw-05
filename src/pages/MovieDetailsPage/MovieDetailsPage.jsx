import { Link, useParams, Route, Routes, useLocation } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import css from "./MovieDetailsPage.module.css";
import { useEffect, useRef, useState } from "react";
import { requestMovieById } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieId() {
      try {
        setIsLoading(true);
        const data = await requestMovieById(movieId);
        setMovieDetails(data);
        console.log("data: ", data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieId();
  }, [movieId]);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");

  return (
    <div>
      {isLoading && <Loader />}
      {movieDetails !== null && (
        <div className={css.movieDescription}>
          <div className={css.moviePoster}>
            <Link to={backLink.current}>Go back</Link>
            {movieDetails.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                alt="poster"
                width={250}
              />
            )}
          </div>
          <div className={css.description}>
            <h2>{movieDetails.title}</h2>
            <p>User score: {movieDetails.vote_average}</p>
            <h3>Overview</h3>
            <p>Movie description: {movieDetails.overview}</p>
            <h3>Genres</h3>
            {movieDetails.genres && (
              <p>
                {movieDetails.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}, </span>
                ))}
              </p>
            )}
          </div>
        </div>
      )}
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
      {isError && <ErrorMessage />}
    </div>
  );
};

export default MovieDetailsPage;
