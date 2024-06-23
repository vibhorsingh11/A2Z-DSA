function countSubstringsWithKDistinct(s, k) {
  let count = 0;
  let characterCount = {}; // Dictionary to track character counts
  let startIndex = 0; // Starting index of the current substring

  for (let endIndex = 0; endIndex < s.length; endIndex++) {
    // Add current character to characterCount dictionary
    if (!characterCount[s[endIndex]]) {
      characterCount[s[endIndex]] = 0;
    }
    characterCount[s[endIndex]]++;

    // Shrink the window until we have 'k' distinct characters
    while (Object.keys(characterCount).length > k) {
      let firstChar = s[startIndex];
      characterCount[firstChar]--;
      if (characterCount[firstChar] === 0) {
        delete characterCount[firstChar];
      }
      startIndex++;
    }

    // Every valid substring ending at endIndex has exactly 'k' distinct characters
    count += endIndex - startIndex + 1;
  }

  return count;
}

function substrCount(s, k) {
  // Count substrings with exactly k distinct characters
  let countK = this.countSubstringsWithKDistinct(s, k);
  // Count substrings with exactly (k-1) distinct characters
  let countKMinus1 = this.countSubstringsWithKDistinct(s, k - 1);
  // The result is the difference
  return countK - countKMinus1;
}

console.log(substrCount('aba', 2)); // 3
