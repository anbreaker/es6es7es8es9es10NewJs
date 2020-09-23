let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((value) => [value, value * 2]));

// trimStart

let hello = '    Espacio en blanco al inicio';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'Espacio en blanco al final       ';
console.log(hello2);
console.log(hello2.trimEnd());

let entries = [
  ['name', 'anbreaker'],
  ['age', 34],
];
console.log(Object.fromEntries(entries));

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
