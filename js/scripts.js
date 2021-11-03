function MovieList() {
  this.movies = {};
}

function Movie(age, time, newRelease, name) {
  this.age = age;
  this.time = time;
  this.new = newRelease;
  this.name = name;
}

MovieList.prototype.addMovie = function(movie) {
  this.movies[movie.name] = movie;
}

let testMovie = new Movie (13, "3:00pm", true, "Dune");
let testMovieList = new MovieList();
testMovieList.addMovie(testMovie);
// function AddressBook() {
//   this.contacts = {};
//   this.currentId = 0;
// }

// AddressBook.prototype.addContact = function(contact) {
//   this.contacts[contact.firstName] = contact;
// };