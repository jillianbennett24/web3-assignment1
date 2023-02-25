import React, { useState } from 'react';

const SelectForm =(props)=>{
    const [selectedValue, setSelectedValue] = useState('');
   

    /** this function gets all the unique genres from the movie lists by getting
     *  all genres then filtering through them so there is no repeat genres listed
     * 
     * @returns uniqueGenres - an array with all the unique genres in the movies list 
     */
    const getAllGenres =()=>{
        const originalMovies = JSON.parse(localStorage.getItem("allMovies"));
        const genres= originalMovies.map(movie => movie.details.genres).flat().map(genre=>genre ? genre.name : '')
        const uniqueGenres =[...new Set(genres)];
        uniqueGenres.sort((a,b)=>a.localeCompare(b));
        return (uniqueGenres)
    }
    /** this function handles the onchange of the select list for genres and sets the new state to
     * the selected genre and then sends back the selected value to the onGenreSelect function in app 
     * 
     * @param {*} e the event of the select genre select drop down list 
     */
    const handleChange =(e)=>{
        console.log(selectedValue);
        setSelectedValue(e.target.value);
        console.log(selectedValue);
        //props.onGenreSelect(selectedValue);
        props.onGenreSelect(e.target.value);
    }
    return(
        <div>
            <label className='block mb-2 text-gray-400'>
                Genre:
            </label>
            <select value={selectedValue} onChange={handleChange} className="w-full mb-4 py-2 px-4 rounded-md text-gray-700">
                {getAllGenres().map((g,key)=>{return(<option value={g} key={key}>{g}</option>)})}
            </select>
        </div>
    )
}
export default SelectForm;