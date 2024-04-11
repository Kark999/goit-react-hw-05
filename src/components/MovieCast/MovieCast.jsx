import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { requestMovieCast } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movieCasts, setMovieCasts] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieIdCast() {
      try {
        setIsLoading(true);
        const data = await requestMovieCast(movieId);
        setMovieCasts(data.cast);
        console.log("data: ", data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieIdCast();
  }, [movieId]);

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <div>
      {isLoading && <Loader />}
      {movieCasts !== null && (
        <ul className={css.castList}>
          {Array.isArray(movieCasts) &&
            movieCasts.map((movieCast) => (
              <li className={css.castListCard} key={movieCast.id}>
                <img
                  src={
                    movieCast.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${movieCast.profile_path}`
                      : defaultImg
                  }
                  alt="photo"
                  width={100}
                />
                <p>
                  <b>Actor</b>:{movieCast.name}
                </p>
                <p>
                  <b>Character</b>: {movieCast.character}
                </p>
              </li>
            ))}
        </ul>
      )}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default MovieCast;
