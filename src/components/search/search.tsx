import { debounce } from '@solid-primitives/scheduled';
import { BiSearchAlt } from 'solid-icons/bi';
import { BsCaretDown, BsCaretUp } from 'solid-icons/bs';
import {
  Component,
  createEffect,
  createSignal,
  For,
  JSX,
  onMount,
  Show,
} from 'solid-js';
import { MIN_VALID_SEARCH_LENGTH } from '../../constants';
import { useSelector } from '../../store';
import {
  DropdownCoinItem,
  DropdownItem,
  DropdownLoadingItem,
} from './components/dropdown-item';

const SEARCH_RESULTS_COUNT = 5;
const ICON_SIZE = 28;

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
  const [sliceState, setSliceState] = createSignal({
    start: 0,
    end: SEARCH_RESULTS_COUNT,
  });

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
    // Reset result slice state
    setSliceState({ start: 0, end: SEARCH_RESULTS_COUNT });

    const search = event.currentTarget.value;
    setSearchValue(search);
  };

  const handleShowNext = (previous?: boolean) => {
    if (previous) {
      setSliceState((state) => ({
        start: state.start - SEARCH_RESULTS_COUNT,
        end: state.start,
      }));
    } else {
      setSliceState((state) => ({
        start: state.start + SEARCH_RESULTS_COUNT,
        end: state.end + SEARCH_RESULTS_COUNT,
      }));
    }
  };

  let searchInputRef: HTMLInputElement;
  onMount(() => {
    // Focus search input when component loads
    searchInputRef.focus();
  });

  return (
    <div class='mx-auto w-full max-w-lg h-10 text-center z-50'>
      <div class='dropdown w-full mx-auto'>
        <div class='input-group mb-2 shadow-xl rounded-l-lg'>
          <button class='btn btn-square btn-ghost no-animation bg-base-200'>
            <BiSearchAlt size={24} color='#000000' />
          </button>
          <input
            ref={searchInputRef}
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
                {/* Switch to previous batch */}
                <Show when={sliceState().start > 0}>
                  <DropdownItem
                    classNames='h-8 flex justify-center'
                    onClick={() => handleShowNext(true)}
                  >
                    <div class='w-full flex justify-center'>
                      <BsCaretUp size={ICON_SIZE} />
                    </div>
                  </DropdownItem>
                </Show>

                <For
                  each={searchResults().slice(
                    sliceState().start,
                    sliceState().end
                  )}
                >
                  {(coinData) => <DropdownCoinItem {...coinData} />}
                </For>

                {/* Switch to next batch */}
                <Show when={searchResults().length > sliceState().end}>
                  <DropdownItem
                    classNames='h-8 flex justify-center'
                    onClick={() => handleShowNext()}
                  >
                    <div class='w-full flex justify-center'>
                      <BsCaretDown size={ICON_SIZE} />
                    </div>
                  </DropdownItem>
                </Show>
              </Show>
            </Show>
          </div>
        </Show>
      </div>
    </div>
  );
};
