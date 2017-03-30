// Triple Step: A child is running up a staircase with n steps and can hop
// either 1 step, 2 steps, or 3 steps at a time. Implement a method to count
// how many possible ways the child can run up the stairs.

function countStairs(steps, memo) {
  if (!memo) {
    memo = {}
  }
  memo[0] = 1;
  if (steps < 0) {
    memo[steps] = 0;
    return memo[steps];
  } else if (steps === 0) {
    memo[steps];
    return memo[steps];
  } else {
    return memo[steps] = countStairs(steps-1, memo)
      + countStairs(steps-2, memo)
      + countStairs(steps-3, memo);
  }
};

console.log(countStairs(2));
