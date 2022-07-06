import { BiMenuAltRight } from 'solid-icons/bi';
import { BsArrowRepeat, BsCheck2, BsTrash } from 'solid-icons/bs';
import { Component, createSignal, Show } from 'solid-js';
import { useSelector } from '../../../store';

const MENU_ICON_SIZE = 24;
const MENU_ITEM_ICON_SIZE = 24;

interface CoinActionsMenuProps {
  coinId: string;
  onReload: () => void;
}

const menuItemClasses = 'w-full tooltip tooltip-right';

export const CoinActionsMenu: Component<CoinActionsMenuProps> = ({
  coinId,
  onReload,
}) => {
  const {
    coins: { deleteCoinId },
  } = useSelector();

  const [shouldConfirmDelete, setShouldConfirmDelete] = createSignal(false);

  const DeleteButton = () => (
    <div
      class={menuItemClasses}
      data-tip='delete'
      onClick={() => setShouldConfirmDelete(true)}
    >
      <BsTrash size={MENU_ITEM_ICON_SIZE} />
    </div>
  );

  return (
    <div class='dropdown absolute right-2 top-2'>
      <div tabindex='0' class='btn btn-xs btn-circle btn-ghost'>
        <BiMenuAltRight size={MENU_ICON_SIZE} />
      </div>

      {/* Dropdown content */}
      <ul
        tabindex='0'
        class='dropdown-content menu p-3  shadow bg-base-100 rounded-box'
        onMouseLeave={() => setShouldConfirmDelete(false)}
      >
        {/* Reload */}
        <li>
          <div class={menuItemClasses} data-tip='reload' onClick={onReload}>
            <BsArrowRepeat size={MENU_ITEM_ICON_SIZE} />
          </div>
        </li>

        {/* Delete */}
        <li>
          <Show when={shouldConfirmDelete()} fallback={DeleteButton}>
            {/* Confirm delete */}
            <div
              class={`${menuItemClasses} bg-green-600`}
              data-tip='Click to confirm'
              onClick={() => deleteCoinId(coinId)}
            >
              <BsCheck2 class='text-white' size={MENU_ITEM_ICON_SIZE} />
            </div>
          </Show>
        </li>
      </ul>
    </div>
  );
};
