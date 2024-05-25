//Bubble Sort that works by repeatedly swapping the adjacent elements if they are in the wrong order.
//This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([13, 46, 24, 52, 20, 9])); //[ 9, 13, 20, 24, 46, 52 ]

//TC:- Average, Worst-> O(nx2), Best-> O(n) by adding a variable
//SC:- O(1)
