import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Header component</h1>
      <Link to="/">Movie Search </Link>
        <Link to="/movies">Movie Browser</Link>
        {/* <Link to="/:movieId">Movie Details</Link> */}
    </header>
  );
}

export default Header;