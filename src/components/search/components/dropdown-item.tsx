import { Component, ParentComponent } from 'solid-js';

// === Card wrapper for Dropdown Items ===
export const DropdownItem: ParentComponent = ({ children }) => {
  return (
    <div class='card card-compact w-full p-2 bg-secondary shadow text-primary-content mb-1 hover:bg-primary'>
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
  name: string;
  symbol: string;
  thumb: string;
  market_cap_rank: number;
}

export const DropdownCoinItem: Component<DropdownCoinItemProps> = ({
  name,
  symbol,
  thumb,
  market_cap_rank,
}) => (
  <DropdownItem>
    <div class='flex justify-between items-center text-lg'>
      <div class='flex grow justify-start'>
        <img class='rounded-full border shadow-xl bg-light mr-2' src={thumb} />
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
