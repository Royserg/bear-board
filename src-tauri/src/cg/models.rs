use serde::{Deserialize, Serialize};

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
    market_cap_rank: Option<i32>,
    coingecko_rank: Option<i32>,
    last_updated: String,
    market_data: Option<MarketData>,
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
