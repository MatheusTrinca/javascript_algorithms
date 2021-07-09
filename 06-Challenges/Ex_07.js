// MAX SUBARRAY SUM
function maxSubarraySum(arr, num) {
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[2];
    Math.max(maxSum, tempSum);
  }
  return console.log(maxSum);
}

maxSubarraySum([100, 200, 300, 400], 2);
