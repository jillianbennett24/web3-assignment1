import MovieList from "./MovieList";
import FavoritesList from "./FavoritesList";
import Filters from "./Filters";

const MovieBrowser = (props) => {
    return (
        <div className="bg-[url('/res/pramod-tiwari-PIH_WAzHeIo-unsplash.jpg')] bg-cover min-h-screen flex items-center justify-center">
            <div className="flex justify-center w-full">
                <div className="w-screen px-4">
                    <div className="flex">
                        <div className="w-1/12 pr-4">
                            <div className="sticky top-0">
                                <Filters />
                            </div>
                        </div>
                        {/* <div className=" min-w-fit mx-auto flex-1 border-red-500 border-solid border-2"> */}
                            <MovieList movies={props.movies} faves={props.faves} favHandler={props.favHandler} sortMovies={props.sortMovies}/>
                        {/* </div> */}
                        <div className="min-w-1/12 pl-4">
                            <div className="sticky top-0">
                                <FavoritesList faves={props.faves} movies={props.movies}/>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>      
        </div>
    )};

export default MovieBrowser;