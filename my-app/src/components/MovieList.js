import MovieListItem from './MovieListItem';

const MovieList = (props) => {
  return (
    <div className="max-w-5xl mx-auto">
    <table className="w-full divide-y divide-gray-200 bg-black bg-opacity-25">
      <thead className="bg-black mx-auto bg-opacity-50 sticky top-0">
        <tr>
          <th className="px-6 py-3 w-1/6 text-center text-xs font-medium text-gray-400 uppercase tracking-wider bg-black bg-opacity-25">Poster</th>
          <th className="px-6 py-3 w-2/6 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
          <th className="px-6 py-3 w-1/6 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Year</th>
          <th className="px-6 py-3 w-1/6 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Rating</th>
          <th className="px-6 py-3 w-1/6 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Popularity</th>
          <th className="px-6 py-3 w-1/6 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Faves</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {props.movies.map((movie) => {
            return <MovieListItem key={movie.id} movie={movie} faves={props.faves} favHandler={props.favHandler}/>
          })
        } 
      </tbody>
    </table>
    </div>
  );
}
export default MovieList;