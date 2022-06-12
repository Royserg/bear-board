import { invoke } from '@tauri-apps/api';
import { CoinData } from '../models/coin-price';

/**
 * Registered handlers on the backend
 * in `.invoke_handler(tauri::generate_handler!` array
 * Available custom backend methods
 */
export enum HANDLERS {
  GET_COIN_DATA = 'get_coin_data',
}

/**
 * Get basic data about the requested coin id: price, images, general information
 * Example:
 *
 * --- getCoinData("bitcoin")
 *
 * --- getCoinData("ethereum")
 * @param data
 * @returns CoinData
 */
export const getCoinData = async (data: { coinId: string }) => {
  const { coinId } = data;
  return await invoke<CoinData>(HANDLERS.GET_COIN_DATA, { coinId });
};
