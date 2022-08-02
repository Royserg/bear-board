import { createContext, ParentComponent, useContext } from 'solid-js';
import { CoinStore } from './coins';
import { SearchStore } from './search';
import { ThemeStore } from './theme';

export type RootState = {
  coins: ReturnType<typeof CoinStore>;
  search: ReturnType<typeof SearchStore>;
  theme: ReturnType<typeof ThemeStore>;
};

const rootState: RootState = {
  coins: CoinStore(),
  search: SearchStore(),
  theme: ThemeStore(),
};

const StoreContext = createContext<RootState>();
export const useSelector = () => useContext(StoreContext);

export const StoreProvider: ParentComponent = (props) => {
  return (
    <StoreContext.Provider value={rootState}>
      {props.children}
    </StoreContext.Provider>
  );
};
