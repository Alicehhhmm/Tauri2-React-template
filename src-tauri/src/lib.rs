use tauri::{
    generate_context, generate_handler,
};

mod command;
use command::{
    my_custom_command1,
    my_custom_command2,
};

mod tray;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .setup(|app| {

        // 1.init system tray
        tray::create_tray(app.handle())?;

        if cfg!(debug_assertions) {
            app.handle().plugin(
            tauri_plugin_log::Builder::default()
                .level(log::LevelFilter::Info)
                .build(),
            )?;
        }
        Ok(())
    })

    .invoke_handler(generate_handler![
        my_custom_command1,
        my_custom_command2
    ])
    .run(generate_context!())
    .expect("error while running tauri application");
}
