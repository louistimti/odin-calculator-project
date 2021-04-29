// be called in global scope

let a;
let b;
let total;
let oS;
let inputCalc = document.querySelector('#display');

// let round = function (value, decimals) {
//   return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
// };

// let decimalCount = (num) => {
//   // Convert to String
//   const numStr = String(num);
//   // String Contains Decimal
//   if (numStr.includes('.')) {
//     return numStr.split('.')[1].length;
//   }
//   // String Does Not Contain Decimal
//   return 0;
// };

// to be executed for each symbol

function add(a, b) {
  total = +a + +b;
  return total;
}

function subtract(a, b) {
  total = a - b;
  return total;
}

function multiply(a, b) {
  total = a * b;
  return total;
}

function divide(a, b) {
  if (b === 0) {
    total = 'Error';
  } else {
    total = a / b;
  }
  return total;
}

// in case of decimal being high
// if (decimalCount(total) > 17) {
//   round(total, 15);
//   total = round;
// }

//function operate for the different symbols

function operate(oS) {
  if (oS == '+') {
    add(a, b);
  } else if (oS == '-') {
    subtract(a, b);
  } else if (oS == '*') {
    multiply(a, b);
  } else {
    divide(a, b);
  }
}

// so that the numbers can be registered
function insertValue(x) {
  if (!oS) {
    inputCalc.value += x;
    a = inputCalc.value;

    console.log('a is: ' + a);
    console.log('os is: ' + oS);
    console.log('b is: ' + b);
  } else {
    // inputCalc.value = '';
    inputCalc.value += x;
    b = inputCalc.value;
    operate(oS);

    console.log('a is: ' + a);
    console.log('os is: ' + oS);
    console.log('b is: ' + b);
  }
}

// symbols can be registered and start operating
function assignOperator(symbol) {
  if (!oS) {
    oS = symbol;
    inputCalc.value = '';

    console.log('a is: ' + a);
    console.log('os is: ' + oS);
    console.log('b is: ' + b);
  } else {
    inputCalc.value = total;
    a = total;
    oS = symbol;
    b = undefined;
    inputCalc.value = '';

    console.log('a is: ' + a);
    console.log('os is: ' + oS);
    console.log('b is: ' + b);
  }
}

// display the final answer
function equalize() {
  if (!b) {
    inputCalc.value = 'Error';
    a = undefined;
    oS = undefined;
    b = undefined;
  } else {
    inputCalc.value = total;
    a = total;
    b = undefined;
  }

  console.log('a is: ' + a);
  console.log('os is: ' + oS);
  console.log('b is: ' + b);
}

// reset all variables
function clean() {
  a = undefined;
  b = undefined;
  oS = undefined;
  total = undefined;
  totalDisplay = undefined;
  inputCalc.value = '';

  console.log('a is: ' + a);
  console.log('os is: ' + oS);
  console.log('b is: ' + b);
}
