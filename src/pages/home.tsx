import { createSignal, For } from 'solid-js';
import { CoinPriceCard } from '../components/coin-price-card/coin-price-card';
import { CoinGeckoFooter } from '../components/footer/coin-gecko-footer';
import { Search } from '../components/search/search';
import { FullPageWrapper } from '../layouts/fullpage';

export const Home = () => {
  // Imitate store holding saved coins to display
  const [coinIds, setCoinIds] = createSignal<string[]>([
    'bitcoin',
    'ethereum',
    'near',
    'solana',
  ]);

  const handleCoinClick = (id: string) => {
    setCoinIds((ids) => [...ids, id]);
  };

  return (
    <FullPageWrapper classNames='bg-gray-100 text-dark-600 p-8'>
      <h1 class='text-2xl font-bold text-center mb-3'>Coins</h1>

      <Search onCoinClick={handleCoinClick} />
      <div class='mb-10'></div>

      <div class='container w-full mx-auto mt-3 text-sm grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 place-items-center z-10'>
        <For each={coinIds()}>{(coin) => <CoinPriceCard coinId={coin} />}</For>
      </div>

      <CoinGeckoFooter />
    </FullPageWrapper>
  );
};
