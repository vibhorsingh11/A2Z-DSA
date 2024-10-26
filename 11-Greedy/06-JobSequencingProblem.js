function jobSequence(jobs) {
  const n = jobs.length;
  jobs.sort((a, b) => b[2] - a[2]);
  let maxDeadline = Math.max(...jobs.map((job) => job[0]));
  let hash = new Array(maxDeadline + 1).fill(-1);
  let countJobs = 0,
    jobProfit = 0;

  for (let i = 0; i < jobs.length; i++) {
    //deadline
    for (let j = jobs[i][1]; j > 0; j--) {
      // Free slot found
      if (hash[j] === -1) {
        hash[j] = jobs[i][0]; // Mark job ID in the slot
        countJobs++;
        jobProfit += jobs[i][2]; // Add profit
        break; // Move to the next job
      }
    }
  }

  return [countJobs, jobProfit];
}

console.log(
  jobSequence([
    [1, 4, 20],
    [2, 1, 1],
    [3, 1, 40],
    [4, 1, 30],
  ])
);

//TC: O(nlogn)
//SC: O(n)
