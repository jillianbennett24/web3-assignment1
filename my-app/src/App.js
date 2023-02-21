import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import MovieBrowser from './components/MovieBrowser';
import MovieDetails from './components/MovieDetails';
import React, { useEffect, useState }  from "react";


const App = () => {
  const [ogMovies,setOgMovies]= useState([]); // set an og state thing 
  const [faves, setFaves] = useState(JSON.parse(localStorage.getItem("faves"))); 
  const [searchValue, setSearchValue]=useState('');
  // const [movies, setMovies]=useState([]);

  useEffect( ()=>{
    if(ogMovies.length <= 0){
      // first retrieve from local storage 
      const temp = localStorage.getItem("Key");
      // if it there?
      if(temp){
        let mdata = JSON.parse(temp);
        // mdata.sort((a,b)=>a.title.localeCompare(b.title));
        sortMovies(mdata, "title");
        setOgMovies(mdata);
      }else{
        // if we dont have data then we need to fetch it 
        fetch("https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=20")
        .then(resp=>resp.json())
        .then(data=>{
          // save in local storage 
          localStorage.setItem("Key", JSON.stringify(data))
          // data.sort((a,b)=>a.title.localeCompare(b.title));
          sortMovies(data, "title");
          // set to movie state 
          setOgMovies(data);
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

  const resetToOGData=()=>{
    
      // first retrieve from local storage 
      const temp = localStorage.getItem("Key");
        let mdata = JSON.parse(temp);
        // mdata.sort((a,b)=>a.title.localeCompare(b.title));
        sortMovies(mdata, "title");
        setOgMovies(mdata);
      
  }
  const searchForMovieTitle=(input)=>{
    const searchResultsArray = ogMovies.filter(movie => (movie.title).toLowerCase().includes(input.toLowerCase()));
    console.log("this is the searchResultsArray: ",searchResultsArray)
    if(searchResultsArray.length==0){
      alert("Array is empty:(");
      console.log("og movies in search for movie titile :" , ogMovies)
      setOgMovies(searchResultsArray)
    }else{
      console.log("this is the searchResultsArray: ",searchResultsArray)
      setOgMovies(searchResultsArray)
    console.log(ogMovies)
    }
    
  }
  
  const sortMovies = (movies, sortType, reverse=false) => {    
    if (sortType === "title"){
      if(!reverse)
        movies.sort((a,b)=>a[sortType].localeCompare(b[sortType]))
      else
        movies.sort((a,b)=>b[sortType].localeCompare(a[sortType]))
      
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

  // setOgMovies(movies);
    setOgMovies([...movies])
  
  }
// const populateMoviesArray=()=>{
//   console.log("this is OGmovies:",ogMovies)
//   console.log("this is movies array before: ", movies)
  
//   //setOgMovies(ogMovies);
//   console.log("this is movies array after: ", movies)
// }

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




return (
    <div className="App">
      <Header className="App-header" resetToOGData={resetToOGData}/>
      <Routes>
          <Route path="/" element={<MovieSearch searchForMovieTitle={searchForMovieTitle} resetToOGData={resetToOGData}  />} />
          <Route path="movies" element={<MovieBrowser sampleMovie={ogMovies[1]} movies={ogMovies} faves={faves} favHandler={favHandler} searchForMovieTitle={searchForMovieTitle} sortMovies={sortMovies}/>} />
          <Route path="/:movieId" element={<MovieDetails />} />
          {/* <Route path="/:movieId" element={<MovieDetails ={ogMovies[1]} />} /> */}
      </Routes> 
    </div>
  );
}

export default App;
