import { debounce } from '@solid-primitives/scheduled';
import { BiSearchAlt } from 'solid-icons/bi';
import {
  Component,
  createEffect,
  createSignal,
  For,
  JSX,
  Show,
} from 'solid-js';
import { MIN_VALID_SEARCH_LENGTH } from '../../constants';
import { useSelector } from '../../store';
import {
  DropdownCoinItem,
  DropdownItem,
  DropdownLoadingItem,
} from './components/dropdown-item';

interface SearchProps {}
export const Search: Component<SearchProps> = () => {
  const {
    search: {
      searchValue,
      isFetching,
      clearSearchResults,
      searchForCoins,
      setSearchValue,
      setFetching,
      searchResults,
    },
  } = useSelector();

  const [showDropdown, setShowDropdown] = createSignal(false);

  // Debounced results fetcher
  const searchCoins = debounce(async (search: string) => {
    await searchForCoins(search);
  }, 450);

  createEffect(() => {
    searchCoins.clear();
    if (searchValue().length >= MIN_VALID_SEARCH_LENGTH) {
      setFetching(true);
      setShowDropdown(true);
      searchCoins(searchValue());
    } else {
      // Search query cleared
      clearSearchResults();
      setShowDropdown(false);
    }
  });

  const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
    const search = event.currentTarget.value;
    setSearchValue(search);
  };

  return (
    <div class='mx-auto w-full max-w-lg h-10 text-center z-50'>
      <div class='dropdown w-full mx-auto'>
        <div class='input-group mb-2'>
          <button class='btn btn-square btn-ghost no-animation bg-base-200'>
            <BiSearchAlt size={24} color='#000000' />
          </button>
          <input
            name='search'
            type='search'
            placeholder='Search coins...'
            class='input w-full'
            autocomplete='false'
            autocapitalize='none'
            value={searchValue()}
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
                <For each={searchResults().slice(0, 5)}>
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
