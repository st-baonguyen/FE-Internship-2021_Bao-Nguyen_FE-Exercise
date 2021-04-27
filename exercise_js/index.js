// 1. Write a JavaScript program to compute the sum of the two given integers.
// If the two values are same, then returns triple their sum.
function sum(a, b) {
  return a === b ? (a + b) * 3 : a + b;
}

// 2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

function absolute(a) {
  return Math.abs(a - 19) > 19 ? Math.abs(a - 19) * 3 : Math.abs(a - 19);
}

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
  console.log(arr);
}
