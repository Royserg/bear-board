import { debounce } from '@solid-primitives/scheduled';
import {
  Component,
  createEffect,
  createSignal,
  For,
  JSX,
  Show,
} from 'solid-js';
import { SearchCoinResult } from '../../models/coin-price';
import { searchCoins } from '../../services/backend';
import {
  DropdownCoinItem,
  DropdownLoadingItem,
} from './components/dropdown-item';

export const Search: Component = () => {
  const [isFetching, setIsFetching] = createSignal(false);
  const [showDropdown, setShowDropdown] = createSignal(false);

  const [searchVal, setSearchVal] = createSignal('');
  const [setResults, setSearchResults] = createSignal<SearchCoinResult[]>([]);

  // Debounced results fetcher
  const getSearchResults = debounce(async (search: string) => {
    // Await invoked method
    const result = await searchCoins({ search });

    setSearchResults(result.coins.slice(0, 5));
    setIsFetching(false);
  }, 450);

  createEffect(() => {
    getSearchResults.clear();
    if (searchVal().length > 0) {
      setIsFetching(true);
      setShowDropdown(true);
      getSearchResults(searchVal());
    } else {
      // Search query cleared
      setSearchResults([]);
      setShowDropdown(false);
    }
  });

  const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
    const search = event.currentTarget.value;
    setSearchVal(search);
  };

  return (
    <div class='mx-auto w-full max-w-lg h-10 text-center z-50'>
      <div class='dropdown w-full mx-auto'>
        <div class='input-group mb-2'>
          <button class='btn btn-outline btn-square bg-accent-content'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
          <input
            name='search'
            type='search'
            placeholder='Search coins...'
            class='input w-full'
            autocomplete='false'
            autocapitalize='none'
            onInput={onInput}
          />
        </div>

        {/* Dropdown */}
        <div tabindex='0' class='dropdown-content max-w-lg w-full'>
          <Show when={showDropdown()}>
            <Show when={!isFetching()} fallback={<DropdownLoadingItem />}>
              <For each={setResults()}>
                {(coinData) => <DropdownCoinItem {...coinData} />}
              </For>
            </Show>
          </Show>
        </div>
      </div>
    </div>
  );
};
