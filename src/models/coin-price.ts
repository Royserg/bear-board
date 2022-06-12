export interface SimpleCoinPriceData {
  [coin: string]: {
    usd: number;
    usd_24h_change: number;
  };
}

export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  market_cap_rank: number;
  coingecko_rank: number;
  last_updated: string;
  market_data: {
    current_price: {
      pln: number;
      usd: number;
      eur: number;
      dkk: number;
    };
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
  };
}
