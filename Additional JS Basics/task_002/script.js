"use strict";

/*
Оператор нулевого слияния (Nullish) - ??
Спотыкается на всём КРОМЕ null или undefined (похож на ИЛИ)

"+"
1) Позволяет использовать обычные конвертируемые в false значения 
   (кроме null или undefined) в качестве true в логических выражениях

"-"
1) ?? и && можно использовать в одном выражении только со скобками
*/

const box = document.querySelector(".box");

const newHeight = 0; // 100;
const newWidth = 0; // 400;

/*
  Теперь при передаче 0-ых размеров, будет 
  выводится элемент с размерами 0х0, а не 200х200
*/
function changeParams(elem, h, w) {
  // elem.style.height = `${h || 200}px`;
  // elem.style.width = `${w || 200}px`;
  elem.style.height = `${h ?? 200}px`;
  elem.style.width = `${w ?? 200}px`;
}

changeParams(box, newHeight, newWidth);
