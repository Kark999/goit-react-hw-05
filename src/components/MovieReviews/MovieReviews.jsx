import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestMovieReview } from "../../services/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./MovieReviews.module.css";

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
        setMovieReviews(data.results);
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
      {movieReviews && movieReviews.length > 0 ? (
        <ul className={css.reviewList}>
          {movieReviews.map((movieReview) => (
            <li className={css.reviewListCard} key={movieReview.id}>
              <p>
                <b>Author</b>: {movieReview.author}
              </p>
              <p>{movieReview.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <b>We don&apos;t have any reviews for this movie!</b>
        </p>
      )}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default MovieReviews;
