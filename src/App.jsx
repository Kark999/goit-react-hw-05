import { NavLink, Routes, Route } from "react-router-dom";
import clsx from "clsx";

import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import "./App.css";
import css from "./App.module.css";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

function App() {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">
            Home
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/detailed-page" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
