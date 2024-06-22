/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  return s.concat(s).includes(goal);
};

let s = 'abcde',
  goal = 'cdeab';
console.log(rotateString(s, goal)); //true
