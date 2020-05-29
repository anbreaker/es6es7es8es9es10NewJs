class Calculator {
  construcotr() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return valueA + valueB;
  }
}

const calc = new Calculator();
console.log(calc.sum(2, 3));

// Import
const hello = require('./module');
