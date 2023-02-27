import React, { useState } from 'react';
import MovieList from "./MovieList";
import FavoritesList from "./FavoritesList";
import Filters from "./Filters";

const MovieBrowser = (props) => {
    const [emptyResults, setEmptyResults]=React.useState(false);
    const [showFaves, setShowFaves] = useState(true);
    const [showFilters, setShowFilters] = useState(true);
    const [showFilterButton, setShowFilterButton] = useState(false);

    const toggleFaves = () => {
        setShowFaves(!showFaves);
    }

    const toggleFilters = () => {
        setShowFilters(!showFilters);
        
        setTimeout(() => {
            setShowFilterButton(!showFilterButton)
        }, 500);
    }

    const checkIfEmptyArray=()=>{
        if(props.movies.length==0){
            setEmptyResults(true)
            console.log("The movie props is empty ")
            return(!emptyResults && <MovieList movies={props.movies} faves={props.faves} favHandler={props.favHandler} sortMovies={props.sortMovies} />)
        }else{
            setEmptyResults(false)
        }
    }

    // setEmptyResults(props.currentMovies.length)

    return (
        <div className="bg-[url('/res/pramod-tiwari-PIH_WAzHeIo-unsplash.jpg')] bg-repeat-y min-h-screen flex items-center justify-center">
            <div className="flex justify-center w-full">
                <div className="w-screen px-4">
                    <div className="flex">
                        <div className="w-2/12 pr-4 mt-4">
                            {showFilterButton && 
                            <div className="sticky top-0">
                                <button className="bg-black text-gray-300 rounded-md p-2 opacity-40 hover:underline" onClick={toggleFilters}>Filters</button>
                            </div>}
                            <div className={`sticky top-0 w-full ransition-all duration-500 ease-in-out ${showFilters ? 'opacity-100' : 'opacity-0 -translate-x-full'}`}>
                                <Filters  currentMovies={props.currentMovies} 
                                        filterTitle={props.filterTitle} 
                                        filterRating={props.filterRating} 
                                        filterYear={props.filterYear} 
                                        searchForMovieTitle={props.searchForMovieTitle} 
                                        onGenreSelect={props.onGenreSelect} 
                                        movies={props.movies} 
                                        resetData={props.resetData} 
                                        toggleFilters={toggleFilters}
                                        />
                            </div>
                        </div>
                        {/* {console.log(emptyResults)} */}
                        {/* {checkIfEmptyArray} */}
                        {/* <span>hello {!!props.currentMovies.length} ???</span> */}
                        {emptyResults && <p>There are no matches based on your Search!</p>}
                        {!emptyResults && <MovieList movies={props.movies} faves={props.faves} favHandler={props.favHandler} sortMovies={props.sortMovies} />} 
                         {/* <MovieList movies={props.movies} faves={props.faves} favHandler={props.favHandler} sortMovies={props.sortMovies}/> */}
                        {/* </div> */}
                        <div className="min-w-1/12 pl-4 flex flex-col items-center">
                            <div className="-top-6 z-10 fixed">
                                {/* <button className="bg-black text-white rounded-md p-2" onClick={toggleFaves}>Toggle Faves</button> */}
                                <div className="mt-8 transition-all duration-300 transform translate-x-10 group">
                                    <h2 onClick={toggleFaves}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-auto hover:cursor-pointer text-green-500 group-hover:scale-125">
                                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                    </svg> 
                                    </h2>
                                </div>
                            </div>
                            <div className={`sticky top-0 transition-all duration-500 ease-in-out ${showFaves ? 'opacity-100' : 'opacity-0 translate-x-full'}`}>
                                <FavoritesList faves={props.faves} movies={props.movies} removeFav={props.favHandler} showFaves={showFaves} toggleFaves={toggleFaves}/>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>      
        </div>
    )};

export default MovieBrowser;