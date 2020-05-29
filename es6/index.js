let hello = 'Hola';
let world = 'Mundo';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            // si es falso ejecuta la reject
            resolve('Resuelto');
        } else {
            reject('No Resuelto');
        }
    });
};

helloPromise()
    .then((response) => console.log(response))
    .then(() => console.log('hola'))
    .catch((error) => console.log);
