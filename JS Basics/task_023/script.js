"use strict";

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const lastMovie = prompt("Один из последних просмотренных фильмов?", "");
    const raiting = prompt("На сколько оцените его?", "");

    if (lastMovie != null && raiting != null && lastMovie != "" && raiting != "" && lastMovie.length < 50) {
      personalMovieDB.movies[lastMovie] = raiting;
    } else {
      i--;
    }
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман!");
  } else {
    console.log("Произошла ошибка");
  }
}

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
    if (genre == "" || genre == null) {
      --i;
    } else {
      personalMovieDB.genres[i - 1] = genre;
    }
  }
}

start();
rememberMyFilms();
detectPersonalLevel();

showMyDB(personalMovieDB.private);
writeYourGenres();

console.log(personalMovieDB);
