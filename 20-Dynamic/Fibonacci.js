function fib(n, memo = []) {
  if(memo[n] !== undefined) return memo[n]
  if (n <= 2) return 1
    const res = fib(n - 1) + fib(n - 2)
    memo[n] = res;
    return res
}


console.log(fib(6));

// 1 1 2 3 5 8