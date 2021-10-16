fn name_shuffler(s: &str) -> String {
  let split = s.split(" ");
  let vec: Vec<&str> = split.collect();
  format!("{} {}", vec[1], vec[0])
}
