const obj = {
  name: 'anbreaker',
  age: '34',
  country: 'Sp',
};

let {name, ...all} = obj;
console.log(name, all);

let {country, ...resto} = obj;
console.log(resto);

const obj2 = {
  name: 'anbreaker',
  age: 34,
};

const obj3 = {
  ...obj2,
  country: 'Sp',
};

console.log(obj3);

// promises & finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello World'), 2000)
      : reject(new Error('Test Error'));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log('Finalize'));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2020-05-29');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
