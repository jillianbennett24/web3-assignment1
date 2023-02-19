import FavHeart from "./FavHeart";

const MovieListItem = (props) => {
  const posterUrl = `https://image.tmdb.org/t/p/w92/${props.movie.poster}`;
  
  const favClickHandler = () => {
    console.log(props)
    props.favHandler(props.movie.id);
    // const movie = ogMovies.find(movie => movie.id === movieId);
    
  }
  return (<tr>
            <td className="px-6 py-4 whitespace-nowrap bg-black bg-opacity-10">
              <img src={posterUrl} alt={props.movie.title} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
              {props.movie.title}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {props.movie.release_date.slice(0,4)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {props.movie.ratings.average}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {props.movie.ratings.popularity.toFixed()}
            </td>
            <td className="px-6 py-4 whitespace-nowrap" onClick={favClickHandler}>
             <FavHeart isFav={props.faves.includes(props.movie.id)}/>
              
             
            </td>
          </tr>
  )
}
export default MovieListItem;