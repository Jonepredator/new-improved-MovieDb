import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';

import Movie from "./components/Movie";
import Navbar from './components/Nav';


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
         <header >
            <Navbar />
         </header>

         <div className="headline">
            <h1>Now Playing</h1>
         </div>

         <div className='movie-container1' >
            {movies.length > 0 && movies.slice(0, 7).map((movie) => (
               <Movie
                  key={movie.id}
                  {...movie} />
            ))}
         </div>
         <Hero />
      </>
   );
}

export default App;
