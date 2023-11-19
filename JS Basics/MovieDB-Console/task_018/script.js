"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  const lastMovie = prompt("Один из последних просмотренных фильмов?", ""),
    raiting = prompt("На сколько оцените его?", "");

  if (lastMovie != null && raiting != null && lastMovie != "" && raiting != "" && lastMovie.length < 50) {
    personalMovieDB.movies[lastMovie] = raiting;
  } else {
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман!");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);
