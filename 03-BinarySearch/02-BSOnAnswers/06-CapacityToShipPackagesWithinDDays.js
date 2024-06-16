/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let sumArr = 0;
  for (let weight of weights) {
    sumArr += weight;
  }
  let left = Math.max(...weights),
    right = sumArr;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (helperCapacity(weights, mid) <= days) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

function helperCapacity(arr, cap) {
  let n = arr.length;
  let load = 0,
    days = 1;

  for (let i = 0; i < n; i++) {
    if (load + arr[i] > cap) {
      load = arr[i];
      days++;
    } else {
      load += arr[i];
    }
  }
  return days;
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 15

//TC: O(log(sum(weights) - max(weights) + 1) * N), SC: O(1)
