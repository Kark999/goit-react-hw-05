import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { requestMovieReview } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieIdReview() {
      try {
        setIsLoading(true);
        const data = await requestMovieReview(movieId);
        setMovieReviews(data);
        console.log("data: ", data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieIdReview();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {movieReviews !== null && (
        <ul className={css.reviewList}>
          {Array.isArray(movieReviews) &&
            movieReviews.map((movieReview) => (
              <li className={css.reviewListCard} key={movieReview.id}>
                <p>
                  <b>Author</b>:{movieReview.name}
                </p>
                <p>{movieReview.character}</p>
              </li>
            ))}
        </ul>
      )}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default MovieReviews;
