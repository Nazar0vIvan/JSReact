"use strict";

window.addEventListener("DOMContentLoaded", () => {
  
  // TABS
  const tabsParent = document.querySelector(".tabheader__items"),
        tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // TIMER
  const deadline = "2019-07-30";

  function appendZero(num) {
    return (num >= 0 && num < 10) ? `0${num}` : num;
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
    
    updateClock(); // начальная установка часов 

    function updateClock() {
      const remainingTime = getTimeRemaining(endtime);

      days.innerHTML = appendZero(remainingTime.days);
      hours.innerHTML = appendZero(remainingTime.hours);
      minutes.innerHTML = appendZero(remainingTime.minutes);
      seconds.innerHTML = appendZero(remainingTime.seconds);

      if (remainingTime.total <= 0) clearInterval(timeInterval);
    } 
  }

  setClock(".timer", deadline);

  // MODAL
  const modalTrigger = document.querySelectorAll("[data-modal]"),
        modal = document.querySelector(".modal");

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.getAttribute("data-close") == "") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    } 
  });

const modalTimerId = setTimeout(openModal, 50000);

  function showModalByScroll() {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  
  window.addEventListener("scroll", showModalByScroll);

  // CLASSES FOR PRODUCT CARDS

  class CardMenu {
    constructor(src, alt, title, desc, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.desc = desc;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 80;
      this.priceToRUB();
    }

    priceToRUB() {
      this.price *= this.transfer;
    }

    render() {
      const element = document.createElement("div");
      element.innerHTML = `
        <div class="menu__item">
          <img src=${this.src} alt=${this.alt}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.desc}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
          </div>
        </div>
      `;
      this.parent.append(element);
    }
  }

  new CardMenu(
    "img/tabs/vegy.jpg",
    "vegy",
    "Меню 'Фитнес'",
    "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
    9,
    ".menu .container"
  ).render();

  new CardMenu(
    "img/tabs/elite.jpg",
    "elite",
    "Меню 'Премиум'",
    "Меню 'Премиум' мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    11,
    ".menu .container"
  ).render();

  new CardMenu(
    "img/tabs/post.jpg",
    "post",
    "Меню 'Постное'",
    "Меню '“Постное”' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    7,
    ".menu .container"
  ).render();

  // FORMS

  const forms = document.querySelectorAll("form");

  const message = {
    loading: "img/form/spinner.svg",
    success: "Спасибо, скоро мы с Вами свяжемся",
    failure: "Ошибка",
  }

  forms.forEach(item => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      
      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement("afterend", statusMessage);

      const formData = new FormData(form);
      
      const obj = {};
      formData.forEach(function(value, key){
        obj[key] = value;
      });

      console.log(obj);
    
      fetch("server.php", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      })
      .then(data => data.text())
      .then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      })
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");

    prevModalDialog.classList.add("hide");
    openModal();

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-close>&times;</div>
        <div class="modal__title">${message}</div>
      </div>
    `;

    document.querySelector(".modal").append(thanksModal);

    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal();
    }, 4000);
  }
});

