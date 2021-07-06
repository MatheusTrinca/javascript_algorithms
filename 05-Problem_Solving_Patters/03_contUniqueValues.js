// DOIS POINTERS DO MESMO LADO
// Multiple pointers (contando valores unicos num array)
// Com contador
function countUniqueValues(arr) {
  count = 0;
  for (let i = 0, j = i + 1; j < arr.length; i++, j++) {
    count = 1;
    if (arr[i] !== arr[j]) {
      count++;
    }
  }
  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));

// Sem contador
function countUniqueValues(arr) {
  let i = 0;
  let j = 1;
  while (j <= arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i;
}
