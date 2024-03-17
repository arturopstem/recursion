const defaultTestValue = 8;

const arg = process.argv.slice(2);

const number = Number(...arg) || defaultTestValue;

function fibs(n) {
  const fibArr = [];
  for (let i = 0; i < n; i += 1) {
    if (i <= 1) {
      fibArr.push(i);
    } else {
      fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
  }
  return fibArr;
}

console.log(`fibs(${number}):`);
console.log(fibs(number));

function fibsRec(n, arr = []) {
  if (n > 0) {
    const { length } = arr;
    if (length <= 1) {
      arr.push(length);
    } else {
      arr.push(arr.at(-1) + arr.at(-2));
    }
  } else {
    return arr;
  }
  return fibsRec(n - 1, arr);
}
console.log();
console.log(`fibsRec(${number}):`);
console.log(fibsRec(number));
