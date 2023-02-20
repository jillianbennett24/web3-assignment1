import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const searchInput = React.createRef() //this is the react equivalent to query selector 

const SearchForm =(props)=>{
    const doSearch=()=>{
       console.log('Searching for:', searchInput.current.value);
       props.searchForMovieTitle(searchInput.current.value);
    }
    return(
        // <div>
        //     <input name="searchInput" ref={searchInput} type="text" placeholder="Search for a movie" className="border-2 border-slate-400 rounded-md p-2 my-2 mt-10" />
        //     <Link to="/movies" onClick={doSearch} >
        //     <button type="button" value="" className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-500 rounded mt-2 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 " >
        //         Search
        //     </button >
        //     </Link>
        // </div>
        <div>
            <input name="searchInput" ref={searchInput} onChange={doSearch} type="text" placeholder="Search for a movie" className="border-2 border-slate-400 rounded-md p-2 my-2 mt-10" />
            <Link to="/movies"  >
            <button type="button" value="" className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-500 rounded mt-2 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 " >
                Search
            </button >
            </Link>
        </div>
    );
}


export default SearchForm;