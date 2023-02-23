import React, { useState } from 'react';
import SearchForm from './SearchForm';
import YearForm from './YearForm';
import SelectForm from'./SelectForm';


const Filters = (props) => {
//     let selected;
//    // const [gSelection, setGSelection]= useState();
// const uniqueGenres = props.getAllGenres();
//   //console.log("this is in filters", props.uniqueGenres)
//    const handleGSelect =(event)=>{
//      //console.log(gSelection)
//      console.log(event.target.value)
//     // setGSelection(event.target.value);
//      //console.log(gSelection); // iTS currently like back one which kinda confuses me 
//     const selected=event.target.value; 
//     props.filteredGenres(selected);
//      //console.log("gfiltered in filters component: ", gfiltered);
//    }
  

    return ( 
        <div>
            <h1>
                Filters
            </h1>
            <div>
                <label>Title</label>
                <SearchForm searchForMovieTitle={props.searchForMovieTitle} />
                
                <label>Genre</label>
                <SelectForm movies={props.movies} onGenreSelect={props.onGenreSelect}/>
                <div>
                    Year
                    <YearForm movies={props.movies} filterYear={props.filterYear}/>
                </div>
            </div>
        </div>
    )
}
export default Filters