// Com Arrays quase ordenados, checando se não fez trocas na ultima passada
// Caso não haja trocas, terminar a execução
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swap = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //SWAP
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    console.log('ONE PASS COMPLETE');
    if (!swap) {
      return arr;
    }
  }
}

console.log(bubbleSort([34, 5, 76, 887, 434]));
