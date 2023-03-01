import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
// loading gif from https://uxplanet.org/using-loading-animation-on-websites-and-apps-examples-and-snippets-to-use-cab0097be9f1
import loadingGif from '../1_e_Loq49BI4WmN7o9ItTADg.gif'

const MovieSearch = (props) => {
    
    return (
        <div className="bg-[url('/res/pramod-tiwari-PIH_WAzHeIo-unsplash.jpg')] bg-cover min-h-screen">
            {/* layout structure from https://dev.to/codeply/helpful-page-layouts-using-tailwind-css-1a3k */}
            <div className="container mx-auto h-[48rem] max-h-[700px]">
                <div className="flex flex-row flex-wrap py-4 h-full">
                    <aside className="w-full sm:w-1/3 md:w-1/4 px-2 bg-black bg-opacity-40 rounded-md">
                        {/* // display regular home view when not fetching movie data */}
                        {!props.isLoading && 
                        <div className="sticky top-0 p-4 w-full">
                            {/* <!-- navigation --> */}
                            <div className="flex flex-col overflow-hidden items-center">
                                {/* h1 css recipe by Jason Weaver "Classic Dark" https://wdexplorer.com/20-examples-beautiful-css-typography-design/ */}
                                <h1 className="text-gray-300 font-sans font-light text-4xl leading-10 tracking-widest pb-10 border-b-2 border-double border-gray-500">
                                    Movie Search
                                </h1>
                                {/* button style from https://v1.tailwindcss.com/components/buttons
                                button animation from https://tailwind-elements.com/docs/standard/components/buttons/ */}
                                <Link to="/movies" onClick={props.resetData}>
                                    <button className="text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded w-32 mt-10 bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0">
                                        Browse All
                                    </button>
                                </Link>
                                <SearchForm filterTitle={props.filterTitle} />
                            </div>
                        </div>}
                        {/* // display loading gif when fetching movie data */}
                        {props.isLoading && 
                        <div>
                            <img src={loadingGif} title={loadingGif} alt={'Fetching Data...'} className="opacity-40 w-full"/>
                            <p className="text-white opacity-60">Reticulating Splines...</p>
                        </div>}
                    </aside>
                    <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
                        
                    </main>
                </div>
            </div>
            {/* // background photo credit */}
            <footer className="mt-auto">
                <p className="text-slate-400"> 
                Photo by <a href="https://unsplash.com/@pramodtiwari?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pramod Tiwari</a> on <a href="https://unsplash.com/photos/PIH_WAzHeIo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </p>
            </footer>
        </div>
    )};

    export default MovieSearch;