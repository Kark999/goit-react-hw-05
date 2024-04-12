import { Link, useParams, Route, Routes, useLocation } from "react-router-dom";

import css from "./MovieDetailsPage.module.css";
import { useEffect, useState, useRef, lazy, Suspense } from "react";
import { requestMovieById } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  console.log("location: from details", location);
  const backLinkHref = useRef(location.state?.from ?? "/");

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

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <div>
      {isLoading && <Loader />}
      {movieDetails !== null && (
        <div className={css.movieDescription}>
          <div className={css.moviePoster}>
            <Link to={backLinkHref.current}>Go back</Link>
            {movieDetails.poster_path && (
              <img
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                    : defaultImg
                }
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
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="cast" element={<MovieCast />} />
            <Route path="review" element={<MovieReviews />} />
          </Routes>
        </Suspense>
      </div>
      {isError && <ErrorMessage />}
    </div>
  );
};

export default MovieDetailsPage;
