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
  let sequence;
  if (n > 0) {
    const { length } = arr;
    if (length <= 1) {
      sequence = [...arr, length];
    } else {
      sequence = [...arr, arr[length - 1] + arr[length - 2]];
    }
  } else {
    return arr;
  }
  return fibsRec(n - 1, sequence);
}
console.log();
console.log(`fibsRec(${number}):`);
console.log(fibsRec(number));
