use serde::{Deserialize, Serialize};
use std::collections::HashMap;

const CG_BASE_URL: &str = "https://api.coingecko.com/api/v3/";
#[derive(Deserialize, Serialize, Debug)]
pub struct SimpleCoinPriceData {
    usd: i32,
    usd_24h_change: f64,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct CoinDataImage {
    thumb: String,
    small: String,
    large: String,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct CoinData {
    id: String,
    symbol: String,
    name: String,
    block_time_in_minutes: i16,
    hashing_algorithm: Option<String>,
    image: CoinDataImage,
    market_cap_rank: i32,
    coingecko_rank: i32,
    last_updated: String,
    market_data: MarketData,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct MarketData {
    current_price: MarketDataCurrentPrice,
    price_change_24h: f32,
    price_change_percentage_24h: f32,
    price_change_percentage_7d: f32,
    price_change_percentage_14d: f32,
    price_change_percentage_30d: f32,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct MarketDataCurrentPrice {
    pln: f32,
    usd: f32,
    eur: f32,
    dkk: f32,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct SearchResult {
    coins: Vec<SearchCoinResult>,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct SearchCoinResult {
    id: String,
    name: String,
    symbol: String,
    market_cap_rank: Option<i32>,
    thumb: String,
    large: String,
}

pub async fn _fetch_simple_coins_price_data(
    coin_id: &str,
) -> Result<HashMap<String, SimpleCoinPriceData>, Box<dyn std::error::Error>> {
    let coin_price_url = format!("{}{}", CG_BASE_URL, "/simple/price");

    let client = reqwest::Client::new();
    let resp = client
        .get(coin_price_url)
        .query(&[
            ("ids", coin_id),
            ("vs_currencies", "usd"),
            ("include_24hr_change", "true"),
        ])
        .send()
        .await?
        .json::<HashMap<String, SimpleCoinPriceData>>()
        .await?;

    Ok(resp)
}

pub async fn fetch_coin_data(coin_id: &str) -> Result<CoinData, reqwest::Error> {
    let params_string = "?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false";
    let coin_data_url = format!("{}{}{}{}", CG_BASE_URL, "coins/", coin_id, params_string);

    let res = reqwest::get(coin_data_url).await.unwrap();
    res.json::<CoinData>().await
}

pub async fn search_coins(search: &str) -> Result<SearchResult, reqwest::Error> {
    let search_url = format!("{}{}", CG_BASE_URL, "search");

    let client = reqwest::Client::new();
    let resp = client
        .get(search_url)
        .query(&[("query", search)])
        .send()
        .await?
        .json::<SearchResult>()
        .await;

    return resp;
}
