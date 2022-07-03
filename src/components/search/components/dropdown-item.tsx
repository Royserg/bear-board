import { Component, ParentComponent } from 'solid-js';
import { addCoin } from '../../../store/coins';
import { updateSearchValue } from '../../../store/search';

// === Card wrapper for Dropdown Items ===
export const DropdownItem: ParentComponent = ({ children }) => {
  return (
    <div class='card card-compact w-full p-2 bg-secondary shadow text-primary-content mb-1 hover:bg-primary cursor-pointer'>
      <div class='card-body'>{children}</div>
    </div>
  );
};

// === Loading Item ===
export const DropdownLoadingItem: Component = () => (
  <DropdownItem>
    <p class='text-xl'>Loading...</p>
  </DropdownItem>
);

// === Item containing Coin data ===
interface DropdownCoinItemProps {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
  market_cap_rank: number;
}

export const DropdownCoinItem: Component<DropdownCoinItemProps> = ({
  id,
  name,
  symbol,
  thumb,
  market_cap_rank,
}) => {
  const handleCoinClick = () => {
    updateSearchValue('');
    addCoin(id);
  };

  return (
    <DropdownItem>
      <div
        class='flex justify-between items-center text-lg'
        onClick={handleCoinClick}
      >
        <div class='flex grow justify-start'>
          <img
            class='rounded-full border shadow-xl bg-light mr-2'
            src={thumb}
          />
          <p>
            {name}&nbsp;({symbol})
          </p>
        </div>

        <p class='flex-none text-right text-base text-slate-400'>
          {market_cap_rank && `#${market_cap_rank}`}
        </p>
      </div>
    </DropdownItem>
  );
};
