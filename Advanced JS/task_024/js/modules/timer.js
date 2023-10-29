"use strict";

function timer(id, deadline) {
  // TIMER

  function appendZero(num) {
    return num >= 0 && num < 10 ? `0${num}` : num;
  }

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const total = Date.parse(endtime) - Date.parse(new Date());

    if (total <= 0) {
      days = hours = minutes = seconds = 0;
    } else {
      days = Math.floor(total / (1000 * 60 * 60 * 24));
      hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((total / (1000 * 60)) % 60);
      seconds = Math.floor((total / 1000) % 60);
    }

    return { total, days, hours, minutes, seconds };
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock(); // clock init

    function updateClock() {
      const remainingTime = getTimeRemaining(endtime);

      days.innerHTML = appendZero(remainingTime.days);
      hours.innerHTML = appendZero(remainingTime.hours);
      minutes.innerHTML = appendZero(remainingTime.minutes);
      seconds.innerHTML = appendZero(remainingTime.seconds);

      if (remainingTime.total <= 0) clearInterval(timeInterval);
    }
  }

  setClock(id, deadline);
}

export default timer;
