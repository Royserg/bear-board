import { getItem, setItem } from 'localforage';
import { onMount } from 'solid-js';
import { createStore } from 'solid-js/store';
import { StorageKeys } from '../storage/constants';

interface CoinStoreState {
  ids: string[];
}

const initialState: CoinStoreState = {
  ids: [],
};

const coinStore = createStore<CoinStoreState>(initialState);

export const CoinStore = () => {
  const [state, setState] = coinStore;

  onMount(async () => {
    // Load saved coin ids from the offline storage
    try {
      const storageCoinIds = await getItem<string[]>(StorageKeys.CoinIds);
      if (storageCoinIds && storageCoinIds.length > 0) {
        setState('ids', storageCoinIds);
      }
    } catch (error) {
      console.log('Reading coinIds from localForage error.', error);
    }
  });

  // --- Attributes
  const coinIds = () => state.ids;

  // --- Actions
  const addCoinId = async (coinId: string) => {
    const isAdded = state.ids.includes(coinId);
    if (isAdded) {
      return;
    }

    const newState = [...state.ids, coinId];
    setState('ids', newState);

    // Persist change
    try {
      await setItem(StorageKeys.CoinIds, newState);
    } catch (error) {
      console.log('Setting coinIds to localForage error.', error);
    }
  };

  const deleteCoinId = async (coinId: string) => {
    const newState = state.ids.filter((id) => id !== coinId);
    setState('ids', newState);

    // Persist change
    try {
      await setItem(StorageKeys.CoinIds, newState);
    } catch (error) {
      console.log('Setting coinIds to localForage error.', error);
    }
  };

  // --- Expose
  return { coinIds, addCoinId, deleteCoinId };
};
