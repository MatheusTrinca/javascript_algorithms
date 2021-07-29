// Deve ser passados apenas numeros, aceitam outras estruturas,
// mas devem serem transformadas em byte code antes

//? HELPERS -------------------------------

// Pegar o digito na posição informada -> direita para esquerda
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Contar quantos digitos possui o número
function getCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Retorna o numero de digitos do maior valor
function mostDigits(numArr) {
  let max = 0;
  numArr.forEach(num => {
    max = Math.max(max, getCount(num));
  });
  return max;
}

//?---------------------------------------

function radixSort(arr) {
  let maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}

console.log(radixSort([12, 65, 2, 14, 676, 4534, 354]));

// function getDigit(num, place) {
//   const numStr = num.toString();
//   if (numStr.length <= place) return 0;
//   if (place === 0) {
//     return +numStr.slice(-1);
//   } else {
//     return +numStr.slice(place * -1 - 1, place * -1);
//   }
// }
