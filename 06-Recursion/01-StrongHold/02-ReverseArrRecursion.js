function reverse(arr, n, i) {
  if (i >= n / 2) return;
  [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
  reverse(arr, n, i + 1);
}

let arr = [1, 2, 3, 4, 5];
reverse(arr, arr.length, 0);
console.log(arr); //[5,4,3,2,1]
