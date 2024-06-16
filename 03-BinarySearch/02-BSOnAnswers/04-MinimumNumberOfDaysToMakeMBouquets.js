/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  let val = m * k;
  if (bloomDay.length < val) return -1;
  let left = Math.min(...bloomDay),
    right = Math.max(...bloomDay);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (helper(bloomDay, mid, m, k)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

function helper(arr, day, m, k) {
  let n = arr.length;
  let count = 0,
    bouq = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] <= day) {
      count++;
    } else {
      //how many bouque can be made
      bouq += Math.floor(count / k);
      // reseting count as cannot pick new flower
      count = 0;
    }
  }
  //calculating rest of the flowers bloom
  bouq += Math.floor(count / k);
  if (bouq >= m) return true;
  return false;
}

console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3)); //12

//TC: O(log(max(arr[]) - min(arr[])+1) *N), SC: O(1)
