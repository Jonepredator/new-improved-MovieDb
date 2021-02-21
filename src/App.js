import React, { useState, useEffect } from 'react';

import Movie from "./components/Movie";
import SearchContent from "./components/Movie";


const apiKey = 'fbf0238042e831e97ad243b9cf994e70';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing?&api_key=${apiKey}`;
const search_API = `${url}/search/movie?&api_key=${apiKey}&query=`;

function App() {
   const [movies, setMovies] = useState([]);
   const [searchedMovie, setSearchedMovie] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
      fetch(nowPlayingUrl)
         .then(res => res.json())
         .then(data => {
            setMovies(data.results);
         });
   }, []);

   const handleOnSubmit = (e) => {
      e.preventDefault();

      fetch(search_API + searchTerm)
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setSearchedMovie(data.results);
         });
      setSearchTerm('');
   };

   const handleOnChange = (e) => {
      setSearchTerm(e.target.value);
   };

   return (
      <>
         <header >
            <div className='container' >
               <form onSubmit={handleOnSubmit} >
                  <input
                     className='search'
                     type="search"
                     placeholder='Search...'
                     value={searchTerm}
                     onChange={handleOnChange}
                  />
               </form>
            </div>
         </header>

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

         <div className='movie-container2' >
            {searchedMovie.length > 0 && searchedMovie.slice(0, 12).map((movie) => (
               <SearchContent
                  key={movie.id}
                  {...movie} />
            ))}
         </div>
      </>
   );
}

export default App;
