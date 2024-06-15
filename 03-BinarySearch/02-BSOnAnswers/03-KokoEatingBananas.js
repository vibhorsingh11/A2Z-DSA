/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 0,
    right = Math.max(...piles);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let hour = 0;
    for (let pile of piles) {
      //doing ceil becoz hour completed
      hour += Math.ceil(pile / mid);
    }

    if (hour > h) {
      //remove left if taking more hours
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30

//TC: O(N x log(max(piles))), SC: O(1)
