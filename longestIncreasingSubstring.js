const longestIncreasingSubString = (nums) => {
  // check to see if the length is 0, if so return 0
  if (nums.length === 0) {
      return 0;
  }
  // init our dp to 1 at index 1
  const dp = [1];

  // our current max substring is only one right now
  let currentMaxLength = 1;

  // we compare every item to the items before it
  for (var i = 1; i < nums.length; i++) {
    let maxVal = 0;
    for (var j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        console.log('nums: ', nums[j], ' > ', nums[i]);
        maxVal = Math.max(maxVal, dp[j])
      }
    }
    // if we find an element that is increasing
    // we take the prev current longest substring (stored in our memo)
    // and add one and add it to our current memo
    dp[i] = maxVal + 1;
    currentMaxLength = Math.max(currentMaxLength, dp[i]);
  }
  console.log('dp: ', dp)
  return currentMaxLength;
};

console.log(longestIncreasingSubString([10,9,2,5,3,7,101,18]));
