import MovieListItem from './MovieListItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
const [activeSort, setActiveSort] = useState('title');
const [noMatches, setNoMatches] = useState(false);

  const headerClickHandler = (e) => {
    console.log(e.target.textContent.toLowerCase())
    const sortType = e.target.textContent.toLowerCase();
    console.log(props)
    props.sortMovies(props.movies, sortType);
    setActiveSort(sortType);
  }

 
 
  return (
    <div className="max-w-4xl mx-auto">
    <table className="w-full divide-y divide-gray-200 bg-black bg-opacity-25">
      <thead className="sticky top-0 bg-black mx-auto bg-opacity-50">
          <tr>
            <th className="px-6 py-3 w-1/6 text-center text-xs font-medium text-gray-400 uppercase tracking-wider bg-black bg-opacity-25">Poster</th>
            <th onClick={headerClickHandler} className={`px-6 py-3 w-2/6 text-center text-xs font-medium text-gray-400 uppercase tracking-wider hover:cursor-pointer ${activeSort === 'title' ? 'font-black underline scale-110' : ''}`}>Title</th>
            <th onClick={headerClickHandler} className={`px-6 py-3 w-1/6 text-center text-xs font-medium text-gray-400 uppercase tracking-wider hover:cursor-pointer ${activeSort === 'year' ? 'font-black underline scale-110' : ''}`}>Year</th>
            <th onClick={headerClickHandler} className={`px-6 py-3 w-1/6 text-center text-xs font-medium text-gray-400 uppercase tracking-wider hover:cursor-pointer ${activeSort === 'rating' ? 'font-black underline scale-110' : ''}`}>Rating</th>
            <th onClick={headerClickHandler} className={`px-6 py-3 w-1/6 text-center text-xs font-medium text-gray-400 uppercase tracking-wider hover:cursor-pointer ${activeSort === 'popularity' ? 'font-black underline scale-110' : ''}`}>Popularity</th>
            <th className="px-6 py-3 w-1/6 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Fave</th>
          </tr>
      </thead>
      {props.movies.length>0 && 
      <tbody className="bg-white divide-y divide-gray-200 ">
        {props.movies.map((movie) => {
            return <MovieListItem key={movie.id} movie={movie} faves={props.faves} favHandler={props.favHandler}/>
          })
        } 
      </tbody>
      }
    </table>
    {(props.movies.length ==0) && <p className='bg-white p-6 rounded-md mt-20 font-bold'>No matches found!</p>}
    </div>
  );
}
export default MovieList;