//Given an array of integers, every element appears twice except for one. Find that single one.
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  return nums.reduce((a,b) => {
    return a ^= b;
  });
};
