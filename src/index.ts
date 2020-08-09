const lib = require("./library");
// Lib has a simple (x,y) => {x+y} function called 'add'

function map(array, callback) {
  const output = [];

  for (const item of array) {
    output.push(callback(item));
  }

  return output;
}

const input = [1, 2, 3, 4, 5];

const result = map(input, (n) => {
  lib.add(n, 10);
});

console.log(result);
