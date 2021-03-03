import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
   return (
      <div className='movie-container1'>
         {
            // props.movies.length > 0 && props.movies.slice(0, 12).map((movie, i) => {
            props.movies.map((movie) => {
               return (
                  <Movie
                     key={movie.id}
                     viewMovieInfo={props.viewMovieInfo}
                     movieId={movie.id}
                     image={movie.poster_path} />
               );
            })
         }
      </div>
   );
};

export default MovieList;
