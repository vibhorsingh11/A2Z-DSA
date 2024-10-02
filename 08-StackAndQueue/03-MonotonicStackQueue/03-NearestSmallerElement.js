function prevSmaller(arr) {
  let n = arr.length;
  let res = Array(n).fill(null),
    stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    res[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(arr[i]);
  }
  return res;
}

console.log(prevSmaller([4, 5, 2, 10, 8])); //[-1, 4, -1, 2, 2]
console.log(prevSmaller([3, 2, 1])); //[-1, -1, -1]

//TC: O(2N)
//SC: O(N) + O(N)
