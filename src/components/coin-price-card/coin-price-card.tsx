import { Component, createResource, ErrorBoundary, Show } from 'solid-js';
import { CoinData } from '../../models/coin-price';
import { getCoinData } from '../../services/backend';
import { Spinner } from '../spinner/spinner';
import { CoinActionsMenu } from './components/coin-actions-menu';

interface CoinPriceCardProps {
  coinId: string;
}

export const CoinPriceCard: Component<CoinPriceCardProps> = ({ coinId }) => {
  const fetchCoinData = async () => {
    try {
      return await getCoinData({ coinId });
    } catch (error) {
      console.log(`Error fetching coin data: ${coinId}`, error);
    }
  };
  const [data, { refetch }] = createResource<CoinData>(fetchCoinData);

  // Tailwind comp https://tailwindcomponents.com/component/small-bio-paper
  return (
    <div class='my-4 h-64 w-60 max-w-lg items-center justify-center overflow-visible rounded-2xl bg-slate-200 shadow-xl relative'>
      <Show when={!data.loading} fallback={<Spinner />}>
        <CoinActionsMenu coinId={coinId} onReload={() => refetch()} />

        <ErrorBoundary fallback={(error) => <CoinPriceError error={error} />}>
          <Show when={data()?.market_data}>
            <div class='h-24 bg-light-600'>
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
          <div class='-mt-8 flex justify-center'>
            <img
              class='h-24 rounded-full border shadow-xl bg-light-400'
              src={data().image.large}
            />
          </div>
          <div class='mt-5 mb-1 px-3 text-center text-xl font-semibold'>
            {data().name}
          </div>
          <blockquote>
            <p class='mx-2 mb-7 text-center text-base'>
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

const CoinPriceError: Component<{ error: any }> = ({ error }) => (
  <div class='w-full h-full grid place-items-center'>{error.toString()}</div>
);
