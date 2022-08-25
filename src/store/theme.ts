import { getItem, setItem } from 'localforage';
import { onMount } from 'solid-js';
import { createStore } from 'solid-js/store';
import { StorageKeys } from '../storage/constants';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeStoreState {
  theme: Theme;
}

const initialState: ThemeStoreState = {
  theme: Theme.LIGHT,
};

const themeStore = createStore<ThemeStoreState>(initialState);

export const ThemeStore = () => {
  const [state, setState] = themeStore;

  onMount(async () => {
    // Load saved coin ids from the offline storage
    try {
      const theme = await getItem<Theme>(StorageKeys.Theme);
      if (theme) {
        setState('theme', theme);
      }
    } catch (error) {
      console.log('Reading theme from localForage error.', error);
    }
  });

  // --- Attributes
  const theme = () => state.theme;

  // --- Actions
  const setTheme = async (theme: Theme) => {
    setState('theme', theme);

    // Persist change
    try {
      await setItem(StorageKeys.Theme, theme);
    } catch (error) {
      console.log('Setting theme to localForage error.', error);
    }
  };

  // --- Expose
  return { theme, setTheme };
};
