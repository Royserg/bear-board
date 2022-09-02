#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod cg;

use cg::api;
use cg::models::{CoinData, SearchResult};
use tauri::{Menu, MenuItem, Submenu};

fn main() {
    // https://github.com/tauri-apps/tauri/issues/1055#issuecomment-1008895581
    let about_menu = Submenu::new(
        "App",
        Menu::new()
            .add_native_item(MenuItem::Hide)
            .add_native_item(MenuItem::HideOthers)
            .add_native_item(MenuItem::ShowAll)
            .add_native_item(MenuItem::Separator)
            .add_native_item(MenuItem::Quit),
    );

    let edit_menu = Submenu::new(
        "Edit",
        Menu::new()
            .add_native_item(MenuItem::Undo)
            .add_native_item(MenuItem::Redo)
            .add_native_item(MenuItem::Separator)
            .add_native_item(MenuItem::Cut)
            .add_native_item(MenuItem::Copy)
            .add_native_item(MenuItem::Paste)
            .add_native_item(MenuItem::SelectAll),
    );

    let menu = Menu::new().add_submenu(about_menu).add_submenu(edit_menu);

    tauri::Builder::default()
        .menu(menu)
        .invoke_handler(tauri::generate_handler![get_coin_data, search_coins])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// === Commands ===
#[tauri::command]
async fn get_coin_data(coin_id: &str) -> Result<CoinData, String> {
    match api::fetch_coin_data(coin_id).await {
        Ok(data) => Ok(data),
        Err(_err) => Err("Invalid coin data provided.".to_string()),
    }
}

#[tauri::command]
async fn search_coins(search: &str) -> Result<SearchResult, String> {
    match api::search_coins(search).await {
        Ok(data) => Ok(data),
        Err(err) => {
            println!("Error getting search results. {}", err.to_string());
            Err("Error getting search results.".to_string())
        }
    }
}
