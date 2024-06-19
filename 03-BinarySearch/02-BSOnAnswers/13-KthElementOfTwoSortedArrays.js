function kthElement(a, b, m, n, k) {
  if (m > n) return kthElement(b, a, n, m, k);

  let left = k;
  let low = Math.max(0, k - n),
    high = Math.min(k, m);
  while (low <= high) {
    let mid1 = Math.floor((low + high) / 2);
    let mid2 = left - mid1;
    let l1 = Number.MIN_SAFE_INTEGER,
      l2 = Number.MIN_SAFE_INTEGER;
    let r1 = Number.MAX_SAFE_INTEGER,
      r2 = Number.MAX_SAFE_INTEGER;
    if (mid1 < m) r1 = a[mid1];
    if (mid2 < n) r2 = b[mid2];
    if (mid1 - 1 >= 0) l1 = a[mid1 - 1];
    if (mid2 - 1 >= 0) l2 = b[mid2 - 1];

    if (l1 <= r2 && l2 <= r1) {
      return Math.max(l1, l2);
    }

    // eliminate the halves:
    else if (l1 > r2) high = mid1 - 1;
    else low = mid1 + 1;
  }
  return 0;
}

let a = [2, 3, 6, 7, 9];
let b = [1, 4, 8, 10];
console.log(kthElement(a, b, a.length, b.length, 5)); //6

//TC: O(log(min(m,n))), SC: O(1)
