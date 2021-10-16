impl Solution {
  pub fn build_array(nums: Vec<i32>) -> Vec<i32> {
      let mut arr:Vec<i32> = Vec::new();
      for &num in nums.iter() {
          arr.push(nums[num as usize]);
      }
      arr
  }
}
