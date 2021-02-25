import React from 'react';

import { FaArrowCircleLeft } from 'react-icons/fa';

const MovieInfo = (props) => {
   return (
      <div>
         <div onClick={props.closeMovieInfo}>
            <i><FaArrowCircleLeft /></i>
            <span>go back</span>
         </div>
         <div>
            {props.currentMovie.backdrop_path == null ? <img src={'https://www.calgaryhumane.ca/wp-content/uploads/2018/02/Coming-soon.jpg'} alt='card image' /> :
               <img src={`https://image.tmdb.org/t/p/w1280${props.currentMovie.backdrop_path}`} alt='card image' />}
         </div>
         <div>
            <div>
               <p>{props.currentMovie.title}</p>
               <p>{props.currentMovie.year}</p>
               <p>{props.currentMovie.vote_average}</p>
               <p>{props.currentMovie.overview}</p>
            </div>
         </div>
      </div>
   );
};

export default MovieInfo;
