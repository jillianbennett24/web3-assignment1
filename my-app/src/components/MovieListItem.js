const MovieListItem = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w92/${movie.poster}`;
  return (<tr>
            <td className="px-6 py-4 whitespace-nowrap bg-black bg-opacity-10">
              <img src={posterUrl} alt={movie.title} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
              {movie.title}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {movie.release_date.slice(0,4)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {movie.ratings.average}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {movie.ratings.popularity.toFixed()}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {/* heart icon from heroicons.com */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex items-center justify-center ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              {/* filled heart */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg> */}
            </td>
          </tr>
  )
}
export default MovieListItem;