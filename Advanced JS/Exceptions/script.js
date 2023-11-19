"use strict";

const data = [
  {
    id: "box",
    tag: "div",
  },
  {
    id: "fff",
    tag: "nav",
  },
  {
    id: "circle",
    tag: "",
  },
];

try {
  data.forEach((blockObj, i) => {
    const block = document.createElement(blockObj.tag);

    if (!blockObj.id)
      throw new SyntaxError(`Data with number ${i + 1} has no id`);

    block.setAttribute("id", blockObj.id);
    document.body.append(block);
  });
} catch (e) {
  if (e.name === "SyntaxError") {
    console.error(e.message);
  } else throw e;
}

/*
const error = new SyntaxError("some error");
console.log(error.name, error.message, error.stack);
*/
