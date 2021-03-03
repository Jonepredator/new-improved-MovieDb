import React from 'react';

const Movie = ({ image, viewMovieInfo, movieId }) => {
   return (
      <div className='movie'>
         <div>
            {
               image == null ? <img src={`https://www.calgaryhumane.ca/wp-content/uploads/2018/02/Coming-soon.jpg`} alt='card image' /> : <img src={`https://image.tmdb.org/t/p/w1280${image}`} alt='card image' />
            }
         </div>
         <div className='movie-info'>
            <p>
               <a href="#" onClick={() => viewMovieInfo(movieId)} >View more</a>
            </p>
         </div>
      </div>
   );
};

export default Movie;
