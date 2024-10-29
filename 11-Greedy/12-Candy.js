/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let n = ratings.length;
  let sum = 1,
    i = 1;

  while (i < n) {
    //slope is flat
    if (ratings[i] === ratings[i - 1]) {
      //increase same as neighbour
      sum++;
      i++;
      continue;
    }
    //increasing slope
    let peak = 1;
    while (i < n && ratings[i] > ratings[i - 1]) {
      peak++;
      sum += peak;
      i++;
    }
    //decreasing slope
    let down = 1;
    while (i < n && ratings[i] < ratings[i - 1]) {
      sum += down;
      i++;
      down++;
    }

    if (down > peak) {
      sum += down - peak;
    }
  }
  return sum;
};

console.log(candy([1, 0, 2])); //5

//TC: O(N)
//SC: O(1)
