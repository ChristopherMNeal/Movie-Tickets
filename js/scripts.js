// Business Logic for MovieList
function MovieList() {
  this.movies = {};
  this.currentId = 0;
}

MovieList.prototype.addMovie = function(movie) {
  movie.id = this.assignId();
  this.movies[movie.id] = movie;
};

MovieList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

MovieList.prototype.findMovie = function(id) {
  if (this.movies[id] != undefined) {
    return this.movies[id];
  }
  return false;
};

MovieList.prototype.deleteMovie = function(movie) {
  if (this.movies[id] === undefined) {
    return false;
  }
  delete this.movies[id];
  return true;
};

// Business Logic for Movie
function Movie(rating, time, newRelease, name, price) {
  this.rating = rating;
  this.time = time;
  this.newRelease = newRelease;
  this.name = name;
  this.price = price;
}

Movie.prototype.time12hr = function() {
  if (this.time < 1300) {
    return this.time + "am";
  } else {
    return (this.time - 1200) + "pm";
  }
};

Movie.prototype.movieListing = function() {
  return this.name + " " + this.rating + " " + this.time12hr();
};

// Movie storage
let dune = new Movie("PG-13", 1500, true, "Dune", 10);
let bMovie = new Movie("G", 1100, false, "B Movie", 10);
let theGoonies = new Movie ("PG", 1800, false, "The Goonies", 10);
let faceOff = new Movie ("R", 2100, false, "Face Off", 10 );
let spiceWorld = new Movie ("PG", 1330, false, "Spice World", 10);

// UI Logic
let movieList = new MovieList();
movieList.addMovie(dune);
movieList.addMovie(bMovie);
movieList.addMovie(theGoonies);
movieList.addMovie(faceOff);
movieList.addMovie(spiceWorld);

// let yourPrice = 0;
// yourPrice = yourPrice + thatMovie.price;

// let yourTicket = new Movie('', '', 0, 0)
// yourTicket.rating = dune.Rating
// thisGuy = function(input) {
//   return input + 5
// }
// thisGuy = (input => input + 5)
// alltheMovies = [movie1, movie2]
// alltheMovies.fiilter(movie => movie.time < 1000)
// alltheMovies.forEach(funtion(movie {
//   let newArray=[];
//   if (movie.time < 1000){
//     nwearray.push(movie)
// }
//   return newArray;
// }))
// const result = words.filter(word => word.length > 6);
movieList.movies.filter(function(movie) {
  movie.price;
})

// Movie List price calculations
availableMovies = function() {
  Object.keys(movieList.movies).forEach(function(key) {
    let availablemovie = movieList.movies[key];
    if (movieList.movies[key].time <= 1400) {
      availablemovie.price -= 2;
    }
    if ($("#age-input").val() > 64) {
      availablemovie.price -= 3;
    } 
    if (movieList.movies[key].newRelease) {
      availablemovie.price += 4;
    }
    $("#movieDetails").text(availablemovie.name);
    $("#movieDetails").text(availablemovie.rating);
    $("#movieDetails").text(availablemovie.time);
    $("#movieDetails").text(availablemovie.price);
  });
}

// adjustPrice = function() {
//   Object.keys(movieList.movies).forEach(function(key) {
//     if (movieList.movies[key].time <= 1400) {
//       movieList.movies[key].price -= 2;
//     }
//     if ($("#age-input").val() > 64) {
//       movieList.movies[key].price -= 3;
//     } 
//     if (movieList.movies[key].newRelease) {
//       movieList.movies[key].price += 4;
//     }
//   });
// }

$(document).ready(function() {
  $("#movie-input").submit(function(event) {
    event.preventDefault();
    let userAge = $("#age-input").val();
    
  });
});

base price =10;
morn -2;
youth -2;
senior -3;