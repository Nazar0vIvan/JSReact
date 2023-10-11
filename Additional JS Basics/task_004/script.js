'use strict';

/*
Живые и неживые (статические) коллекции:
Live and non-live (static) collections

Живая коллекция меняется в соответствии с версткой, но не имеет методов
Неживая коллекция игнорирует изменения в верстке, но имеет методы
*/

// NodeList (with methods)
const boxesQuery = document.querySelectorAll(".box"); 
// HTMLCollection (without methods)
const boxesGet = document.getElementsByClassName("box"); 

boxesQuery[0].remove(); // [div.box, div.box, div.box] - NodeList игнорирует изменени в DOM 
boxesGet[0].remove();   // [div.box] - HTMLCollection меняется в соответ ствии с DOM

// Чтобы добавить методы в живую коллекцию, её можно конвертировать в Array, 
// но коллекция становится статической
console.log(Array.from(boxesGet));