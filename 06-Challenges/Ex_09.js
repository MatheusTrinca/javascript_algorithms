function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

let res = findLongestSubstring('rithmschool');
// 012345678910;
// rithmschool;
// i;
// char = h;
// longest = 7;
// start = 4;
// seen = {
//   r: 1,
//   i: 2,
//   t: 3,
//   h: 8,
//   m: 5,
//   s: 6,
//   c: 7,
// };
