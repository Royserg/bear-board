import { NavLink, useLocation } from 'solid-app-router';
import { createMemo } from 'solid-js';

export const Navbar = () => {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  const isActivePath = (path: string) => {
    const result = path === pathname();
    console.log('path: ', path, result);
    return result;
  };

  const activeNavLinkLiStyles = 'bg-gray-100 rounded-t-md';
  const activeNavLinkTextStyles = 'text-dark-200';

  return (
    <nav class='fixed w-full bg-gray-600 text-gray-900 px-4'>
      <ul class='flex items-center'>
        <li
          classList={{
            'py-2 px-4': true,
            [activeNavLinkLiStyles]: isActivePath('/'),
          }}
        >
          <NavLink
            href='/'
            class={`no-underline hover:text-gray-300 ${
              isActivePath('/') ? activeNavLinkTextStyles : 'text-light-100'
            }`}
          >
            Home
          </NavLink>
        </li>
        <li
          classList={{
            'py-2 px-4': true,
            [activeNavLinkLiStyles]: isActivePath('/about'),
          }}
        >
          <NavLink
            href='/about'
            class={`no-underline hover:text-gray-300 ${
              isActivePath('/about')
                ? activeNavLinkTextStyles
                : 'text-light-100'
            }`}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
