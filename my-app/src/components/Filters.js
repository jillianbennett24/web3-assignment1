import React, { useState } from 'react';
import SearchForm from './SearchForm';
import YearForm from './YearForm';
import SelectForm from'./SelectForm';
import RatingForm from './RatingForm';
import SearchTitleForm from './SearchTitleForm';


const Filters = (props) => {
    const [selectedFilter,setSelectedFilter]=React.useState('');
  
    const removeAllFilters=()=>{
        props.resetData();
    }
    return ( 
        <div>
            <h1> Filters </h1>
            <label>Select your Filter:</label>
            <select value={selectedFilter} onChange={(e)=>{setSelectedFilter(e.target.value)}}>
                <option value="title">Title</option>
                <option value="title2">Title2</option>
                <option value="genre">Genre</option>
                <option value="date">Date</option>
                <option value="rating">Rating</option>
            </select>
            {selectedFilter==="title2"? <SearchTitleForm filterTitle={props.filterTitle}/> : null}
            {selectedFilter==="title" ? <SearchForm searchForMovieTitle={props.searchForMovieTitle} /> : null}
            {selectedFilter==="genre" ?  <SelectForm movies={props.movies} onGenreSelect={props.onGenreSelect}/> : null}
            {selectedFilter==="date" ?  <YearForm movies={props.movies} filterYear={props.filterYear}/> : null}
            {selectedFilter==="rating" ? <RatingForm filterRating={props.filterRating}/> : null}
            <button type="button" onClick={removeAllFilters} className="px-4 py-2 font-medium text-white bg-green-500 rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Remove All Filters</button>
        </div>
    )
}
export default Filters