const DEFAULT_TEST_VALUE = 8;

const arg = process.argv.slice(2);

const number = Number(...arg) || DEFAULT_TEST_VALUE;

function fibs(n) {
  return Array.from({ length: n }).reduce((fibArray, _, index) => {
    if (index < 2) {
      fibArray.push(index);
    } else {
      fibArray.push(fibArray.at(-1) + fibArray.at(-2));
    }

    return fibArray;
  }, []);
}

console.log(`fibs(${number}):`);
console.log(fibs(number));

function fibsRec(n) {
  if (n <= 2) {
    return Array.from({ length: n }, (_, index) => index);
  }

  const fibArray = fibsRec(n - 1);
  fibArray.push(fibArray.at(-1) + fibArray.at(-2));

  return fibArray;
}
console.log();
console.log(`fibsRec(${number}):`);
console.log(fibsRec(number));
