// Iterando
// function factorial(num) {
//   let fat = 1;
//   while (num > 0) {
//     fat = fat * num;
//     num--;
//   }
//   return fat;
// }

//console.log(factorial(5));

// Recursivo
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5));
