const FavoritesList = (props) => {
    const favMovies = props.faves.map((fav) => {
        return props.movies.find((movie) => movie.id === fav)
        });
    console.log(favMovies)
    
    return (
    <div>
      <h2>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-2 hover:cursor-pointer text-green-500">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg> 
      </h2>
      <ul>
        {favMovies.map((movie) => {
            return (
                <li key={movie.id} className="mt-4">
                    <img src={`https://image.tmdb.org/t/p/w92/${movie.poster}`} title={movie.title} alt={movie.title} className=" max-h-16"/>
                    {/* <span>{movie.title} ({movie.release_date.slice(0, 4)})</span> */}
                </li>
            );
            })
        }
      </ul>
    </div>
  );
}
export default FavoritesList;