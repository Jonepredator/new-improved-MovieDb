import React, { Component } from 'react';
import MovieInfo from './MovieInfo';
import MovieList from './MovieList';
import Pagination from './Pagination';
import SearchArea from './SearchArea';

class Hero extends Component {
   constructor() {
      super();
      this.state = {
         movies: [],
         searchTerm: '',
         totatlResults: 0,
         currentPage: 1,
         currentMovie: null,

      };
      this.apiKey = 'fbf0238042e831e97ad243b9cf994e70';
   }

   handleSubmit = (e) => {
      e.preventDefault();
      fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${this.apiKey}&query=${this.state.searchTerm}`)
         .then(data => data.json())
         .then(data => {
            console.log(data);
            this.setState({ movies: [...data.results], totalResults: data.total_results });

         });
   };

   handleChange = (e) => {
      this.setState({ searchTerm: e.target.value });
   };

   nextPage = (pageNumber) => {
      fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
         .then(data => data.json())
         .then(data => {
            console.log(data);
            this.setState({ movies: [...data.results], currentPage: pageNumber });

         });
   };

   viewMovieInfo = (id) => {
      const filteredMovie = this.state.movies.filter(movie => movie.id == id);

      const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

      this.setState({ currentMovie: filteredMovie });
   };

   closeMovieInfo = () => {
      this.setState({ currentMovie: null });
   };

   render() {
      const numberPages = Math.floor(this.state.totalResults / 20);

      return (
         <div className="Hero">
            {this.state.currentMovie == null ?
               <div>
                  <SearchArea
                     handleSubmit={this.handleSubmit}
                     handleChange={this.handleChange}
                  />
                  <MovieList
                     viewMovieInfo={this.viewMovieInfo}
                     movies={this.state.movies}
                  />
               </div>
               :
               <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />
            }

            { this.state.totalResults > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ''}

         </div>
      );
   }
}

export default Hero;