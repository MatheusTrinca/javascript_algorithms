// Caso de Uso: Minimizar as trocas

function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // Troca
    temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionSort([3, 1, 6, 5, 8]));
