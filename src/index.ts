const lib = require("./library");
// Lib has a simple (x,y) => {x+y} function called 'add'

function map(array: number[], callback: (x: number) => number): number[] {
  const output: number[] = [];
  for (const item of array) {
    output.push(callback(item));
  }
  return output;
}

const input = [1, 2, 3, 4, 5];

const result = map(input, (n: number): number => {
  return lib.add(n, 10);
});

console.log(result);

interface Pet {
  name?: String;
}

const pet1: Pet = {};

function usePet(pet: Pet): void {
  return console.log("PetName: " + pet.name);
}
