function shortestJobFirst(arr) {
  let time = 0,
    wTime = 0;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    wTime += time;
    time += arr[i];
  }
  return Math.floor(wTime / arr.length);
}

console.log(shortestJobFirst([4, 3, 7, 1, 2]));
console.log(shortestJobFirst([1, 2, 3, 4]));

//TC: (O(nlog n))
//SC: (O(n))
