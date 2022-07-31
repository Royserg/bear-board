import { Component, ParentComponent } from 'solid-js';
import { useSelector } from '../../../store';

// === Card wrapper for Dropdown Items ===
interface DropdownItemProps {
  classNames?: string;
  onClick?: (event: MouseEvent) => void;
}
export const DropdownItem: ParentComponent<DropdownItemProps> = ({
  children,
  onClick,
  classNames,
}) => {
  return (
    <div
      class={`rounded-lg card card-compact w-full bg-primary hover:bg-primary-focus border-2 border-base-200 shadow text-primary-content cursor-pointer ${classNames}`}
      onClick={onClick}
    >
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
    <DropdownItem onClick={handleCoinClick}>
      <div class='flex justify-between items-center text-lg'>
        <div class='flex grow justify-start'>
          <img
            class='rounded-full border shadow-xl bg-white mr-2 h-8'
            src={thumb}
          />
          <p class='text-primary-content'>
            {name}&nbsp;({symbol})
          </p>
        </div>

        <p class='flex-none text-right text-base-content'>
          {market_cap_rank && `#${market_cap_rank}`}
        </p>
      </div>
    </DropdownItem>
  );
};
