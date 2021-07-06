// Multiple pointers (contando valores unicos num array)
function countUniqueValues(arr) {
  let i = 0;
  let j = 1;
  while (j <= arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i;
}

// Multiple pointers (achando o primeiro par em que a soma é 0)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    switch (sum) {
      case 0:
        console.log(arr[left], arr[right]);
        return;
      case sum > 0:
        right--;
        break;
      case sum < 0:
        left++;
        break;
    }
  }
}

sumZero([]);

// ---------------------------------------------------

// Desafio: areThereDuplicates

// FAZER COM FREQUENCY COUNTER
// function areThereDuplicates(...args) {
//   const freq = {};
//   for (let arg of args) {
//     freq[arg] = (freq[arg] || 0) + 1;
//     if (freq[arg] > 1) return true;
//   }
//   return false;
// }

// FAZER COM MULTIPLE POINTERS
function areThereDuplicates(...args) {
  const sorted = args.sort();
  for (let i = 0, j = 1; j <= sorted.length; i++, j++) {
    if (sorted[i] === sorted[j]) return true;
  }
  return false;
}

// USANDO SET
function areThereDuplicatesSet(...args) {
  const set = new Set(args);
  return set.size !== args.length;
  // return new Set(args).size !== args.length
}
