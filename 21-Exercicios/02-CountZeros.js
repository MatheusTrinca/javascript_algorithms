function countZeroes(arr) {
  let counter = 0;
  let start = 0;
  let end = arr.length - 1;
  while(start < end){
    if(arr[start] === 0) counter++
    if(arr[end] === 0) counter++
    start++
    end--;
  }
  return counter;
}

const array = [1, 1, 1 ,1 ,0]

console.log(countZeroes(array));