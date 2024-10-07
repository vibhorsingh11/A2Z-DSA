/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  return sumSubarrayMax(nums) - sumSubarrayMin(nums);
};

function sumSubarrayMin(arr) {
  const nse = findNSE(arr);
  const pse = findPSE(arr);
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    // previous smaller index for left side
    let left = i - pse[i];
    // next smaller index for right side
    let right = nse[i] - i;
    total += left * right * arr[i];
  }
  return total;
}

function sumSubarrayMax(arr) {
  const nge = findNGE(arr);
  const pge = findPGE(arr);
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    let left = i - pge[i];
    let right = nge[i] - i;
    total += left * right * arr[i];
  }
  return total;
}

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

function findNGE(arr) {
  const n = arr.length;
  const nge = new Array(n);
  const stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    nge[i] = stack.length === 0 ? n : stack[stack.length - 1];
    stack.push(i);
  }
  return nge;
}

function findPGE(arr) {
  const n = arr.length;
  const pge = new Array(n);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
      stack.pop();
    }
    pge[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  return pge;
}
