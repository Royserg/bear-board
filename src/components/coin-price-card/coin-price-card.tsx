import { BsTrash } from 'solid-icons/bs';
import { Component, createResource, ErrorBoundary, Show } from 'solid-js';
import { CoinData } from '../../models/coin-price';
import { getCoinData } from '../../services/backend';
import { useSelector } from '../../store';
import { Spinner } from '../spinner/spinner';

interface CoinPriceCardProps {
  coinId: string;
}

export const CoinPriceCard: Component<CoinPriceCardProps> = ({ coinId }) => {
  const {
    coins: { deleteCoinId },
  } = useSelector();

  const fetchCoinData = async () => await getCoinData({ coinId });
  const [data] = createResource<CoinData>(fetchCoinData);

  const handleDeleteCoin = () => {
    deleteCoinId(coinId);
  };

  // Tailwind comp https://tailwindcomponents.com/component/small-bio-paper
  return (
    <div class='my-4 h-64 w-60 max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-slate-200 shadow-xl relative'>
      <Show when={!data.loading} fallback={<Spinner />}>
        {/* Delete button */}
        <button
          class='absolute right-2 top-2 btn btn-xs btn-circle btn-ghost'
          onClick={handleDeleteCoin}
        >
          <BsTrash class='' size={20} />
        </button>

        <ErrorBoundary fallback={(error) => <CoinPriceError error={error} />}>
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
              ${data().market_data.current_price.usd.toFixed(2)}
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
