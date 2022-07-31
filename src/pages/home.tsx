import { For, Show } from 'solid-js';
import { TransitionGroup } from 'solid-transition-group';
import { CoinPriceCard } from '../components/coin-price-card/coin-price-card';
import { CoinGeckoFooter } from '../components/footer/coin-gecko-footer';
import { Search } from '../components/search/search';
import { ThemeWidget } from '../components/theme-widget/theme-widget';
import { FullPageWrapper } from '../layouts/fullpage';
import { useSelector } from '../store';

export const Home = () => {
  const {
    coins: { coinIds },
  } = useSelector();

  return (
    <FullPageWrapper classNames='bg-base-200 px-8 py-2 relative'>
      {/* Widgets */}
      <ThemeWidget />

      <div class='mt-5'></div>

      <Search />
      <div class='mb-10'></div>

      <Show
        when={coinIds().length > 0}
        fallback={<div class='mx-auto text-center'>No coins added</div>}
      >
        <div class='container w-full mx-auto mt-3 text-sm grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 place-items-center z-10'>
          <TransitionGroup
            onExit={(el, done) => {
              const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 450,
              });
              a.finished.then(done);
            }}
          >
            <For each={coinIds()}>{(id) => <CoinPriceCard coinId={id} />}</For>
          </TransitionGroup>
        </div>
      </Show>

      <CoinGeckoFooter />
    </FullPageWrapper>
  );
};
