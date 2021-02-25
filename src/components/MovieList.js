import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
   return (
      <div className='movie-container1'>
         {
            // props.movies.length > 0 && props.movies.slice(0, 12).map((movie, i) => {
            props.movies.map((movie, i) => {
               return (
                  <MovieCard
                     key={i}
                     viewMovieInfo={props.viewMovieInfo}
                     movieId={movie.Id}
                     image={movie.poster_path} />
               );
            })
         }
      </div>
   );
};

export default MovieList;
