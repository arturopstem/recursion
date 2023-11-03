/**
 * Algorithm:
 * on input of n elements
 * if n < 2
 *  return
 * else
 *  split array in half
 *  sort left half of elements
 *  sort right half of elements
 *  merge sorted halves
 */

function splitArray(arr) {
  const mid = arr.length / 2;
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return { left, right };
}

function mergeHalves(left, right) {
  const mergedArr = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergedArr.push(left[i]);
      i += 1;
    } else {
      mergedArr.push(right[j]);
      j += 1;
    }
  }
  while (i < left.length) {
    mergedArr.push(left[i]);
    i += 1;
  }
  while (j < right.length) {
    mergedArr.push(right[j]);
    j += 1;
  }

  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const halves = splitArray(arr);
  const leftHalf = mergeSort(halves.left);
  const rightHalf = mergeSort(halves.right);
  const merged = mergeHalves(leftHalf, rightHalf);

  return merged;
}

const cs50Array = [4, 8, 6, 2, 1, 7, 5, 3];
console.log('cs50Array:', cs50Array);

const sortedArray = mergeSort(cs50Array);
console.log(sortedArray);
