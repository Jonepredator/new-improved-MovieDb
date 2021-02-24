import React from 'react';

const movieCard = (props) => {
   return (
      <div className='movie'>
         <div>
            {
               props.image == null ? <img src={`https://www.calgaryhumane.ca/wp-content/uploads/2018/02/Coming-soon.jpg`} alt='card image' /> : <img src={`https://image.tmdb.org/t/p/w1280${props.image}`} alt='card image' />
            }
         </div>
         <div className='movie-info'>
            <p>
               <a href="#">View more</a>
            </p>
         </div>
      </div>
   );
};

export default movieCard;
