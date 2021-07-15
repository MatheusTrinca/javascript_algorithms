// function odds(arr, result) {
//   if (!result) {
//     result = [];
//   }
//   if (arr.length) {
//     result.push(arr[0] / 2 === 0);
//     arr.shift();
//     return odds(arr, result);
//   } else {
//     return result;
//   }
// }

// Helper Method Solution
function odds(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push('odd');
    } else {
      result.push('even');
    }
    helperInput.shift();
    helper(helperInput);
  }
  helper(arr);
  return result;
}

const arr = [234, 456, 678, 876];

console.log(odds(arr));
