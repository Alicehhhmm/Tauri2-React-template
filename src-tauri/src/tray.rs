use tauri::{
    menu::{Menu, MenuItem, Submenu},
    tray::TrayIconBuilder,
    webview::WebviewWindowBuilder,
    AppHandle, Manager, Runtime, WebviewUrl,
};

/**
 * 创建 Webview 窗口的函数
 * Used to create a new Webview window
 */
fn create_webview_window<R: Runtime>(app: &AppHandle<R>, label: &str, url: &str, title: &str) -> tauri::Result<()> {
    WebviewWindowBuilder::new(app, label, WebviewUrl::App(url.into()))
        .title(title)
        .build()
        .map(|_| ())
        .map_err(|e| {
            eprintln!("Failed to create window: {}", e);
            e
        })
}

/**
 * 处理菜单事件的函数
 * A function that handles menu events
 */
fn handle_menu_event<R: Runtime>(app: &AppHandle<R>, event_id: &str) {
    match event_id {
        "quit" => app.exit(0),
        "new-window" => {
            create_webview_window(app, "new", "index.html", "Tauri").unwrap_or(());
        },
        "remove-tray" => {
            if let Some(_tray_icon) = app.remove_tray_by_id("tray_mark") {
                // 可以在这里处理 tray_icon
            } else {
                eprintln!("Tray icon not found");
            }
        },
        "set-title" => {
            if let Some(window) = app.get_webview_window("main") {
                window.set_title("新标题").unwrap_or(());
            }
        },
        "help-menu" => {
            create_webview_window(app, "help", "help.html", "帮助").unwrap_or(());
        },
        "about-menu" => {
            create_webview_window(app, "about", "about.html", "关于 Tauri").unwrap_or(());
        },
        "show" => {
            if let Some(window) = app.get_webview_window("main") {
                window.show().unwrap_or(());
            }
        },
        "hide" => {
            if let Some(window) = app.get_webview_window("main") {
                window.hide().unwrap_or(());
            }
        },
        _ => {}
    }
}

pub fn create_tray<R: Runtime>(app: &AppHandle<R>) -> tauri::Result<()> {
    
    // menu items
    let quit_i = MenuItem::with_id(app, "quit", "退出程序", true, None::<&str>)?;
    let new_window_i = MenuItem::with_id(app, "new-window", "打开新窗口", true, None::<&str>)?;
    let remove_tray_i = MenuItem::with_id(app, "remove-tray", "移除托盘图标", true, None::<&str>)?;
    let set_title_i = MenuItem::with_id(app, "set-title", "设置标题", true, None::<&str>)?;
    let switch_i = MenuItem::with_id(app, "switch-menu", "切换菜单", true, None::<&str>)?;
    let help_i = MenuItem::with_id(app, "help-menu", "帮助", true, None::<&str>)?;
    let about_i = MenuItem::with_id(app, "about-menu", "关于 Tauri", true, None::<&str>)?;

    // sum menu item
    let show_i = MenuItem::with_id(app, "show", "显示", true, None::<&str>)?;
    let hide_i = MenuItem::with_id(app, "hide", "隐藏", true, None::<&str>)?;

    let toggle_submenu = Submenu::with_items(
        app,
        "窗口显隐切换",
        true,
        &[&show_i, &hide_i],
    )?;

    let custom_tary_menu = Menu::with_items(
        app,
        &[
            &quit_i,
            &new_window_i,
            &remove_tray_i,
            &set_title_i,
            &switch_i,
            &help_i,
            &about_i,
            &toggle_submenu,
        ],
    )?;

    let _ = TrayIconBuilder::with_id("tray_mark")
        .tooltip("系统托盘提示")
        .icon(app.default_window_icon().unwrap().clone())
        .menu(&custom_tary_menu)
        .menu_on_left_click(false)
        .on_menu_event(move |app, event| handle_menu_event(app, event.id.as_ref()))
        .build(app);

    Ok(())
}