import { Link } from 'solid-app-router';

export const Navbar = () => {
  return (
    <nav class='bg-gray-600 text-gray-900 px-4'>
      <ul class='flex items-center'>
        <li class='py-2 px-4'>
          <Link
            href='/'
            class='no-underline text-light-100 hover:text-gray-300'
          >
            Home
          </Link>
        </li>
        <li class='py-2 px-4'>
          <Link
            href='/about'
            class='no-underline text-light-100 hover:text-gray-300'
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
