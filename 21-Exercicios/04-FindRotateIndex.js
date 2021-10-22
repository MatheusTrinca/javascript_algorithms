function findRotatedIndex(arr, value){
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let midIndex = Math.floor((arr.length - 1) / 2);
  while(arr[midIndex] !== value) {
    if(value <= arr[midIndex] && value >= arr[startIndex]) {
      endIndex = midIndex
      midIndex = Math.floor((endIndex - startIndex) / 2)
    }else {
        startIndex = midIndex
        midIndex = Math.ceil((endIndex - midIndex) / 2) + startIndex
      }
  }
  return midIndex;
}

const arr = [4, 5, 6, 1, 2, 3]

console.log(findRotatedIndex(arr, 1));
