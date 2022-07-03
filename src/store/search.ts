import { createStore } from 'solid-js/store';

// == Store ==
const initialState = { value: '' };
const [search, setSearch] = createStore(initialState);

// == Actions ==
export const getSearchValue = () => search.value;

export const updateSearchValue = (value: string) => {
  setSearch('value', value);
};
