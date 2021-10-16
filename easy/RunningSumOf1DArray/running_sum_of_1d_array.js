/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  let sum = 0;
  return nums.map((num) => {
    sum += num;
    return sum;
  });
};
