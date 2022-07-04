import { createContext, ParentComponent, useContext } from 'solid-js';
import { CoinStore } from './coins';
import { SearchStore } from './search';

export type RootState = {
  coins: ReturnType<typeof CoinStore>;
  search: ReturnType<typeof SearchStore>;
};

const rootState: RootState = {
  coins: CoinStore(),
  search: SearchStore(),
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
