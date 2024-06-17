/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let n = arr.length;
  let left = 0,
    right = n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let missing = arr[mid] - (mid + 1);
    if (missing < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right + k + 1;
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5)); //9

//TC: O(log N)

// kth missing number = arr[high] + k - (arr[high] - (high+1))
//         =  arr[high] + k - arr[high] + high + 1
//         = k + high + 1
