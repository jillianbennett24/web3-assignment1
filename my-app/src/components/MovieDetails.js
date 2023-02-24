import React from 'react';
import { useParams } from 'react-router-dom';
import FavHeart from './FavHeart';
import { StarRating } from './StarRating';
import imdbLogo from '../imdb-logo-transparent.png';
import tmdbLogo from '../1280px-Tmdb.new.logo.svg.png'
import GaugeChart from 'react-gauge-chart'
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import StarRatings from 'react-star-ratings';
import App from '../App';


const MovieDetails = (props) => {
  const movieId = parseInt(useParams().movieId)
  console.log(movieId)
  console.log(props)
  const movie = props.movies.find(m => m.id == movieId)
  console.log(movie)
  const posterUrl = `https://image.tmdb.org/t/p/w342/${movie.poster}`
  const backdropUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop}`
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [userRating, setUserRating] = React.useState(movie.ratings.userRating || 0);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    console.log('userRating',userRating)
    movie.ratings['userRating'] = userRating
    console.log('movie with user rating added',movie)
    props.addUserRating(movieId, userRating)
    setModalIsOpen(false);
  }

  const ratingHandler = (userRating) => {
    // console.log('userRating',userRating)
    setUserRating(userRating);
  }

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'black',
      color: 'white',
      opacity: '0.7',
      borderRadius: '10px',
    },
  };

  const favClickHandler = (e) => {
    e.stopPropagation();
    props.favHandler(movieId);
  }


  return (
    <div>
      <div className="h-screen w-full bg-cover bg-center text-white" style={{backgroundImage: `url("${backdropUrl}")`}}>
        <Link to="/movies">
          <button className="absolute top-16 right-2 hover:bg-red-600 rounded-md">
            <HiX size={48} className="text-white" />
          </button>
        </Link>
        <img className='h-full' src={posterUrl} title={movie.title} alt={movie.title} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/3 p-4 m-auto h-fit bg-black rounded-lg opacity-70">
        <div className="flex justify-center items-center mb-2 mx-auto">
          <h2 className="text-4xl font-bold">{movie.title}</h2>
          <span className='text-lg ml-4 font-normal'>({movie.release_date.slice(0,4)})</span>
          <span className='ml-4 font-normal' onClick={favClickHandler}>
            <FavHeart isFav={props.faves.includes(movieId)} className="w-12 h-12"/>
          </span>
          </div>
          <p className="text-xl italic text-gray-300 mb-4">{movie.tagline}</p>
          <div className="flex justify-between mb-4 mx-36 opacity-100">
            <p className='text-gray-300 mb-4'>{movie.details.genres ? movie.details.genres.map((genre) => genre.name).join(", ") : ''}</p>
            <p>{movie.runtime} minutes</p>
          </div>
          <p className='mb-4'>{movie.details.overview}</p>
          <div className='flex justify-between items-center mb-4 mx-10'>
            <div>
              <GaugeChart id="popularity-gauge" nrOfLevels={15} 
                                                percent={movie.ratings.popularity.toFixed(0)/100} 
                                                colors={["#FF5F6D", "#99ff99"]} 
                                                arcWidth={0.5} 
                                                arcPadding={0} 
                                                cornerRadius={9} 
                                                style={{width: 175}} 
                                                />
                <div className='font-bold text-sm'>Popularity</div>
            </div>
            <p>
              Rated 
              <span className="text-3xl text-green-300 mx-2">
                <StarRating rating={movie.ratings.average} key={`rating-${movieId}`}/>
              </span> 
              based on 
              <span className="font-bold mx-1">{movie.ratings.count}
              </span> 
              user ratings
            </p>
            <div className='text-center mx-4'>
              <button onClick={openModal} className='bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 rounded-full border-solid border-white border-2 mb-2'>
              {!userRating ? "Add Rating" : "Change Rating"}
              </button>
              <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles} ariaHideApp={false}>
                <div className='text-center my-4'>
                  <h2>Rate {movie.title}</h2>
                  <StarRatings
                    rating={userRating}
                    starRatedColor='#99ff99'
                    changeRating={ratingHandler}
                    numberOfStars={5}
                    name='rating'
                    starDimension="50px"
                    starSpacing="5px"
                    isAggregateRating={true}
                    key={'userRating'}
                  />
            </div>
                <button onClick={closeModal} className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full block mx-auto border-white border-solid border-2">Submit</button>
              </Modal>
              
            </div>
          </div>
          <div className='flex justify-between mb-4 mx-60 mt-5'>
            <a className='underline font-bold' href={`https://www.imdb.com/title/${movie.imdb_id}`} target='_blank'>
              <img src={imdbLogo} alt="IMDB" title="IMDB Logo" className='w-12 h-6'/>
            </a>
            <a className='underline font-bold' href={`https://www.themoviedb.org/movie/${movie.tmdb_id}`} target='_blank'>
              <img src={tmdbLogo} alt="TMDB" title="TMDB Logo" className='w-12 h-6'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;