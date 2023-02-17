import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import MovieBrowser from './components/MovieBrowser';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
     <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="movies" element={<MovieBrowser />} />
        <Route path="/:movieId" element={<MovieDetails />} />
     </Routes> 
    </div>
  );
}

export default App;
