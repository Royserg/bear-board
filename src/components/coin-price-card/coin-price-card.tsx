import { Component, createResource, ErrorBoundary, onCleanup, onMount, Show } from 'solid-js';
import { CoinData } from '../../models/coin-price';
import { getCoinData } from '../../services/backend';
import { Spinner } from '../spinner/spinner';
import { CoinActionsMenu } from './components/coin-actions-menu';

interface CoinPriceCardProps {
  coinId: string;
}

export const CoinPriceCard: Component<CoinPriceCardProps> = ({ coinId }) => {
  // 1 minute = 1 second * 60
  const REFETCH_DATA_INTERVAL = 1000 * 60;

  const fetchCoinData = async () => {
    try {
      return await getCoinData({ coinId });
    } catch (error) {
      console.log(`Error fetching coin data: ${coinId}`, error);
    }
  };
  const [data, { refetch }] = createResource<CoinData>(fetchCoinData);

  let fetchDataTimer: NodeJS.Timer;

  onMount(() => {
    // Refetch coin data every minute
    fetchDataTimer = setInterval(() => refetch(), REFETCH_DATA_INTERVAL);
  });

  onCleanup(() => {
    clearInterval(fetchDataTimer);
  });

  return (
    <div class='my-4 h-64 w-60 max-w-lg items-center justify-center overflow-visible rounded-2xl bg-base-100 shadow-xl relative transition-all duration-300'>
      <Show when={!!data.latest} fallback={<Spinner />}>
        <CoinActionsMenu coinId={coinId} onReload={() => refetch()} />

        <ErrorBoundary fallback={(error) => <CoinPriceError error={error} />}>
          {/* 24hour change */}
          <Show when={data()?.market_data}>
            <div class='h-24 bg-light-600 text-base-content'>
              <p class='text-center pt-2'>24h change</p>
              <p
                class={
                  'text-center font-bold text-lg ' +
                  (data().market_data.price_change_percentage_24h > 0
                    ? 'text-emerald-500'
                    : 'text-rose-500')
                }
              >
                {data().market_data.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </Show>

          {/* Coin img */}
          <div class='-mt-8 flex justify-center'>
            <img
              class='h-24 rounded-full border shadow-xl bg-white'
              src={data().image.large}
            />
          </div>

          {/* Coin name */}
          <div class='mt-5 mb-1 px-3 text-center text-xl font-semibold text-base-content'>
            {data().name}
          </div>

          {/* Price */}
          <blockquote>
            <p class='mx-2 mb-7 text-center text-base-content'>
              <Show when={data().market_data} fallback={'Unknown price'}>
                ${data()?.market_data.current_price.usd.toFixed(2)}
              </Show>
            </p>
          </blockquote>
        </ErrorBoundary>
      </Show>
    </div>
  );
};

const CoinPriceError: Component<{ error: unknown }> = ({ error }) => (
  <div class='w-full h-full grid place-items-center'>{error.toString()}</div>
);
