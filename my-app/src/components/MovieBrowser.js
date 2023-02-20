import MovieList from "./MovieList";
import FavoritesList from "./FavoritesList";
import Filters from "./Filters";

const MovieBrowser = (props) => {
    console.log('MovieBrowser props',props)
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
                        <div className="mx-auto min-w-fit flex-1 overflow-y-auto">
                            <MovieList movies={props.movies} faves={props.faves} favHandler={props.favHandler}/>
                        </div>
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