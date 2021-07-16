function power(base, expoente) {
  if (expoente === 0) {
    return 1;
  }
  return base * power(base, expoente - 1);
}

console.log(power(5, 2));
