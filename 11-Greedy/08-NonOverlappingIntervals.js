/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  const n = intervals.length;
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 1,
    endPoint = intervals[0][1];

  for (let i = 1; i < n; i++) {
    //no need to remove
    if (intervals[i][0] >= endPoint) {
      count++;
      endPoint = intervals[i][1];
    }
  }
  return n - count;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);

//TC: O(NlogN) + O(N)
//SC: O(1)
