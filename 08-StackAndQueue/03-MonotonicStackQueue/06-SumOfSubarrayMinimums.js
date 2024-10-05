/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  const nse = findNSE(arr); //TC: O(2N)
  const pse = findPSE(arr); //TC: O(2N)
  let total = 0;
  const mod = 1000000007;

  for (let i = 0; i < arr.length; i++) {
    const left = i - pse[i];
    const right = nse[i] - i;
    total = (total + ((right * left * arr[i]) % mod)) % mod;
  }
  return total;
};

// Function to find the next smaller elements
function findNSE(arr) {
  const n = arr.length;
  const nse = new Array(n);
  const stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    nse[i] = stack.length === 0 ? n : stack[stack.length - 1];
    stack.push(i);
  }
  return nse;
}

// Function to find the previous smaller or equal elements
function findPSE(arr) {
  const n = arr.length;
  const pse = new Array(n);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    pse[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  return pse;
}

console.log(sumSubarrayMins([3, 1, 2, 4])); //17

//TC: O(5N)
