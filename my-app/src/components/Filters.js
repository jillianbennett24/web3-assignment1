import React, { useState } from 'react';
import SearchForm from './SearchForm';
import YearForm from './YearForm';
import SelectForm from'./SelectForm';
import RatingForm from './RatingForm';


const Filters = (props) => {
    const [selectedFilter,setSelectedFilter]=React.useState('');
  

    return ( 
        <div>
            <h1> Filters </h1>
            <label>Select your Filter:</label>
            <select value={selectedFilter} onChange={(e)=>{setSelectedFilter(e.target.value)}}>
                <option value="title">Title</option>
                <option value="genre">Genre</option>
                <option value="date">Date</option>
                <option value="rating">Rating</option>
            </select>
            {selectedFilter==="title" ? <SearchForm searchForMovieTitle={props.searchForMovieTitle} /> : null}
            {selectedFilter==="genre" ?  <SelectForm movies={props.movies} onGenreSelect={props.onGenreSelect}/> : null}
            {selectedFilter==="date" ?  <YearForm movies={props.movies} filterYear={props.filterYear}/> : null}
            {selectedFilter==="rating" ? <RatingForm movies={props.movies} /> : null}
        </div>
    )
}
export default Filters