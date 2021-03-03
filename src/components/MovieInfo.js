import React from 'react';

import { FaArrowCircleLeft } from 'react-icons/fa';

const MovieInfo = (props) => {
   return (
      <div>
         <div>
            <div onClick={props.closeMovieInfo}>
               <i><FaArrowCircleLeft /></i>
               <span>go back</span>
            </div>
         </div>
         <div className='movie-info'>
            <div className='backdrop' >
               {
                  props.currentMovie.backdrop_path == null ? <img src={'https://www.calgaryhumane.ca/wp-content/uploads/2018/02/Coming-soon.jpg'} alt='card image' /> :
                     <img src={`https://image.tmdb.org/t/p/w1280${props.currentMovie.backdrop_path}`} alt='card image' />
               }
            </div>
            <div>
               <div>
                  <p>Movie Title: {props.currentMovie.original_title}</p>
                  <p>Release Date: {props.currentMovie.release_date}</p>
                  <p>Rating: {props.currentMovie.vote_average}</p>
                  <p>Plot: {props.currentMovie.overview}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MovieInfo;
