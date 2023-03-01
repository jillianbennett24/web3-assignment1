import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import MovieBrowser from './components/MovieBrowser';
import MovieDetails from './components/MovieDetails';
import React, { useEffect, useState }  from "react";


const App = () => {
  const [ogMovies,setOgMovies]= useState([]);
  const [faves, setFaves] = useState(JSON.parse(localStorage.getItem("faves")) || []); 
  const [isFetching, setIsFetching] = useState(false);
  

  useEffect( ()=>{
    if(ogMovies.length <= 0){
      // first retrieve from local storage 
      const temp = localStorage.getItem("allMovies");
      if(temp){
        let mdata = JSON.parse(temp);
        sortMovies(mdata, "title");
        setOgMovies(mdata);
      }else{
        setIsFetching(true);
        // if we dont have data then we need to fetch it 
        fetch("https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=300")
        .then(resp=>resp.json())
        .then(data=>{
          // using set timeout to simulate a longer loading time
          setTimeout(()=>{
            setIsFetching(false);
          }, 3000)
          // save in local storage 
          localStorage.setItem("allMovies", JSON.stringify(data))
          sortMovies(data, "title");
          // set to movie state 
          setOgMovies(data);
          
        })
        .catch(err => console.log(err))
      }
    }
  },[]) // empty array means only run once {{{  THIS LINE IS THE HOLY GRAIL OF THIS APP   }}}

  const resetData=()=>{
      const temp = localStorage.getItem("allMovies");
        let mdata = JSON.parse(temp);
        sortMovies(mdata, "title");
        setOgMovies(mdata);
  }
  
  const sortMovies = (movies, sortType, reverse=false) => {    
    if (sortType === "title"){
      if(!reverse) {
        movies.sort((a,b)=>a[sortType].toString().localeCompare(b[sortType].toString()))
      }else{
        movies.sort((a,b)=>b[sortType].toString().localeCompare(a[sortType].toString()))
      }
     
    } else if (sortType === "year"){
      movies.sort((a,b)=>{
        const year1 = parseInt(a["release_date"].slice(0,4));
        const year2 = parseInt(b["release_date"].slice(0,4));
        return year2 - year1;
    })

    } else if (sortType === "rating"){
      movies.sort((a,b)=>{
        const rating1 = parseFloat(a.ratings.average);
        const rating2 = parseFloat(b.ratings.average);
        return rating2 - rating1;
      })

    } else if (sortType === "popularity") {
      movies.sort((a, b) => {
        const popularity1 = parseInt(a.ratings.popularity);
        const popularity2 = parseInt(b.ratings.popularity);
        return popularity2 - popularity1;
      })
    }
    setOgMovies([...movies])
  }

// add or remove a movie from the faves array
const favHandler = (movieId) => {
  // check if the movie is already in the faves array
  const isFave = faves.includes(movieId);
  if(isFave){
    // if it is then remove it 
    const newFaves = faves.filter(id=>id!==movieId);
    localStorage.setItem("faves", JSON.stringify(newFaves));
    setFaves(newFaves);
  }else{
    // if it is not then add it 
    const newFaves = [...faves, movieId];
    localStorage.setItem("faves", JSON.stringify(newFaves));
    setFaves(newFaves);
  }
}

// filter movies by genre
const onGenreSelect = (selected)=>{
  const originalMovies = JSON.parse(localStorage.getItem("allMovies"));

  const moviesFilteredbyGenre = originalMovies.filter(movie=> { 
    if(movie.details.genres){ // if there is a movies genre array in the movie object 
     return(movie.details.genres.some(genre=> genre.name == selected))
    }else{
      return(false) // no movie genres array in the movie object 
    }
  })

  sortMovies(moviesFilteredbyGenre, "title");
  setOgMovies(moviesFilteredbyGenre)
}

// filter movies by year
const filterYear= (compareOperator, year)=>{
  const originalMovies = JSON.parse(localStorage.getItem("allMovies"));  // get the original Movies in an array 

  const moviesFilteredByYear= originalMovies.filter(movie=>{
    const releaseDateOfMovie= parseInt(movie.release_date.slice(0,4))

    if(compareOperator == "After"){
       if(releaseDateOfMovie > year){
        return(true);
       }else{
        return(false);
       }
     } else if(compareOperator == "Before"){ 
      if(releaseDateOfMovie < year){
        return(true);
       }else{
        return(false);
       }
     }else{
      if(releaseDateOfMovie === year){
        return(true);
      }else{
        return(false);
      }
     }
  })

  sortMovies(moviesFilteredByYear, "year");
  setOgMovies(moviesFilteredByYear);
}

// filter movies by rating
const filterRating =(rangeArray)=>{
  const [r1, r2]= rangeArray;
  let biggestValue;
  let smallestValue;
  // get the biggest and smallest value
  if(r1>r2){
    biggestValue=r1;
    smallestValue=r2;
  }else{
    biggestValue=r2;
    smallestValue=r1;
  }
  
  // get all original movies 
  const originalMovies = JSON.parse(localStorage.getItem("allMovies"));  
  
  const filteredByRange=originalMovies.filter(movie=>{
    if(smallestValue <= movie.ratings.average && movie.ratings.average <=biggestValue){
      return(true);
    }else{
      return(false);
    }
  })
  
  sortMovies(filteredByRange, "rating");
  setOgMovies(filteredByRange);
}
 
// filter movies by title
  const filterTitle=(searchedTitle)=>{
    const originalMovies = JSON.parse(localStorage.getItem("allMovies"));
    
    const searchTitleArray = originalMovies.filter(movie => {
      if((movie.title).toString().toLowerCase().includes(searchedTitle.toLowerCase())){
        return(true);
      }else{
        return(false);
      }
    })
    
    sortMovies(searchTitleArray, "title");
    setOgMovies(searchTitleArray);
  }

// add a user rating to a movie
  const addUserRating = (movieId, rating) => {
    const originalMovies = JSON.parse(localStorage.getItem("allMovies"));
    const movieToRate = originalMovies.find(movie=>movie.id == movieId);
    
    //update count and average if no user rating exists yet
    if (!movieToRate.ratings.userRating) {
      movieToRate.ratings.count++
      movieToRate.ratings.average = Math.round((movieToRate.ratings.average * (movieToRate.ratings.count - 1) + rating) / movieToRate.ratings.count)
    } else { //update average only if user rating exists
      movieToRate.ratings.average = Math.round(((movieToRate.ratings.average * movieToRate.ratings.count) - movieToRate.ratings.userRating + rating) / movieToRate.ratings.count)
    }
    
    //set user rating
    movieToRate.ratings["userRating"] = rating;
    localStorage.setItem("allMovies", JSON.stringify(originalMovies));
    
    sortMovies(originalMovies, "title")
    setOgMovies(originalMovies);
  } 

return (
    <div className="App">
      <Header className="App-header" resetData={resetData}  />
      <Routes>
          <Route path="/" element={<MovieSearch filterTitle={filterTitle} resetData={resetData} isLoading={isFetching} setIsLoading={setIsFetching} />} />
          <Route path="movies" element={<MovieBrowser currentMovies={ogMovies} movies={ogMovies} sortMovies={sortMovies} filterTitle={filterTitle} filterYear={filterYear} resetData={resetData} favHandler={favHandler} faves={faves} onGenreSelect={onGenreSelect} filterRating={filterRating} />} />
          <Route path="movie/:movieId" element={<MovieDetails movies={ogMovies} faves={faves} favHandler={favHandler} addUserRating={addUserRating}/>} />
      </Routes> 
    </div>
  );
}

export default App;
