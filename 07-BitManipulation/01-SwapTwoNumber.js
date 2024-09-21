function swapTwoNumbers(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log(`a = ${a} and b = ${b}`);
}

swapTwoNumbers(5, 6);
