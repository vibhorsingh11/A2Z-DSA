function minPlatforms(arr, dep) {
  const n = arr.length;
  let i = 0,
    j = 0;
  let count = 0,
    maxCount = 0;
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);

  while (i < n) {
    if (arr[i] <= dep[j]) {
      count++;
      i++;
    } else {
      j++;
      count--;
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
}

console.log(
  minPlatforms(
    [900, 940, 950, 1100, 1500, 1800],
    [910, 1200, 1120, 1130, 1900, 2000]
  )
);
console.log(minPlatforms([1000, 935, 1100], [1200, 1240, 1130]));

//TC: O(2NlogN) + O(2N) => O(NlogN)
//SC: O(1)
