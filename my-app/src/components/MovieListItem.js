import { Link, Router } from "react-router-dom";
import FavHeart from "./FavHeart";
import { useNavigate } from "react-router-dom";

const MovieListItem = (props) => {
  const posterUrl = `https://image.tmdb.org/t/p/w92/${props.movie.poster}`
  const navigate = useNavigate();

  //handle click of favorite heart
  const favClickHandler = (e) => {
    //stop event from bubbling up to row click handler
    e.stopPropagation();
    props.favHandler(props.movie.id);
  }

  //handle click of movie row
  const rowClickHandler = () => {
    //navigate to movie details page
    navigate(`/movie/${props.movie.id}`)
  }

  //set placeholder image if poster image is not found
  const onImageError = (e) => {
    e.target.onerror = null
    e.target.src = 'https://via.placeholder.com/92x138?text=No+Image'
  }

  return (
          <tr onClick={rowClickHandler} className="hover:cursor-pointer hover:bg-slate-200">
            <td className="px-6 py-4 whitespace-nowrap bg-black bg-opacity-10">
              <img src={posterUrl} alt={props.movie.title} title={props.movie.title} onError={onImageError} className="mx-auto"/>
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
              {/* //pass boolean prop to FavHeart component based on whether movie is in favorites array, which determines whether heart is filled or not */}
              <FavHeart isFav={props.faves.includes(props.movie.id)}/>
            </td>
          </tr>
          
  )
}
export default MovieListItem;