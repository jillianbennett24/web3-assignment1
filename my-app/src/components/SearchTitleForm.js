import React,{useState} from 'react';

const SearchTitleForm =(props)=>{
    const [searchTitle, setSearchTitle]=useState('')

    const clicked =()=>{
        console.log("you clicked the button!")
        console.log(searchTitle);
        props.filterTitle(searchTitle);
        // props.searchForMovieTitle(searchTitle);
    }
    return(
        <div>
             <input name="searchInput" 
                    onChange={(e)=>{setSearchTitle(e.target.value)}} 
                    type="text" 
                    placeholder="Movie Title" 
                    className="border-2 border-slate-400 rounded-md p-2 my-2 mt-10" />
             <button type="button" onClick={clicked}className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 mb-4 border-b-4 border-blue-600 hover:border-blue-700 rounded-md mt-4 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 " >
                Search Title
            </button>
        </div>
    )
}
export default SearchTitleForm;