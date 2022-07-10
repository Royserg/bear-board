import { Component, ParentComponent } from 'solid-js';
import { useSelector } from '../../../store';

// === Card wrapper for Dropdown Items ===
export const DropdownItem: ParentComponent = ({ children }) => {
  return (
    <div class='card card-compact w-full p-2 bg-base-100 hover:bg-base-200 shadow text-primary-content mb-1 cursor-pointer'>
      <div class='card-body'>{children}</div>
    </div>
  );
};

// === Loading Item ===
export const DropdownLoadingItem: Component = () => (
  <DropdownItem>
    <p class='text-primary-content'>Loading...</p>
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
  const {
    coins: { addCoinId },
    search: { setSearchValue },
  } = useSelector();

  const handleCoinClick = () => {
    setSearchValue('');
    addCoinId(id);
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
