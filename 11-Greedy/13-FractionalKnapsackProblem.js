function fractionalWeight(values, weights, weight) {
  let arr = [];
  for (let i = 0; i < values.length; i++) {
    arr.push({
      index: i,
      value: values[i],
      weight: weights[i],
      ratio: values[i] / weights[i],
    });
  }
  arr.sort((a, b) => b.ratio - a.ratio);

  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].weight <= weight) {
      total += arr[i].value;
      weight -= arr[i].weight;
    } else {
      total += Math.abs((arr[i].value / arr[i].weight) * weight);
      break;
    }
  }
  return total;
}

console.log(fractionalWeight([60, 100, 120], [10, 20, 30], 50)); //240

//TC: O(NlogN) + O(N)
//SC: O(N)
