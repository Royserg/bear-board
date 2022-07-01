use super::models::{CoinData, SearchResult, SimpleCoinPriceData};
use std::collections::HashMap;

const CG_BASE_URL: &str = "https://api.coingecko.com/api/v3/";

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
