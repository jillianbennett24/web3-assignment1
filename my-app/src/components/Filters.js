import React, { useState } from 'react';
import SearchForm from './SearchForm';

const Filters = (props) => {
    
    return (
        <div>
            <h1>
                Filters
            </h1>
            <div>
                <label>Title</label>
                <SearchForm searchForMovieTitle={props.searchForMovieTitle} />
                <div>
                    genre
                    <select>
                        <option> Hey </option>
                        <option> Whats Up </option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default Filters