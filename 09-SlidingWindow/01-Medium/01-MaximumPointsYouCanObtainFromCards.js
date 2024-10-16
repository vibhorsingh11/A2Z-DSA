/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  const n = cardPoints.length;
  //lSum from left and rSum from right
  //maintaining the window
  let lSum = 0,
    rSum = 0,
    maxSum = 0;
  let rIndx = n - 1;

  for (let i = 0; i < k; i++) {
    lSum += cardPoints[i];
  }
  maxSum = lSum;
  for (let i = k - 1; i >= 0; i--) {
    lSum -= cardPoints[i];
    rSum += cardPoints[rIndx];
    maxSum = Math.max(maxSum, lSum + rSum);
    rIndx--;
  }
  return maxSum;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3)); //12

//TC: O(2k)
//SC: O(1)
