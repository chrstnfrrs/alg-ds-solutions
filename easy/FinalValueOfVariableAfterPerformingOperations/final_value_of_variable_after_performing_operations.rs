impl Solution {
  pub fn final_value_after_operations(operations: Vec<String>) -> i32 {
      let mut sum = 0;
      for op in operations {
          let is_inc = op.chars().nth(0).unwrap() == '+' || op.chars().nth(2).unwrap() == '+';
          match is_inc {
              true => sum += 1,
              false => sum -=1
          }
      }
      sum
  }
}