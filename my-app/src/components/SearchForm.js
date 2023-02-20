import React, { useState } from 'react';


const SearchForm =()=>{
    const [searchValue, setSearchValue]=useState('');

    const searchChange =(event)=>{
        // console.log(event.target.value)
        setSearchValue(event.target.value);
    }
    const doSearch=(event)=>{
        event.preventDefault(); // tbh ask Joel to confirm what this does obvi it says what it does but you knwo 
    // Perform search using searchValue
    console.log('Searching for:', searchValue);
    // event.preventDefault();
    }


    return(
        <form onSubmit={doSearch}>
            <input name="searchInput" type="text" placeholder="Search for a movie" className="border-2 border-slate-400 rounded-md p-2 my-2 mt-10" value={searchValue} onChange={searchChange} />
            <button type="submit" value="Submit" className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-500 rounded mt-2 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 " >
                Search
            </button >
      </form>
    );
    
}
export default SearchForm;