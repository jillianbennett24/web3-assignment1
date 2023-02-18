import React from 'react';

// const MovieDetails = ({ movie }) => {
//   return (
//     <div>
//       <h2>{movie.title}</h2>
//       <p>{movie.overview}</p>
//     </div>
//   );
// }
const MovieDetails = (props) => {
  return (
    <div>
      <h2>{props.movie.title}</h2>
      <p>{props.movie.details.overview}</p>
    </div>
  );
}

export default MovieDetails;