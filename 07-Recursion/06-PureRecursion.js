// Utilizando concat
function odds(arr) {
  let result = [];
  if (arr.length === 0) return result;
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  console.log(arr);
  result = result.concat(odds(arr.slice(1)));
  return result;
}

console.log(odds([1, 2, 3, 4, 5, 6]));
