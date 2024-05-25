// Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest
//(or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list.

function selectionSort(arr) {
  const n = arr.length;
  let mini = 0;
  for (let i = 0; i < n; i++) {
    mini = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[mini] > arr[j]) {
        mini = j;
      }
    }
    let temp = arr[mini];
    arr[mini] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionSort([13, 46, 24, 52, 20, 9])); //[ 9, 13, 20, 24, 46, 52 ]

//TC:- Best, Average, Worst-> O(n)
