function counter(num) {
  if (num === 0) {
    console.log('Done');
    return;
  }
  console.log(num);
  counter(num - 1);
}

counter(5);
