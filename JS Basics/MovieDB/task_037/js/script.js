"use strict";

const movieDB = {
  movies: ["Логан", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против..."],
};

// 1
(function deleteAdv() {
  let advs = document.querySelectorAll(".promo__adv img");
  advs.forEach((adv) => {
    adv.remove();
  });
})();

// 2
document.querySelector(".promo__genre").innerText = "ДРАМА";

// 3
document.querySelector(".promo__bg").style.backgroundImage = "url('img/bg.jpg')";

// 4 + 5
function changeMoviesList(moviesNames) {
  let moviesList = document.querySelector(".promo__interactive-list");
  moviesList.innerHTML = "";
  moviesNames.sort().forEach((movie, i) => {
    moviesList.innerHTML += `
      <li class="promo__interactive-item">${i + 1} ${movie}
        <div class="delete"></div>
      </li>
    `;
  });
}

changeMoviesList(movieDB.movies);
