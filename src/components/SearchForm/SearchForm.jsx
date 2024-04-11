import css from "./SearchForm.module.css";
import { toast } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = { searchTerm: "" };

const SearchForm = ({ onSearchQuery }) => {
  const handleSubmit = (values) => {
    if (!values.searchTerm) {
      toast.error("Please enter a search term");
      return;
    }
    onSearchQuery(values.searchTerm);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <Field
          className={css.field}
          type="text"
          name="searchTerm"
          autoComplete="off"
          autoFocus
          placeholder="Search movie by name"
        />
        <ErrorMessage
          className={css.error}
          name="searchTerm"
          component="span"
        />

        <button className={css.submitBtn} type="submit" aria-label="Search">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default SearchForm;

// import { useEffect, useState } from "react";
// import { requestMovieReview } from "../../services/api";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import Loader from "../Loader/Loader";
// import { useParams } from "react-router-dom";
// import css from "./MovieReviews.module";

// const MovieReviews = () => {
//   const { movieId } = useParams();
//   const [isError, setIsError] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [movieReviews, setMovieReviews] = useState(null);

//   useEffect(() => {
//     if (!movieId) return;
//     async function fetchMovieIdReview() {
//       try {
//         setIsLoading(true);
//         const data = await requestMovieReview(movieId);
//         setMovieReviews(data);
//         console.log("data: ", data);
//       } catch (error) {
//         setIsError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     fetchMovieIdReview();
//   }, [movieId]);

//   return (
//     <div>
//       {isLoading && <Loader />}
//       {movieReviews !== null && (
//         <ul className={css.reviewList}>
//           {Array.isArray(movieReviews) &&
//             movieReviews.map((movieReview) => (
//               <li className={css.reviewListCard} key={movieReview.id}>
//                 <p>
//                   <b>Author</b>:{movieReview.name}
//                 </p>
//                 <p>{movieReview.character}</p>
//               </li>
//             ))}
//         </ul>
//       )}
//       {isError && <ErrorMessage />}
//     </div>
//   );
// };

// export default MovieReviews;
