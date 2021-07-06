function sameFrequency(num1, num2) {
  const arr1 = num1.toString();
  const arr2 = num2.toString();
  if (arr1.length !== arr2.length) return false;
  const freq1 = {};
  const freq2 = {};
  for (let num of arr1) {
    freq1[num] = (freq1[num] || 0) + 1;
  }
  for (let num of arr2) {
    freq2[num] = (freq2[num] || 0) + 1;
  }
  for (let key in freq1) {
    if (!(key in freq2)) {
      return false;
    }
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
}

function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const freq1 = {};
  const freq2 = {};
  for (let char of str1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }
  for (let char of str2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }
  console.log(freq1);
  console.log(freq2);
  for (let key in freq1) {
    if (!(key in freq2)) return false;
    if (freq1[key] !== freq2[key]) return false;
  }
  return true;
}
console.log(anagram('anagram', 'nagaram'));
