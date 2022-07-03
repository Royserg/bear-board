import { getItem, setItem } from 'localforage';
import { createStore } from 'solid-js/store';
import { StorageKeys } from '../storage/constants';

// == Store ==
const [coins, setCoins] = createStore<string[]>([]);

// == Actions ==
export const initCoinsStore = async () => {
  try {
    const storageCoins = await getItem<string[]>(StorageKeys.CoinIds);
    if (storageCoins && storageCoins.length > 0) {
      setCoins(storageCoins);
    }
  } catch (error) {
    console.log('Reading coinIds from localForage error.', error);
  }
};

export const getCoins = () => coins;

export const addCoin = async (coinId: string) => {
  const isAdded = coins.includes(coinId);
  if (isAdded) {
    return;
  }

  const newState = [...coins, coinId];
  setCoins(newState);

  // Persist change
  try {
    await setItem(StorageKeys.CoinIds, newState);
  } catch (error) {
    console.log('Setting coinIds to localForage error.', error);
  }
};

export const deleteCoin = async (coinId: string) => {
  const newState = coins.filter((id) => id !== coinId);
  setCoins(newState);

  // Persist change
  try {
    await setItem(StorageKeys.CoinIds, newState);
  } catch (error) {
    console.log('Setting coinIds to localForage error.', error);
  }
};
