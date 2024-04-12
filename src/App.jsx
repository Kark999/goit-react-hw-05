import "./App.css";
import css from "./App.module.css";
import NavigationNavLink from "./components/Navigation/NavigationNavLink/NavigationNavLink";
import NavigationPages from "./components/Navigation/NavigationPages/NavigationPages";

function App() {
  return (
    <div>
      <header className={css.header}>
        <NavigationNavLink />
      </header>
      <main>
        <NavigationPages />
      </main>
    </div>
  );
}

export default App;
