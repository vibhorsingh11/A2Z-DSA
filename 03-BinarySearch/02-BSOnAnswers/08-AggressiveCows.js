function canWePlace(stalls, dist, cows) {
  const n = stalls.length;
  let cntCows = 1;
  let last = stalls[0]; // position of last placed cow
  for (let i = 1; i < n; i++) {
    if (stalls[i] - last >= dist) {
      cntCows++; // place next cow
      last = stalls[i]; // update the last location
    }
    if (cntCows >= cows) return true;
  }
  return false;
}

function aggressiveCows(stalls, k) {
  const n = stalls.length;
  stalls.sort((a, b) => a - b);

  let low = 1,
    high = stalls[n - 1] - stalls[0];
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (canWePlace(stalls, mid, k)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}

console.log(aggressiveCows([0, 3, 4, 7, 10, 9], 4)); //3

//TC: O(NlogN) + O(N * log(max(stalls[]) - min(stalls[]))),      SC: O(1)
