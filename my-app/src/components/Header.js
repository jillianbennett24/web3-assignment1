import { Link } from "react-router-dom";
import logo from '../logo.jpeg';


const Header = () => {
  return (
    <header>
      <div className="bg-black h-16 flex items-center justify-center">
        <Link to="/">
        <img src={logo} className="w-24 hover:cursor-pointer border-r-2 border-gray-300 pr-4 mr-9 h-12"></img>
        </Link>
        {/* <div className="flex flex-row border-x-2 border-gray-200">
          0000
          </div> */}
        <button
        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded border-2 border-gray-300 focus:outline-none focus:ring-gray-300 transition duration-300 ease-in-out wave">
          <span className="text-gray-300 font-sans font-light border-gray-500 underline">
            About
          </span>
        </button>
  
      </div>

      {/* <Link to="/">Movie Search </Link>
        <Link to="/movies">Movie Browser</Link> */}
        {/* <Link to="/:movieId">Movie Details</Link> */}
    </header>
  );
}

export default Header;