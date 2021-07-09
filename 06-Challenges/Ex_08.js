function minSubArrayLen(arr, sum) {
  let minLen = Infinity;
  let left = 0;
  let right = 0;
  let tempSum = 0;
  while (left < arr.length) {
    if (tempSum < sum && right < arr.length) {
      tempSum += arr[right];
      right++;
    } else if (tempSum >= sum) {
      minLen = Math.min(minLen, right - left);
      tempSum -= arr[left];
      left++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

const arr = [2, 5, 4, 9, 1];

console.log(minSubArrayLen(arr, 7));
