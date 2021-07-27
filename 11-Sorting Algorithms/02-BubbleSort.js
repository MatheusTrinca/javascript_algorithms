// Caso de Uso: Aprendizado

// Swap Function ES2015 version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //SWAP
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 5, 3, 2]));

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         //SWAP
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     console.log('ONE PASS COMPLETE');
//   }
//   return arr;
// }

// function bubbleSort(arr) {
//   for(i = arr.length; i < 0; i--){
//     for(j = 0; j < i - 1; j++){

//     }
//   }
// }
