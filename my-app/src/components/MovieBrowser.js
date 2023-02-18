const MovieBrowser = (props) => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Movie Browser
               
            </h1>
            <p>this is the Movie title: {props.sampleMovie.title}</p>
        </div>
    )};

export default MovieBrowser;