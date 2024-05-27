function removeDuplicate(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

const arr = [1, 1, 2, 2, 2, 3, 3];
const k = removeDuplicate(arr);
console.log(arr.slice(0, k)); //[1,2,3]
