import React, { useState, useEffect } from 'react';

import Movie from './components/Movie';


const apiKey = 'fbf0238042e831e97ad243b9cf994e70';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing?&api_key=${apiKey}`;

function App() {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      fetch(nowPlayingUrl)
         .then(res => res.json())
         .then(data => {
            setMovies(data.results);
         });
   }, []);

   return (
      <>
         <header>search bar will be here with an icon</header>

         <div className="headline">
            <h1>Now Playing</h1>
         </div>

         <div className='movie-container1' >

            {movies.length > 0 && movies.slice(0, 6).map((movie) => (
               <Movie
                  key={movie.id}
                  {...movie} />
            ))}
         </div>
      </>
   );
}

export default App;