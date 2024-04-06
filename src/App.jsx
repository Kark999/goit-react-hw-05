import { NavLink, Routes, Route } from "react-router-dom";
import clsx from "clsx";

import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";

import "./App.css";
import css from "./App.module.css";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

function App() {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/home">
            Home
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
