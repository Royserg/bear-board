import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from 'solid-testing-library';
import { DropdownItem, DropdownLoadingItem } from './dropdown-item';

describe('<DropdownItem />', () => {
  describe('<DropdownItem />', () => {
    test('renders', async () => {
      const customClasses = 'custom-class';
      let containerClickCounter = 0;
      const customClickHandler = () => {
        containerClickCounter++;
      };

      const { unmount } = render(() => (
        <DropdownItem classNames={customClasses} onClick={customClickHandler} />
      ));

      const component = screen.getByTestId('dropdown-item');
      fireEvent.click(component);

      expect(component.classList.contains(customClasses)).toBe(true);
      expect(containerClickCounter).toBe(1);

      unmount();
    });
  });

  describe('<DropdownLoadingItem />', () => {
    test('renders', () => {
      const { container, unmount } = render(() => (
        <DropdownItem>
          <DropdownLoadingItem />
        </DropdownItem>
      ));

      const loadingParagraph = screen.getByText(/Loading/i);
      expect(loadingParagraph).toBeTruthy();
      expect(loadingParagraph.classList.contains('text-primary-content')).toBe(
        true
      );

      expect(container.innerHTML).toMatchInlineSnapshot(
        '"<div data-testid=\\"dropdown-item\\" class=\\"rounded-lg card card-compact w-full bg-primary hover:bg-primary-focus border-2 border-base-200 shadow text-primary-content cursor-pointer undefined\\"><div class=\\"card-body\\"><div data-testid=\\"dropdown-item\\" class=\\"rounded-lg card card-compact w-full bg-primary hover:bg-primary-focus border-2 border-base-200 shadow text-primary-content cursor-pointer undefined\\"><div class=\\"card-body\\"><p class=\\"text-primary-content\\">Loading...</p></div></div></div></div>"'
      );
      unmount();
    });
  });
});
