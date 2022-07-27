import { createStore } from 'solid-js/store';
import { SearchCoinResult } from '../models/coin-price';
import { searchCoins } from '../services/backend';
import { CoinStore } from './coins';

interface SearchStoreState {
  value: string;
  isFetching: boolean;
  results: SearchCoinResult[];
}

const initialState: SearchStoreState = {
  value: '',
  isFetching: false,
  results: [],
};

const searchStore = createStore<SearchStoreState>(initialState);

export const SearchStore = () => {
  const [state, setState] = searchStore;

  // Neighbor store
  const { coinIds } = CoinStore();

  // --- Attributes
  const searchValue = () => state.value;
  const isFetching = () => state.isFetching;
  const searchResults = () => state.results;

  // --- Actions
  const setSearchValue = (value: string) => {
    setState('value', value);
  };

  const setFetching = (value: boolean) => setState('isFetching', value);

  const searchForCoins = async (searchVal: string) => {
    setState('isFetching', true);

    try {
      // Await invoked method
      const { coins } = await searchCoins({ search: searchVal });

      // Filter out already added coins
      const existingCoins = coinIds();
      const uniqueCoins = coins.filter(
        (coin) => !existingCoins.includes(coin.id)
      );

      setState('results', uniqueCoins);
    } catch (error) {
      console.error(error);
    } finally {
      setState('isFetching', false);
    }
  };

  const clearSearchResults = () => {
    setState('results', []);
  };

  // --- Expose
  return {
    searchValue,
    isFetching,
    searchResults,
    setSearchValue,
    searchForCoins,
    setFetching,
    clearSearchResults,
  };
};
