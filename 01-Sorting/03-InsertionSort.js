//Insertion sort is a simple sorting algorithm that works by building a sorted array one element at a time.
//It is considered an “in-place” sorting algorithm, meaning it doesn’t require any additional memory space beyond the
//original array.

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 0; i <= n - 1; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
}

console.log(insertionSort([13, 46, 24, 52, 20, 9])); //[ 9, 13, 20, 24, 46, 52 ]

//Bst case:- O(n)
//Worst & Ave case:- O(nxn)
