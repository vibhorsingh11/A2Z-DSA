/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0) {
      stack.push(asteroids[i]);
    } else {
      while (
        stack.length > 0 &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(asteroids[i])
      ) {
        stack.pop();
      }
      if (
        stack.length > 0 &&
        stack[stack.length - 1] === Math.abs(asteroids[i])
      ) {
        stack.pop();
      } else if (stack.length === 0 || stack[stack.length - 1] < 0) {
        stack.push(asteroids[i]);
      }
    }
  }
  return stack;
};

console.log(asteroidCollision([5, 10, -5])); //[5,10]
