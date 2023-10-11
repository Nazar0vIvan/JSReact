'use strict';

/*
Оператор опциональной цепочки (Optional chaining operator) - ?.
Возвращает значение первого совпадающего по имени свойства, находящегося на любом уровне вложенности в цепочке объектов
Если свойства не существует или его значение undefined или null, то возвращается undefined.

"+"
1) При отсутствии искомого свойства, код не заканчивается ошибкой

"-"
1) Оператор работает только на чтение
*/ 

const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
    food: null,
  },
};

console.log(adventurer?.name); // "Alice"
console.log(adventurer?.food); // undefined
console.log(adventurer.dog?.name); // undefined 
console.log(adventurer.someNonExistentMethod?.()); // undefined
