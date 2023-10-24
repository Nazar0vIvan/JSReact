"use strict";

/*
  LocalStorage Methods:

  1. setItem(key, value)
  2. getItem(key): return null if value doesn't exist
  3. removeItem(key)
  4. clear()
*/

const checkbox = document.querySelector("#checkbox"),
  form = document.querySelector("form"),
  change = document.querySelector("#color");

if (localStorage.getItem("isChecked")) {
  checkbox.checked = true;
}

if (localStorage.getItem("bg") === "changed") {
  form.style.backgroundColor = "red";
}

checkbox.addEventListener("change", () => {
  localStorage.setItem("isChecked", true);
});

change.addEventListener("click", () => {
  if (localStorage.getItem("bg") === "changed") {
    localStorage.removeItem("bg");
    form.style.backgroundColor = "white";
  } else {
    localStorage.setItem("bg", "changed");
    form.style.backgroundColor = "red";
  }
});

const person = {
  name: "Alex",
  age: 25,
};

const serializedPerson = JSON.stringify(person);
localStorage.setItem("Alex", serializedPerson);

console.log(JSON.parse(localStorage.getItem("Alex")));
