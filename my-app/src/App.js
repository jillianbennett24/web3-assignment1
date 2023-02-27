import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import MovieBrowser from './components/MovieBrowser';
import MovieDetails from './components/MovieDetails';
import React, { useEffect, useState }  from "react";
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  const [ogMovies,setOgMovies]= useState([]); // set an og state thing 
  const [faves, setFaves] = useState(JSON.parse(localStorage.getItem("faves")) || []); 
  const [searchValue, setSearchValue]=useState('');
  const [gSortList, setGSortList]=useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isEmpty,setIsEmpty]=useState(true);  // is empty is true 
  

  // print out movies with exclamation marks or question marks in the overview
  
  // JSON.parse(localStorage.getItem("allMovies")).forEach(movie => {
  //     if (movie.details.overview.includes("!") || movie.details.overview.includes("?")) {
  //       console.log("punc movie",movie.title);
  //     }
  //   })
  

  useEffect( ()=>{
    if(ogMovies.length <= 0){
      // first retrieve from local storage 
      const temp = localStorage.getItem("allMovies");
      // if it there?
      if(temp){
        let mdata = JSON.parse(temp);
        // mdata.sort((a,b)=>a.title.localeCompare(b.title));
        sortMovies(mdata, "title");
        setOgMovies(mdata);
        setIsEmpty(false); 
      }else{
        setIsFetching(true);
        // if we dont have data then we need to fetch it 
        fetch("https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=200")
        .then(resp=>resp.json())
        .then(data=>{
          // using set timeout to simulate a longer loading time
          setTimeout(()=>{
            setIsFetching(false);
          }, 3000)
          // save in local storage 
          localStorage.setItem("allMovies", JSON.stringify(data))
          // data.sort((a,b)=>a.title.localeCompare(b.title));
          sortMovies(data, "title");
          // set to movie state 
          setOgMovies(data);
          setIsEmpty(false);
          // setMovies(ogMovies); // jill added to test brain idk if its right spot
          
        })
        .catch(err => console.log(err))
      }
    }
    // check if we have faves in session storage
    // const tempFaves = JSON.parse(localStorage.getItem("faves"));
    
    // if(faves.length == 0 && tempFaves.length > 0){
    //   setFaves(tempFaves);
    // }
  })

  const resetData=()=>{
      // first retrieve from local storage 
      const temp = localStorage.getItem("allMovies");
        let mdata = JSON.parse(temp);
        // mdata.sort((a,b)=>a.title.localeCompare(b.title));
        sortMovies(mdata, "title");
        console.log("rsettinhg data with mdata: ", mdata)
        setOgMovies(mdata);
        // setOgMovies(false); 
  }

  const searchForMovieTitle=(input)=>{
    const originalMovies = JSON.parse(localStorage.getItem("allMovies"));
    const searchResultsArray = originalMovies.filter(movie => (movie.title).toString().toLowerCase().includes(input.toLowerCase()));
    console.log("this is the searchResultsArray: ",searchResultsArray)
    if(searchResultsArray.length===0){
      console.log("og movies in search for movie titile :" , ogMovies);
      setOgMovies(searchResultsArray)
      // setEmptyResults(true)
    }else{
      console.log("this is the searchResultsArray: ",searchResultsArray)
      setOgMovies([])
    console.log(ogMovies)

    // setEmptyResults(false)
    }
    
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


const favHandler = (movieId) => {
  console.log("faves before change", faves)
  // check if the movie is already in the faves array
  const isFave = faves.includes(movieId);
  if(isFave){
    // if it is then remove it 
    const newFaves = faves.filter(id=>id!==movieId);
    console.log("faves after remove", newFaves)
    localStorage.setItem("faves", JSON.stringify(newFaves));
    setFaves(newFaves);
  }else{
    // if it is not then add it 
    const newFaves = [...faves, movieId];
    console.log("faves after add", newFaves)
    localStorage.setItem("faves", JSON.stringify(newFaves));
    setFaves(newFaves);
  }
}


const onGenreSelect = (selected)=>{
  const originalMovies = JSON.parse(localStorage.getItem("allMovies"));
  //console.log("this is the ogMovies in onGenreSelect: " ,ogMovies);
  const moviesFilteredbyGenre = originalMovies.filter(movie=> { 
    if(movie.details.genres){ // if there is a movies genre array in the movie object 
      //console.log(movie.details.genres) // prints out movie objects genres 
      //console.log(movie.details.genres.some(genre=> genre.name == selected)) // prints a true or false if the movie object genre has the selected variable in it true if has false if not 
      return(movie.details.genres.some(genre=> genre.name == selected))
    }else{
      //console.log(movie.details.genres)
      return(false) // no movie genres array in the movie object 
    }
  })
  //console.log(moviesFilteredbyGenre) 
  setOgMovies(moviesFilteredbyGenre)
}

const filterYear= (compareOperator, year)=>{
  console.log("they chose: ",compareOperator);
  console.log("by the year:",year);
  const originalMovies = JSON.parse(localStorage.getItem("allMovies"));  // get the original Movies in an array 
  const moviesFilteredByYear= originalMovies.filter(movie=>{
  //console.log(movie);
  const releaseDateOfMovie= parseInt(movie.release_date.slice(0,4))
     console.log("the releaseDate of movie above is: ",releaseDateOfMovie)
     if(compareOperator == "After"){
       if(releaseDateOfMovie > year){
        console.log(movie);
        console.log("The release date of movie is larger then the selected value")
        return(true);
       }else{
        return(false);
       }
     } else if(compareOperator == "Before"){ 
      if(releaseDateOfMovie < year){
        console.log(movie);
        return(true);
       }else{
        return(false);
       }
     }else{
      if(releaseDateOfMovie === year){
        console.log(movie);
        return(true);
      }else{
        return(false);
      }
     }
  })
  console.log(moviesFilteredByYear);
  setOgMovies(moviesFilteredByYear);
}
const filterRating =(rangeArray)=>{
  console.log("this is range array in app",rangeArray);
  //if(rangeArray.length==0){alert("There is no movies that match your range!")}
  const [r1, r2]= rangeArray;
  console.log("this is r1: ",r1);
  console.log("this is r2:", r2);
  let biggestValue;
  let smallestValue;
  if(r1>r2){
    biggestValue=r1;
    smallestValue=r2;
  }else{
    biggestValue=r2;
    smallestValue=r1;
  }
  console.log("bigger: ",biggestValue, "smaller: ",smallestValue);
  // get all oroginal movies 
  const originalMovies = JSON.parse(localStorage.getItem("allMovies"));  // get the original Movies in an array 
  const filteredByRange=originalMovies.filter(movie=>{
    //console.log(movie);
    if(smallestValue <= movie.ratings.average && movie.ratings.average <=biggestValue){
      console.log(movie.ratings.average);
      return(true);
    }else{
      console.log("the movies average",movie.ratings.average," should bigger then: ",smallestValue, "and smaller then: ",biggestValue )
      return(false);
    }
  })
  console.log(filteredByRange);
  // if(filteredByRange.length==0){

    // setOgMovies([])// Hey Joel this isnt working:(
   // alert("There is no movies that match your range!");
  // }else{
    setOgMovies(filteredByRange);
   // console.log(ogMovies)
  // }
  
 
  
}
  // et moviesFilteredByYear=[];
  // if(selectedVal == "Greater"){
  //  moviesFilteredByYear = originalMovies.filter(movie=> parseInt(movie.release_date.slice(0,4)) > selectedVal);
  // }else{
  //   moviesFilteredByYear = originalMovies.filter(movie=> parseInt(movie.release_date.slice(0,4)) < selectedVal);
  // }
  
  
  
 
  // // filter the original movies 
  // const moviesFilteredByYear= originalMovies.filter(movie=>{
  //   console.log(movie);
  //   const releaseDateOfMovie= parseInt(movie.release_date.slice(0,4))
  //   console.log("the releaseDate of movie above is: ",releaseDateOfMovie)
  //   if(selectedVal == "Greater"){
  //     if(releaseDateOfMovie > selectedVal){
       
  //     }
  //   }
  // }

  // )
  // if

  const filterTitle=(searchedTitle)=>{
    const originalMovies = JSON.parse(localStorage.getItem("allMovies"));
    const searchTitleArray = originalMovies.filter(movie => {
      console.log(searchedTitle)
      if((movie.title).toString().toLowerCase().includes(searchedTitle.toLowerCase())){
        console.log(movie.title);
        return(true);
      }else{
        return(false);
      }
    })
    console.log(searchTitleArray);
    setOgMovies(searchTitleArray);
  }


  const addUserRating = (movieId, rating) => {
    const originalMovies = JSON.parse(localStorage.getItem("allMovies"));
    const movieToRate = originalMovies.find(movie=>movie.id == movieId);
    //update count and average if no user rating exists yet
    if (!movieToRate.ratings.userRating) {
      movieToRate.ratings.count++
      movieToRate.ratings.average = Math.round((movieToRate.ratings.average * (movieToRate.ratings.count - 1) + rating) / movieToRate.ratings.count)
    } else { //update average if user rating exists
      movieToRate.ratings.average = Math.round(((movieToRate.ratings.average * movieToRate.ratings.count) - movieToRate.ratings.userRating + rating) / movieToRate.ratings.count)
  
    }
    movieToRate.ratings["userRating"] = rating;
    console.log("movieToRate after rating: ", movieToRate);
    console.log("originalMovies after rating: ", originalMovies);
    localStorage.setItem("allMovies", JSON.stringify(originalMovies));
    sortMovies(originalMovies, "title")
    setOgMovies(originalMovies);
  } 

return (
    <div className="App">
      <Header className="App-header" resetData={resetData}  />
      {/* <ToastContainer key="toast-container" position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/> */}
      <Routes>
          <Route path="/" element={<MovieSearch searchForMovieTitle={searchForMovieTitle} resetData={resetData} isLoading={isFetching} setIsLoading={setIsFetching} />} />
          <Route path="movies" element={<MovieBrowser sampleMovie={ogMovies[1]} movies={ogMovies} sortMovies={sortMovies} searchForMovieTitle={searchForMovieTitle} filterTitle={filterTitle} filterYear={filterYear} resetData={resetData} favHandler={favHandler} faves={faves} onGenreSelect={onGenreSelect} filterRating={filterRating}/>} />
          <Route path="movie/:movieId" element={<MovieDetails movies={ogMovies} faves={faves} favHandler={favHandler} addUserRating={addUserRating}/>} />
          {/* <Route path="/:movieId" element={<MovieDetails ={ogMovies[1]} />} /> */}
      </Routes> 
    </div>
  );
}

export default App;
