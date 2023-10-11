"use strict";

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const lastMovie = prompt("Один из последних просмотренных фильмов?","");
      const raiting = prompt("На сколько оцените его?","");
  
      if(lastMovie != null && raiting != null && lastMovie != "" && raiting != "" && lastMovie.length < 50){
        personalMovieDB.movies[lastMovie] = raiting;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман!");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 4; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
      if (genre == "" || genre == null) {
        console.log("Введены некорректные данные");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
      personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр #${i + 1} - это ${item}`);
      });
    }
  },
  toggleVisibleMyDB: function () {
    personalMovieDB.private = !personalMovieDB.private;
  },
};