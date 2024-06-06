function subarraysWithXorK(a, k) {
  const n = a.length;
  let xr = 0;
  const map = new Map();
  map.set(xr, 1);
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    xr = xr ^ a[i];

    const x = xr ^ k;
    cnt += map.get(x) || 0;

    map.set(xr, (map.get(xr) || 0) + 1);
  }
  return cnt;
}

console.log(subarraysWithXorK([4, 2, 2, 6, 4], 6)); //4

//TC: O(N), SC: O(N)
