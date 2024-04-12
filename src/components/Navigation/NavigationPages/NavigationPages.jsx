import { Routes, Route } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("../../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() =>
  import("../../../pages/NotFoundPage/NotFoundPage")
);
const MovieDetailsPage = lazy(() =>
  import("../../../pages/MovieDetailsPage/MovieDetailsPage")
);

const NavigationPages = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default NavigationPages;
