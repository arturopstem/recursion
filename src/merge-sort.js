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
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArr.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      mergedArr.push(right[rightIndex]);
      rightIndex += 1;
    }
  }
  while (leftIndex < left.length) {
    mergedArr.push(left[leftIndex]);
    leftIndex += 1;
  }
  while (rightIndex < right.length) {
    mergedArr.push(right[rightIndex]);
    rightIndex += 1;
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
  arr.splice(0, arr.length, ...merged);

  return arr;
}

const cs50Array = [4, 8, 6, 2, 1, 7, 5, 3];
console.log('cs50Array:', cs50Array);

mergeSort(cs50Array);
console.log('Sorted:', cs50Array);
