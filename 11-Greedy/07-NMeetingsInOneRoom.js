class Meeting {
  constructor(start, end, pos) {
    this.start = start;
    this.end = end;
    this.pos = pos;
  }
}
function nMeetings(start, end) {
  let arr = [];

  for (let i = 0; i < start.length; i++) {
    arr.push(new Meeting(start[i], end[i], i + 1));
  }

  arr.sort((a, b) => a.end - b.end);
  //may have to return the positions of the meetings
  //if the interviewer asks for the positions of the meetings
  let count = 1,
    freeTime = arr[0].end,
    ds = [arr[0].pos];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].start > freeTime) {
      count++;
      freeTime = arr[i].end;
      ds.push(arr[i].pos);
    }
  }
  return count;
}

console.log(nMeetings([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9]));
console.log(nMeetings([10, 12, 20], [20, 25, 30]));

//TC: O(N) + O(NlogN) => O(NlogN)
//SC: O(N)
