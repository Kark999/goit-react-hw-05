import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./NavigationNavLink.module.css";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });
const NavigationNavLink = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink className={getNavLinkClassName} to="/">
          Home
        </NavLink>
        <NavLink className={getNavLinkClassName} to="/movies">
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default NavigationNavLink;
