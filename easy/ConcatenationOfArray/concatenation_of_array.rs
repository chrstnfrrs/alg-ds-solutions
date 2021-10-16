impl Solution {
  pub fn get_concatenation(nums: Vec<i32>) -> Vec<i32> {
      let mut num_arr_a = nums.clone();
      let num_arr_b = nums.clone();
      num_arr_a.extend(nums.clone());
      num_arr_a
  }
}
