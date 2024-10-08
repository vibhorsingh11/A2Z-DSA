/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let stack = [],
    max = 0,
    nse = 0,
    pse = 0,
    element = 0;
  let n = heights.length;

  //We get nse when we traverse and pse when we moved on to next index

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      //index's
      element = stack.pop();
      nse = i;
      pse = stack.length === 0 ? -1 : stack[stack.length - 1];
      //area
      max = Math.max(heights[element] * (nse - pse - 1), max);
    }
    stack.push(i);
  }
  //left over element indexes in stack
  while (stack.length > 0) {
    //nse will be n for these lefover element indexes
    nse = n;
    element = stack.pop();
    pse = stack.length === 0 ? -1 : stack[stack.length - 1];
    max = Math.max(heights[element] * (nse - pse - 1), max);
  }
  return max;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); //10

//TC: O(N) + O(N) traversal and pop element
//SC: O(N) for stack
