import MovieListItem from './MovieListItem';

const MovieList = (props) => {
  return (
    <table className="min-w-fit divide-y divide-gray-200 bg-black bg-opacity-25">
      <thead className="bg-black bg-opacity-25">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-black bg-opacity-25">Poster</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center justify-center">Title</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Popularity</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Faves</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {props.movies.map((movie) => {
            return <MovieListItem key={movie.id} movie={movie} />
          })
        } 
      </tbody>
    </table>
  );
}
export default MovieList;