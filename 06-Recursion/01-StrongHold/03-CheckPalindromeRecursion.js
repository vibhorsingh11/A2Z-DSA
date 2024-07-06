function palindrome(str, n, i) {
  if (i >= n / 2) return true;
  if (str[i] !== str[n - i - 1]) return false;
  return palindrome(str, n, i + 1);
}

let str = 'racecar';
console.log(palindrome(str, str.length, 0));
