/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0],
    profit = 0;

  for (let i = 1; i < prices.length; i++) {
    let cost = prices[i] - min;
    profit = Math.max(profit, cost);
    min = Math.min(prices[i], min);
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5

//TC:- O(n)
//SC:- O(1)
