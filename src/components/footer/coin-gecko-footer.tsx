import { Component } from 'solid-js';

export const CoinGeckoFooter: Component = () => {
  return (
    <footer class='mt-auto px-2 pt-4 w-full text-center'>
      Powered by{' '}
      <a
        href='https://www.coingecko.com/en/api'
        target='_blank'
        class='text-teal-700 hover:text-teal-900'
      >
        CoinGecko API
      </a>
    </footer>
  );
};
