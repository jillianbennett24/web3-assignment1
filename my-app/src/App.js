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
  const [faves, setFaves] = useState([]); 
  const [searchValue, setSearchValue]=useState('');
  const [movies, setMovies]=useState([]);

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
    const tempFaves = JSON.parse(localStorage.getItem("faves"));
    console.log(tempFaves)
    if(!faves && tempFaves){
      setFaves(tempFaves);
    }
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
    if(searchResultsArray.length==0){
      alert("Array is empty:(");
      setOgMovies('')
    }else{
      console.log("this is the searchResultsArray: ",searchResultsArray)
      setOgMovies(searchResultsArray)
    console.log(ogMovies)
    }
    
  }
  
  const sortMovies = (movies, sortType, reverse=false) => {    
    if(!reverse)
    movies.sort((a,b)=>a[sortType].localeCompare(b[sortType]))
    else
    movies.sort((a,b)=>b[sortType].localeCompare(a[sortType]))
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
    setFaves(newFaves);
  }else{
    // if it is not then add it 
    const newFaves = [...faves, movieId];
    console.log("faves after change", newFaves)
    localStorage.setItem("faves", JSON.stringify(newFaves));
    setFaves(newFaves);
  }
}




return (
    <div className="App">
      <Header className="App-header" />
      <Routes>
          <Route path="/" element={<MovieSearch searchForMovieTitle={searchForMovieTitle} resetToOGData={resetToOGData}/>} />
          <Route path="movies" element={<MovieBrowser sampleMovie={ogMovies[1]} movies={ogMovies} faves={faves} favHandler={favHandler}/>} />
          <Route path="/:movieId" element={<MovieDetails />} />
          {/* <Route path="/:movieId" element={<MovieDetails ={ogMovies[1]} />} /> */}
      </Routes> 
    </div>
  );
}

export default App;
