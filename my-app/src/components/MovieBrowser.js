import MovieList from "./MovieList";

const MovieBrowser = (props) => {
    return (
        <div className="bg-[url('/res/pramod-tiwari-PIH_WAzHeIo-unsplash.jpg')] bg-cover min-h-screen flex items-center justify-center">
            {/* <h1 className="text-3xl font-bold underline">
                Movie Browser
               
            </h1>
            <p>this is the Movie title: {props.sampleMovie.title}</p>
            <p>{JSON.stringify(props.sampleMovie)}</p> */}
            <MovieList movies={props.movies} />
        </div>
    )};

export default MovieBrowser;