function floorSqrt(n) {
  let low = 1,
    high = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let val = mid * mid;
    if (val <= n) {
      // Eliminate the left half
      low = mid + 1;
    } else {
      // Eliminate the right half
      high = mid - 1;
    }
  }
  return high;
}

console.log(floorSqrt(28)); // 5

//TC: O(logN), SC: O(1)
