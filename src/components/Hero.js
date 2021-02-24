import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchArea from './SearchArea';

class Hero extends Component {
   constructor() {
      super();
      this.state = {
         movies: [],
         searchTerm: '',
         totatlResults: 0,
         currentPage: 1,
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

   render() {

      return (
         <div className="Hero">
            <SearchArea
               handleSubmit={this.handleSubmit}
               handleChange={this.handleChange}
            />

            <MovieList movies={this.state.movies} />


         </div>
      );
   }
}

export default Hero;