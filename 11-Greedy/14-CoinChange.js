/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const n = coins.length;
  // const dp = new Array(n).fill(null).map(() => new Array(amount + 1).fill(0));

  //SPACE OPTIMIZED
  //TC:-O(N x amount)
  //SP:- O(amount)
  let prev = new Array(amount + 1).fill(0);
  let curr = new Array(amount + 1).fill(0);

  for (let t = 0; t <= amount; t++) {
    if (t % coins[0] === 0) {
      prev[t] = t / coins[0];
    } else {
      prev[t] = Infinity;
    }
  }

  for (let i = 1; i < n; i++) {
    for (let target = 0; target <= amount; target++) {
      let notTake = prev[target];
      let take = Infinity;
      //stay on current index as infinite pattern is possible
      if (target >= coins[i]) take = 1 + curr[target - coins[i]];
      curr[target] = Math.min(notTake, take);
    }
    prev = curr;
  }
  let ans = prev[amount];
  return ans === Infinity ? -1 : ans;
};

//Memoization Solution
function helper(i, target, coins, dp) {
  if (i === 0) {
    if (target % coins[i] === 0) return target / coins[i];
    else return Infinity;
  }

  if (dp[i][target] !== -1) return dp[i][target];

  let notTake = helper(i - 1, target, coins, dp);
  let take = Infinity;
  if (target >= coins[i]) take = 1 + helper(i, target - coins[i], coins, dp);
  return (dp[i][target] = Math.min(notTake, take));
}
