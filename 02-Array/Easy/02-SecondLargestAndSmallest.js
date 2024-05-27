function secondLargestAndSmallest(arr) {
  if (arr.length < 2) {
    return;
  }

  let smallest = Number.MAX_SAFE_INTEGER;
  let secondSmallest = Number.MAX_SAFE_INTEGER;
  let largest = Number.MIN_SAFE_INTEGER;
  let secondLargest = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] != smallest) {
      secondSmallest = arr[i];
    }

    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }

  if (
    secondSmallest === Number.MAX_SAFE_INTEGER ||
    secondLargest === Number.MIN_SAFE_INTEGER
  ) {
    return;
  }

  return {
    secondSmallest: secondSmallest,
    secondLargest: secondLargest,
  };
}

console.log(secondLargestAndSmallest([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); //2, 6

//TC:- O(n)
