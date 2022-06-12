import { For } from 'solid-js';
import { CoinPriceCard } from '../components/coin-price-card/coinPriceCard';
import { FullPageWrapper } from '../layouts/fullpage';

// Imitate store holding saved coins to display
const coinIds: string[] = [
  'bitcoin',
  'ethereum',
  'near',
  'solana',
  'invalid',
  'neo',
];

export const Home = () => {
  return (
    <FullPageWrapper classNames='bg-grey-100 text-dark-600 p-8'>
      <h1 class='text-2xl font-bold text-center'>Coins</h1>

      <div class='container mx-auto mt-3 text-sm w-full grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 place-items-center'>
        <For each={coinIds}>{(coin) => <CoinPriceCard coinId={coin} />}</For>
      </div>
    </FullPageWrapper>
  );
};
