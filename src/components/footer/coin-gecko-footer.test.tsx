import { describe, expect, test } from 'vitest';
import { render, screen } from 'solid-testing-library';
import { CoinGeckoFooter } from './coin-gecko-footer';

describe('<CoinGeckoFooter />', () => {
  test('renders', () => {
    const coinGeckoApiUrl = 'https://www.coingecko.com/en/api';

    const { container, unmount } = render(() => <CoinGeckoFooter />);

    const coinGeckoAnchorEl: HTMLAnchorElement = screen.getByText(
      /CoinGecko API/i
    ) as HTMLAnchorElement;
    expect(coinGeckoAnchorEl.href).toBe(coinGeckoApiUrl);

    expect(container.innerHTML).toMatchInlineSnapshot(
      '"<footer class=\\"mt-auto px-2 pt-4 w-full text-center\\">Powered by <a href=\\"https://www.coingecko.com/en/api\\" target=\\"_blank\\" class=\\"text-teal-700 hover:text-teal-900\\">CoinGecko API</a></footer>"'
    );
    unmount();
  });
});
