import React from 'react';

const posterURL = 'https://image.tmdb.org/t/p/w1280/';

const SearchContent = ({ title, poster_path, overview, vote_average }) => (
   <div className='movie'>
      <img src={posterURL + poster_path} alt={title} />
      <div className='movie-info'>
         <h3>{title}</h3>
         <span>{vote_average}</span>
      </div>

      <div className='movie-over'>
         <h2>Overview:</h2>
         <p>{overview}</p>
      </div>
   </div>
);

export default SearchContent;
