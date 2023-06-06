"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

const lastMovie1 = prompt("Один из последних просмотренных фильмов?",""),
      raiting1 = prompt("На сколько оцените его?",""),
      lastMovie2 = prompt("Один из последних просмотренных фильмов?",""),
      raiting2 = prompt("На сколько оцените его?","");


personalMoviewDB.movies[lastMovie1] = raiting1;
personalMoviewDB.movies[lastMovie2] = raiting2;

console.log(personalMovieDB);