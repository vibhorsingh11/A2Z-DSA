function helper(m, n, mid) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= mid;
    if (res > m) {
      return 2;
    }
  }
  if (res === m) return 1;
  return 0;
}

function NRoot(n, m) {
  let left = 1,
    right = m;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let midN = helper(m, n, mid);
    if (midN === 1) {
      return mid;
    } else if (midN === 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(NRoot(3, 27)); //3

//TC: O(logN x logM), SC: O(1)
