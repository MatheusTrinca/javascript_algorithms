// SLIDING WINDOW
function maxSubarraySum(arr, num) {
  let tempSum = 0;
  let maxSum = 0;
  if (arr < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = tempSum > maxSum ? tempSum : maxSum;
  }
  return console.log(maxSum);
}

maxSubarraySum([2, 6, 9, 8, 3], 3);

// NAIVE SOLUTION - RUIM

// function maxSubarraySum(arr, num) {
//   if (arr.length < num) return null;
//   let max = 0;
//   for (let i = 0; i <= arr.length - num; i++) {
//     let temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

//console.log(maxSubarraySum([0, 1, 2, 3, 4, 5], 2));
