"use strict";

/*
  RegExp = Pattern + Flags
  1. new RegExp("pattern", "flags")
  2. reg = /pattern/flags
*/

const ans1 = prompt("Enter your name");

// 1. regexp + search

const reg1 = /n/;
// search returns index of the first 'n' letter,
// if there is no 'n', return -1
console.log(ans1.search(reg1));

// 2. regexp + match

/*
  flags: 
  i - upper/low case is ignored
  g - search all matches: return Array
  m - multistring mode
*/

// method search ignores flags
// method match considers flags and return js-object
const reg2 = /n/gi;
console.log(ans1.match(reg2));

// 3. regexp + replace

const pass = prompt("Password");
console.log(pass.replace(/./g, "*")); // /./ - all string will be replaced by *
console.log(pass.replace(/\./g, "*")); // /\./ - all dots will be replaced by *

console.log("12-34-56".replace(/-/g, ":")); // 12-34-56 -> 12:34:56

// 4. regexp + test

const reg3 = /n/gi;
console.log(reg3.test(ans1)); // if there is 'n' character in ans -> true, if not - false

// 5. regexp + character classes

/*
  \d - digits
  \w - character
  \s - spaces
*/

const ans2 = prompt("Enter number");
const reg4 = /\d/;
console.log(ans2.match(reg4));

const str1 = "My name is R2D2";
console.log(str1.match(/\w\d\w\d/i));

// 6. regexp + inverse character classes

/*
  \D - not digit
  \W - not character
*/

const str2 = "My name is R2D2";
console.log(str2.match(/\D/gi));
