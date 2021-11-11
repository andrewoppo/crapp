import React, { Component } from "react";
import ImprovedCard from "./ImprovedCard";
import AddMovie from './AddMovie';

class DynamicMoviesList extends Component {
  state = {
    movies: [
      { id: "fUbJPciPq", title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
      { id: "EXN9npPlo",  title: "Star Wars", director: "Rian Johnson" , hasOscars: true, IMDbRating: 8.7 },
      { id: "lecqGHnAb",  title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
  ],
  showOscarAwarded: false
  }

  toggleMovies = () => {
    this.setState({ showOscarAwarded: !this.state.showOscarAwarded})
  }

  addMovieHandler = (theMovie) => {
    const moviesCopy = [...this.state.movies]; // copy!
    
    moviesCopy.push(theMovie);
    
    this.setState({
      movies: moviesCopy
    })
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
    const {showOscarAwarded} = this.state;
    const filteredMovies = this.state.movies.filter(movie => movie.hasOscars === showOscarAwarded);
    return (
      <div>
        <AddMovie addTheMovie={this.addMovieHandler}/>
        {
          filteredMovies.map(item => {
              return <ImprovedCard key={item.id} {...item} clickToDelete={() => this.deleteMovieHandler(item.id)}/>
          })
        }
        <button onClick={() => this.toggleMovies() }>
                    {showOscarAwarded ? 'Hide Oscar Awarded' : 'Show Oscar Awarded'}
                </button>
      </div>
    );
  }
}

export default DynamicMoviesList;
