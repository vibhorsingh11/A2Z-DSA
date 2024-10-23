/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const n = s.length, m = t.length;
    let l = 0, r = 0, count = 0, startIndex = -1, minLen = Infinity;
    let map = new Map();

    for (let c of t) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    while (r < n) {
        //valid char already exist in map
        if (map.get(s[r]) > 0) {
            count++;
        }
        map.set(s[r], map.get(s[r]) - 1);
        //shrink and check
        while (count === m) {
            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                startIndex = l;
            }
            //restore map
            map.set(s[l], map.get(s[l]) + 1);
            if (map.get(s[l]) > 0) {
                count--;
            }
            l++;
        }
        r++;
    }

    return startIndex === -1 ? "" : s.substring(startIndex, startIndex + minLen);
};

console.log(minWindow("ADOBECODEBANC", "ABC")); //BANC

//Time Complexity: O(m + n)
//Space Complexity: O(m)
