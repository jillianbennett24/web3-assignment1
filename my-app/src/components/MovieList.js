const MovieList = () => {
  const { movies } = useMovies();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}
export default MovieList;