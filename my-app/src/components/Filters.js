import React, { useState } from 'react';
import SearchForm from './SearchForm';
import YearForm from './YearForm';
import SelectForm from'./SelectForm';
import RatingForm from './RatingForm';
import SearchTitleForm from './SearchTitleForm';
import { HiX } from 'react-icons/hi';


const Filters = (props) => {
    const [selectedFilter,setSelectedFilter]=React.useState('title');
    const [filtersVisible,setFiltersVisible]=React.useState(true);
  
    const removeAllFilters=()=>{
        props.resetData();
    }
    
    const toggleFilters=()=>{
        setFiltersVisible(!filtersVisible);
        
    }

    return ( 
        <aside className={`w-full px-2 bg-black bg-opacity-40 rounded-md transition-all duration-500 ease-in-out ${filtersVisible ? 'opacity-100' : 'opacity-0 -translate-x-full'}`}>
            <div className="w-full p-4">
                <div className="flex flex-col items-center">
                    {/* <div className='flex justify-end'> */}
                        <div className={`relative left-24 bottom-4 w-fit p-1 cursor-pointer rounded z-1 -mb-6`}>
                            <HiX size={20} className="text-white hover:bg-red-500" onClick={props.toggleFilters}/>
                        </div>
                    {/* </div> */}
                    <h1 className='text-gray-300 font-sans font-light text-4xl leading-10 tracking-widest pb-10 border-b-2 border-double border-gray-500'> 
                        Filters
                    </h1>
                    <label className="block mb-2 text-gray-400 mt-2">Filter:</label>
                    <select value={selectedFilter} onChange={(e)=>{setSelectedFilter(e.target.value)}}
                            className="px-3 py-2 mb-4 text-gray-900 bg-white border border-gray-400 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                        {/* <option value="title">Title</option> */}
                        <option value="title">Title</option>
                        <option value="genre">Genre</option>
                        <option value="year">Year</option>
                        <option value="rating">Rating</option>
                    </select>
                    {selectedFilter==="title"? <SearchTitleForm filterTitle={props.filterTitle}/> : null}
                    {/* {selectedFilter==="title" ? <SearchForm searchForMovieTitle={props.searchForMovieTitle} /> : null} */}
                    {selectedFilter==="genre" ?  <SelectForm movies={props.movies} onGenreSelect={props.onGenreSelect}/> : null}
                    {selectedFilter==="year" ?  <YearForm movies={props.movies} filterYear={props.filterYear}/> : null}
                    {selectedFilter==="rating" ? <RatingForm filterRating={props.filterRating}/> : null}
                    <button type="button" onClick={removeAllFilters} className="inline-block px-4 py-2 text-white font-bold bg-green-500 rounded-md shadow-sm border-b-4 border-green-600 hover:border-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                        Clear
                    </button>
                </div>
            </div>
        </aside>
    )
}
export default Filters