// function product(arr) {
//   if (arr.length === 1) {
//     return arr[0];
//   }
//   arr[1] = arr[1] * arr[0];
//   arr.shift();
//   return product(arr);
// }

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 10]));

// Shift / Unshift -> retorna o valor tirado do array
// Slice -> tira e retorna o resto do array
