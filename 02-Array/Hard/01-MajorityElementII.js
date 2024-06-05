/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const n = nums.length;
  let ele1 = -Infinity,
    ele2 = -Infinity;
  let count1 = 0,
    count2 = 0;

  for (let i = 0; i < n; i++) {
    if (count1 === 0 && ele2 !== nums[i]) {
      count1 = 1;
      ele1 = nums[i];
    } else if (count2 === 0 && ele1 !== nums[i]) {
      count2 = 1;
      ele2 = nums[i];
    } else if (nums[i] === ele1) count1++;
    else if (nums[i] === ele2) count2++;
    else {
      count1--;
      count2--;
    }
  }

  let res = [];

  (count1 = 0), (count2 = 0);
  for (let i = 0; i < n; i++) {
    if (nums[i] === ele1) count1++;
    if (nums[i] === ele2) count2++;
  }

  let mini = Math.floor(n / 3) + 1;
  if (count1 >= mini) res.push(ele1);
  if (count2 >= mini) res.push(ele2);

  return res;
};

console.log(majorityElement([11, 33, 33, 11, 33, 11])); // [11,33]

//TC: O(N)+O(N), SC O(1)
