import FavHeart from "./FavHeart";

const MovieListItem = (props) => {
  const posterUrl = `https://image.tmdb.org/t/p/w92/${props.movie.poster}`
  
  const favClickHandler = (e) => {
    e.stopPropagation();
    props.favHandler(props.movie.id);
    
  }
  const rowClickHandler = () => {
    console.log(props.movie.id)
  }
  return (<tr onClick={rowClickHandler}>
            <td className="px-6 py-4 whitespace-nowrap bg-black bg-opacity-10">
              <img src={posterUrl} alt={props.movie.title} className="mx-auto"/>
              </td>
              <td className="px-6 py-4 whitespace-normal  max-w-lg">
              {props.movie.title}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {props.movie.release_date.slice(0,4)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {props.movie.ratings.average}
            </td>
            <td className="px-6 py-4">
              {props.movie.ratings.popularity.toFixed()}
            </td>
            <td className="px-6 py-4 whitespace-nowrap" onClick={(e)=>favClickHandler(e)}>
             <FavHeart isFav={props.faves.includes(props.movie.id)}/>
              
             
            </td>
          </tr>
  )
}
export default MovieListItem;