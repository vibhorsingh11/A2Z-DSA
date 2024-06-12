function lowerBound(nums, target) {
  const n = nums.length;
  let left = 0,
    right = n - 1;
  let ans = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

console.log(lowerBound([3, 5, 8, 15, 19], 9)); //3

//TC: O(logN), SC: O(1)
