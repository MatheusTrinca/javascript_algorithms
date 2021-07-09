// function isSubsequence(str1, str2) {
//   let left = 0;
//   let right = str1.length;
//   while (right < str2.length) {
//     if (str1 === str2.slice(left, right)) {
//       return true;
//     } else {
//       left++;
//       right++;
//     }
//   }
//   return false;
// }

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
}

console.log(isSubsequence('abc', 'abracadabra'));
