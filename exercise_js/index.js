function sum(a, b) {
  return a === b ? (a + b) * 3 : a + b;
}

function absolute(a) {
  return Math.abs(a - 19) > 19 ? Math.abs(a - 19) * 3 : Math.abs(a - 19);
}

function maskedNumber3(a) {
  let temp = a.split("");
  let index = temp.indexOf("*");
  let arr = [];
  for (let i = 0; i <= 9; i++) {
    let item = temp
      .slice(0, index)
      .concat(i)
      .concat(temp.slice(index + 1));
    if (item.join("") % 3 === 0) arr.push(item.join(""));
  }
  console.log(arr);
}

function maskedNumber6(a) {
  let temp = a.split("");
  let index = temp.indexOf("*");
  let arr = [];
  for (let i = 0; i <= 9; i++) {
    let item = temp
      .slice(0, index)
      .concat(i)
      .concat(temp.slice(index + 1));
    if (item.join("") % 6 === 0) arr.push(item.join(""));
  }
}
