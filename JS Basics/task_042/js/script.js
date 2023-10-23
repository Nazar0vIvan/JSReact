/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  function deleteAdv() {
    let advs = document.querySelectorAll(".promo__adv img");
    advs.forEach((adv) => {
      adv.remove();
    });
  }

  function createMoviesList(moviesNames) {
    let moviesList = document.querySelector(".promo__interactive-list");
    moviesList.innerHTML = "";
    moviesNames.sort(); // 5

    moviesNames.forEach((movie, i) => {
      moviesList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${movie}
          <div class="delete"></div>
        </li>
      `;
    });

    // 3
    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMoviesList(moviesNames);
      });
    }); 
  }

  (function initPage() {
    deleteAdv();
    document.querySelector(".promo__genre").innerText = "ДРАМА";
    document.querySelector(".promo__bg").style.backgroundImage = "url('img/bg.jpg')";
    movieDB.movies.sort();
    createMoviesList(movieDB.movies);
  })();

  // 1
  (function createMovieAdditionFunctional() {
    const addForm = document.querySelector("form.add"),
          addInput = addForm.querySelector(".adding__input"),
          checkbox = addForm.querySelector("[type='checkbox']");

    addForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let newMovie = addInput.value;
      const favorite = checkbox.checked;

      if (newMovie) {
        // 2
        if (newMovie.length > 21) {
          newMovie = `${newMovie.substring(0, 22)}...`;
        }

        if (favorite) {
          console.log("Добавляем любимый фильм");
        }

        movieDB.movies.push(newMovie);
        movieDB.movies.sort();
        createMoviesList(movieDB.movies); 
      }

      event.target.reset();
    });
  })();
});