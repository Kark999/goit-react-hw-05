import { NavLink } from "react-router-dom";
import "./App.css";
import css from "./App.module.css";
import clsx from "clsx";

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
    </div>
  );
}

export default App;
