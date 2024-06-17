function countStudents(arr, pages, n) {
  let studentCount = 1,
    prevPages = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + prevPages <= pages) {
      prevPages += arr[i];
    } else {
      studentCount++;
      prevPages = arr[i];
    }
  }
  return studentCount;
}

function findPages(arr, n, m) {
  let left = Math.max(...arr),
    right = arr.reduce((acc, ele) => acc + ele, 0);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (countStudents(arr, mid, n) <= m) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

const books = 4,
  students = 2;
console.log(findPages([12, 34, 67, 90], books, students)); //113

//TC: O(N * log(sum(arr[])-max(arr[])+1)), SC: O(1)
