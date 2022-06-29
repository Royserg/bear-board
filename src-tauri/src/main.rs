#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod cg_api;
use cg_api::{CoinData, SearchResult};
use tauri::{CustomMenuItem, Menu, Submenu};

fn main() {
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let close = CustomMenuItem::new("close".to_string(), "Close");
    let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
    let menu = Menu::new().add_submenu(submenu);

    tauri::Builder::default()
        .menu(menu)
        .on_menu_event(|event| match event.menu_item_id() {
            "quit" => {
                std::process::exit(0);
            }
            "close" => {
                event.window().close().unwrap();
            }
            _ => {}
        })
        .invoke_handler(tauri::generate_handler![get_coin_data, search_coins])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// === Commands ===
#[tauri::command]
async fn get_coin_data(coin_id: &str) -> Result<CoinData, String> {
    match cg_api::fetch_coin_data(coin_id).await {
        Ok(data) => Ok(data),
        Err(_err) => Err("Invalid coin data provided.".to_string()),
    }
}

#[tauri::command]
async fn search_coins(search: &str) -> Result<SearchResult, String> {
    match cg_api::search_coins(search).await {
        Ok(data) => Ok(data),
        Err(err) => {
            println!("Error getting search results. {}", err.to_string());
            Err("Error getting search results.".to_string())
        }
    }
}
