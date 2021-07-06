// UM POINTER DE CADA LADO
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const arr = [-4, -3, -2, -1, 0, 1, 2, 3, 10];
const res = sumZero(arr);

console.log(res);

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
