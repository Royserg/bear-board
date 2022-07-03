import { debounce } from '@solid-primitives/scheduled';
import {
  Component,
  createEffect,
  createSignal,
  For,
  JSX,
  Show,
} from 'solid-js';
import { MIN_VALID_SEARCH_LENGTH } from '../../constants';
import { SearchCoinResult } from '../../models/coin-price';
import { searchCoins } from '../../services/backend';
import { getSearchValue, updateSearchValue } from '../../store/search';
import {
  DropdownCoinItem,
  DropdownItem,
  DropdownLoadingItem,
} from './components/dropdown-item';

interface SearchProps {
  onCoinClick: (id: string) => void;
}

export const Search: Component<SearchProps> = ({ onCoinClick }) => {
  const [isFetching, setIsFetching] = createSignal(false);
  const [showDropdown, setShowDropdown] = createSignal(false);

  const [searchResults, setSearchResults] = createSignal<SearchCoinResult[]>(
    []
  );

  // Debounced results fetcher
  const getSearchResults = debounce(async (search: string) => {
    // Await invoked method
    const result = await searchCoins({ search });

    setSearchResults(result.coins.slice(0, 5));
    setIsFetching(false);
  }, 450);

  createEffect(() => {
    getSearchResults.clear();
    if (getSearchValue().length >= MIN_VALID_SEARCH_LENGTH) {
      setIsFetching(true);
      setShowDropdown(true);
      getSearchResults(getSearchValue());
    } else {
      // Search query cleared
      setSearchResults([]);
      setShowDropdown(false);
    }
  });

  const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
    const search = event.currentTarget.value;
    updateSearchValue(search);
  };

  return (
    <div class='mx-auto w-full max-w-lg h-10 text-center z-50'>
      <div class='dropdown w-full mx-auto'>
        <div class='input-group mb-2'>
          <input
            name='search'
            type='search'
            placeholder='Search coins...'
            class='input w-full'
            autocomplete='false'
            autocapitalize='none'
            value={getSearchValue()}
            onInput={onInput}
          />
        </div>

        {/* Dropdown */}
        <Show when={showDropdown()}>
          <div tabindex='0' class='dropdown-content max-w-lg w-full'>
            <Show when={!isFetching()} fallback={<DropdownLoadingItem />}>
              <Show
                when={searchResults().length > 0}
                fallback={<DropdownItem>No results</DropdownItem>}
              >
                <For each={searchResults()}>
                  {(coinData) => <DropdownCoinItem {...coinData} />}
                </For>
              </Show>
            </Show>
          </div>
        </Show>
      </div>
    </div>
  );
};
