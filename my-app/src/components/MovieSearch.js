const MovieSearch = () => {
    const styles = {
        'background-image': "url('../res/pramod-tiwari-PIH_WAzHeIo-unsplash.jpg')",
    }
    return (
        <div className="bg-[url('/res/pramod-tiwari-PIH_WAzHeIo-unsplash.jpg')] bg-cover h-screen">
        {/* <div> */}
            <h1 className="text-3xl font-bold underline text-slate-50">
                Movie Search
            </h1>
            <p className="text-slate-400"> 
            Photo by <a href="https://unsplash.com/@pramodtiwari?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pramod Tiwari</a> on <a href="https://unsplash.com/photos/PIH_WAzHeIo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </p>
        </div>
    )};

    export default MovieSearch;