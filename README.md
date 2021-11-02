Create a webpage where a user can select 
  - the name of a movie, 
  - the time of day that they would like to see the movie 
  - and their age. 
UI * (user input form to collect name of movie, time of day, and age)

The webpage should let them know 
  -how much their movie ticket will cost, based on those three factors. 
  (Consider that non-"first-release" movies, matinee and senior tickets tend to be cheaper than the regular priced ticket.)
UI * Return Info
    - cost of ticket 

-Your constructor and prototype could be called Ticket 
-you can come up with the formula for determining how the price is calculated depending on the input from the user.
* constructor Ticket
* prototype Ticket
* formula for determining price (name, time, and age)


UI Logic:
* (user input form to collect name of movie, time of day, and age)
* Return Info
    - cost of ticket

Business Logic:
* constructor (Ticket) - Blueprint for database movies:
    - Age
    - Time
    - New
    - Name
* prototype (Ticket)
* formula for determining price (name, time, and age)

age movie rating:
  if (age >= 13) {
    return "rated G"
  } else if (age <= 14 && >= 17) {
    return "rated PG"
  } else if (age <= 18+) {
    return "rated R"
  }
  * will need function for age range

    1. check to see if they are old enough to see movie

time:
  if (afternoon === matinee) {
    return true;
  } else {
    return false (evening === not matinee);
  }

New Release:
  if (new movie === true) {
    return higher price
  }

name:
  * Dune (new movie)
  * The Fifth Element
  * Time Bandits
  * Strange Days

Formula:
  Baseline price (10)

    Boolean-----
    matinee = -2
    evening = 0

    Boolean-----
    new release = +2
    old = 0

    Boolean-----
    age is senior = -2
    age is normal = 0

1. create a constructor for the movies within our mock database (Movie)
2. create a constructor for our mock database (MoviesList)
3. Create function to assign each movie by it's name
4. create a prototype for movie object age requirement
5. create a prototype to check if a movie is playing in he evening or afternoon
6. Create function to assign each movie by it's name

Describe Movie()

Test: "It should return movie details when movie is added "
Code:
let testMovie = new Movie (13, "3:00pm", "Dune");
Expected:
testMovie(13,"3:00pm","Dune")

Describe MoviesList()

Test: "It should return a object with another object with a list of movies when a movie is added"
Code:
let newmovie = movie(rating, time, name);
Expected:
test movie list object[movie object]

Describe movie.prototype.findmovie function()

Test: "It should return a movie name the movie searching the list object"
Code:
let Dune = new Movie(rating, time, name);
console.log(movieslist);
Expected:
movieslist ["Dune", "Madagascar", "Call me bu your name",];




<!-- AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
}; -->


Test:
Code:
Expected:

Test:
Code:
Expected:

Test:
Code:
Expected:

Test:
Code:
Expected: