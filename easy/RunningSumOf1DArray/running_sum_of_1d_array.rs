impl Solution {
  pub fn running_sum(nums: Vec<i32>) -> Vec<i32> {
      let mut sum = 0;
      let mut v = Vec::new();
      for num in nums {
          sum += num;
          v.push(sum);
      }
      v
  }
}