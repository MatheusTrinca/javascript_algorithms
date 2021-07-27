// Ordenar dados ao vivo, assim que chegam

function insertionSort(arr) {
  let selected;
  for (let i = 1; i < arr.length; i++) {
    selected = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > selected) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = selected;
  }
  return arr;
}

// function insertionSort(arr) {
//   var currentVal;
//   for (var i = 1; i < arr.length; i++) {
//     currentVal = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// }

console.log(insertionSort([34, 2, 67, 15, 11]));
