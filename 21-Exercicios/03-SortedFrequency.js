function sortedFrequency(arr, num) {
  let counter = -1
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === num){
      counter = i;
      break;
    }
  }
  for(let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] === num){
      counter = (i + 1) - counter;
      break;
    }
  }
  return counter;
}                                        

console.log(sortedFrequency([1, 1, 3], 2));