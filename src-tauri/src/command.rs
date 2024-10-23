#[tauri::command]
pub fn my_custom_command1() {
  println!("I was invoked from JavaScript!");
}

#[tauri::command]
pub fn my_custom_command2() -> String {
    println!("Hello from Rust!");
  "Hello from Rust!".into()
}