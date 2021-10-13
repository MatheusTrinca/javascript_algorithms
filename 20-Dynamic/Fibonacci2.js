function fib(n) {
  if(n <= 2) return 1
  const fibNums = [0, 1, 1];
  for(i = 3; i <= n; i++){
    fibNums.push(fibNums[i - 2] + fibNums[i - 1]);
  }
  return fibNums[n]
}

console.log(fib(6));

