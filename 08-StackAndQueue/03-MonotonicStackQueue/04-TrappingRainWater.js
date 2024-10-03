/**
 * To store water both left and right building should be taller
 * Go to each building and find how much water it can hold and then sum the total(ans)
 * It will store lower of both left or right
 * ###Hence, {min(leftMax, rightMax) - arr[i]}(current element)
 * leftMax & rightMax should be greater than arr[i] to store water
 * O(2N) approach prefix & suffix
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  let lMax = (rMax = total = 0),
    l = 0,
    r = n - 1;

  //traverse the smaller one
  while (l < r) {
    //left cannot be greater than right
    if (height[l] < height[r]) {
      //someone on left
      if (lMax > height[l]) {
        total += lMax - height[l];
      } else {
        lMax = height[l];
      }
      l++;
    } else {
      if (rMax > height[r]) {
        total += rMax - height[r];
      } else {
        rMax = height[r];
      }
      r--;
    }
  }
  return total;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); //6

//TC: O(N)
//SC: O(1)
