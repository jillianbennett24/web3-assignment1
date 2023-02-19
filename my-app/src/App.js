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
  useEffect( ()=>{
    if(ogMovies.length <= 0){
      // first retrieve from local storage 
      const temp = localStorage.getItem("Key");
      // if it there?
      if(temp){
        const mdata = JSON.parse(temp);
        setOgMovies(mdata);
      }else{
        // if we dont have data then we need to fetch it 
        fetch("https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=20")
        .then(resp=>resp.json())
        .then(data=>{
          // save in local storage 
          localStorage.setItem("Key", JSON.stringify(data))
          // set to movie state 
          setOgMovies(data);
        })
      }
    }
  })
//     const getData = async ()=> {
//       if

//     }
//   })
//   if (!localStorage.getItem("movies")) {
//     const api = "https://www.randyconnolly.com/funwebdev/3rd/api/music/songs-nested.php";
//     fetch(api)
//         .then(res => res.json())
//         .then(data => {
//             loadData(data)
//         })
// }
//   useEffect(  () => {
//     const getData = async () => {
//       try {
//         const url = "https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php?iso=gb";
//         const response = await fetch(url);
//         const data = await response.json();
//         setPhotos(data);
//       }
//       catch (err) {
//         console.error(err);
//       }
//     };
//     // invoke the async function
//     getData();
//   }, [] );
return (
    <div className="App">
      <Header className="App-header" />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
     <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="movies" element={<MovieBrowser sampleMovie={ogMovies[1]} />} />
        <Route path="/:movieId" element={<MovieDetails />} />
        {/* <Route path="/:movieId" element={<MovieDetails ={ogMovies[1]} />} /> */}
     </Routes> 
    </div>
  );
}

export default App;
