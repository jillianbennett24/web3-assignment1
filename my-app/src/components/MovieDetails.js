import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = (props) => {
  const movieId = useParams().movieId
  console.log(movieId)
  console.log(props)
  const movie = props.movies.find(m => m.id == parseInt(movieId))
  console.log(movie)
  const posterUrl = `https://image.tmdb.org/t/p/w342/${movie.poster}`
  const backdropUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop}`
  const releaseDate = Date.parse(movie.release_date)
  const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;


  return (
    <div>
      <div className="h-screen w-full bg-cover bg-center text-white" style={{backgroundImage: `url("${backdropUrl}")`}}>
        <img className=' h-full' src={posterUrl} title={movie.title} alt={movie.title} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/3 p-4 m-auto h-5/6 bg-black rounded-lg opacity-60">
          <h2 className="text-4xl font-bold mb-2">{movie.title}</h2>
          <p className="text-xl italic text-gray-300 mb-4">{movie.tagline}</p>
          <div className="flex justify-between mb-4 mx-36">
            <p>{movie.runtime} minutes</p>
            <p>{movie.release_date.slice(0,4)}</p>
          </div>
          <p className='text-gray-300 mb-4'>{movie.details.genres ? movie.details.genres.map((genre) => genre.name).join(", ") : ''}</p>
          <p className='mb-4'>{movie.details.overview}</p>
          <div className='flex justify-between mb-4 mx-36'>
            <p>{movie.ratings.average}</p>
            <p>{movie.ratings.popularity.toFixed(0)}</p>
          </div>
          <div className='flex justify-between mb-4 mx-48'>
            <a className='underline font-bold' href={`https://www.imdb.com/title/${movie.imdb_id}`} target='_blank'>IMDB</a>
            <a className='underline font-bold' href={`https://www.themoviedb.org/movie/${movie.tmdb_id}`} target='_blank'>TMDB</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;