// 1. Write a JavaScript program to compute the sum of the two given integers.
// If the two values are same, then returns triple their sum.
function sum(a, b) {
  const variable = 3;
  return a === b ? (a + b) * variable : a + b;
}

// 2. Write a JavaScript program to compute the absolute difference between a specified number and 19.
// Returns triple their absolute difference if the specified number is greater than 19.

function absolute(a) {
  const variable = 19;
  const divisor = 3;
  return Math.abs(a - variable) > variable
    ? Math.abs(a - variable) * divisor
    : Math.abs(a - variable);
}

// 3+4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit.
// Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3 and by 6.

function maskedNumber(a) {
  const variableOne = 3;
  const variableTwo = 6;
  let temp = a.split("");
  let index = temp.indexOf("*");
  let arrOne = [];
  let arrTwo = [];
  for (let i = 0; i <= 9; i++) {
    let item = temp
      .slice(0, index)
      .concat(i)
      .concat(temp.slice(index + 1));
    if (item.join("") % variableOne === 0) arrOne.push(item.join(""));
    if (item.join("") % variableTwo === 0) arrTwo.push(item.join(""));
  }
  console.log(arrOne);
  console.log(arrTwo);
}
