const data = {
  frontend: 'anbreaker',
  brackend: 'Sergio',
  desing: 'Santi',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const values = Object.values(data);
console.log(values);

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' ---'));
