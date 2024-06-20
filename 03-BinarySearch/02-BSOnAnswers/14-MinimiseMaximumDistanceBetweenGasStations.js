//RARE (HARD)

function numberOfGasStationsRequired(dist, arr) {
  const n = arr.length;
  let cnt = 0;
  for (let i = 1; i < n; i++) {
    const numberInBetween = Math.floor((arr[i] - arr[i - 1]) / dist);
    if (arr[i] - arr[i - 1] === dist * numberInBetween) {
      cnt += numberInBetween - 1;
    } else {
      cnt += numberInBetween;
    }
  }
  return cnt;
}

function minimiseMaxDistance(arr, k) {
  const n = arr.length;
  let low = 0;
  let high = 0;

  // Find the maximum distance:
  for (let i = 0; i < n - 1; i++) {
    high = Math.max(high, arr[i + 1] - arr[i]);
  }

  const diff = 1e-6;
  while (high - low > diff) {
    const mid = (low + high) / 2.0;
    const cnt = numberOfGasStationsRequired(mid, arr);
    if (cnt > k) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return high;
}

const arr = [1, 2, 3, 4, 5];
const k = 4;
console.log(minimiseMaxDistance(arr, k)); //0.5

//TC: O(n*log(Len)) + O(n),    SC: O(1)
