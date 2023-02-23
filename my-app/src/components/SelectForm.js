import React, { useState } from 'react';

const SelectForm =(props)=>{
    const [selectedValue, setSelectedValue] = useState('');
   // const uniqueGenres = props.getAllGenres();

   // console.log(props.sampleMovie.title);
   // console.log("this is movies in selectForm: ", props.movies);
    //console.log(props)
    
    const getAllGenres =()=>{
        const originalMovies = JSON.parse(localStorage.getItem("allMovies"));
        const genres= originalMovies.map(movie => movie.details.genres).flat().map(genre=>genre ? genre.name : '')
        const uniqueGenres =[...new Set(genres)];
        uniqueGenres.sort((a,b)=>a.localeCompare(b));
        return (uniqueGenres)
    }

    const handleChange =(e)=>{
        console.log("lallala");
        console.log(selectedValue);
        setSelectedValue(e.target.value);
        console.log(selectedValue);
        //props.onGenreSelect(selectedValue);
        props.onGenreSelect(e.target.value);
    }
    return(
        <div>
            <label>Genre:</label>
           
            <select value={selectedValue} onChange={handleChange}>
                {getAllGenres().map((g,key)=>{return(<option value={g} key={key}>{g}</option>)})}
            </select>
        </div>
    )
}
export default SelectForm;