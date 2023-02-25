import React, { useState } from 'react';
import MovieList from "./MovieList";
import FavoritesList from "./FavoritesList";
import Filters from "./Filters";

const MovieBrowser = (props) => {
    const [emptyResults, setEmptyResults]=React.useState(false);
    const checkIfEmptyArray=()=>{
        if(props.movies.length==0){
            setEmptyResults(true)
            console.log("The movie props is empty ")
            return(!emptyResults && <MovieList movies={props.movies} faves={props.faves} favHandler={props.favHandler} sortMovies={props.sortMovies} />)
        }else{
            setEmptyResults(false)
        }
    }
    return (
        <div className="bg-[url('/res/pramod-tiwari-PIH_WAzHeIo-unsplash.jpg')] bg-cover min-h-screen flex items-center justify-center">
            <div className="flex justify-center w-full">
                <div className="w-screen px-4">
                    <div className="flex">
                        <div className="w-2/12 pr-4 mt-4">
                            <div className="sticky top-0 w-full">
                                <Filters  sampleMovie={props.sampleMovie} filterTitle={props.filterTitle} filterRating={props.filterRating} filterYear={props.filterYear} searchForMovieTitle={props.searchForMovieTitle}  onGenreSelect={props.onGenreSelect} movies={props.movies} resetData={props.resetData}/>
                            </div>
                        </div>
                        {console.log(emptyResults)}
                        {checkIfEmptyArray}
                        {!emptyResults && <MovieList movies={props.movies} faves={props.faves} favHandler={props.favHandler} sortMovies={props.sortMovies} />} 
                         {/* <MovieList movies={props.movies} faves={props.faves} favHandler={props.favHandler} sortMovies={props.sortMovies}/> */}
                        {/* </div> */}
                        <div className="min-w-1/12 pl-4">
                            <div className="sticky top-0">
                                <FavoritesList faves={props.faves} movies={props.movies} removeFav={props.favHandler}/>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>      
        </div>
    )};

export default MovieBrowser;