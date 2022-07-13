import { For, Show } from 'solid-js';
import { CoinPriceCard } from '../components/coin-price-card/coin-price-card';
import { CoinGeckoFooter } from '../components/footer/coin-gecko-footer';
import { Search } from '../components/search/search';
import { FullPageWrapper } from '../layouts/fullpage';
import { useSelector } from '../store';

export const Home = () => {
  const {
    coins: { coinIds },
  } = useSelector();

  return (
    <FullPageWrapper classNames='bg-gray-100 text-dark-600 px-8 py-2'>
      <h1 class='text-2xl font-bold text-center mb-3'>Coins</h1>

      <Search />
      <div class='mb-10'></div>

      <Show
        when={coinIds().length > 0}
        fallback={<div class='mx-auto text-center'>No coins added</div>}
      >
        <div class='container w-full mx-auto mt-3 text-sm grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 place-items-center z-10'>
          <For each={coinIds()}>{(id) => <CoinPriceCard coinId={id} />}</For>
        </div>
      </Show>

      <CoinGeckoFooter />
    </FullPageWrapper>
  );
};
