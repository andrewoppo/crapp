import React, { Component } from "react";
import ImprovedCard from "./ImprovedCard";

class DynamicMoviesList extends Component {
  state = {
    movies: [
      { id: "fUbJPciPq", title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
      { id: "EXN9npPlo",  title: "Star Wars", director: "Rian Johnson" , hasOscars: true, IMDbRating: 8.7 },
      { id: "lecqGHnAb",  title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
  ]
  }

  deleteMovieHandler = id => {
    const moviesCopy = [...this.state.movies];
    const movieIndex = moviesCopy.findIndex(item => item.id === id);
    moviesCopy.splice(movieIndex, 1);
    console.log('moviesCopy: ', moviesCopy)
    this.setState({
      movies: moviesCopy
    })
  }
  render() {
    console.log(this.state.movies);
    return (
      <div>
        {
          this.state.movies.map(item => {
              return <ImprovedCard key={item.id} {...item} clickToDelete={() => this.deleteMovieHandler(item.id)}/>
          })
        }
      </div>
    );
  }
}

export default DynamicMoviesList;
