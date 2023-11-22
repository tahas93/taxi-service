import { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  pageName: string;
}

const Navbar = (props: NavbarProps) => {
  const { pageName } = props;
  const [isShow, setShow] = useState(false);

  const navList = [
    { name: 'Home', link: '/' },
    { name: 'Book', link: '/book' },
    { name: 'Dashboard', link: '/dashboard' },
  ];

  return (
    <div className='w-full'>
      <nav className='relative flex items-center justify-between bg-blue-300 px-4 py-4 text-black'>
        <a
          className='flex h-10 w-10 items-center justify-center text-3xl font-bold leading-none'
          href='/'
        >
          <svg viewBox='.5 -.2 1023 1024.1' xmlns='http://www.w3.org/2000/svg'>
            <path d='m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z' />
            <path d='m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z' />
          </svg>
        </a>
        <div className='lg:hidden'>
          <button
            onClick={() => setShow(true)}
            className='navbar-burger flex items-center p-3 text-black'
          >
            <svg
              className='block h-4 w-4 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Mobile menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </button>
        </div>
        <ul className='absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-6'>
          {navList.map((item, ind) => (
            <>
              {ind >= 1 && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  stroke='currentColor'
                  className='current-fill h-4 w-4'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
                  />
                </svg>
              )}
              <li>
                {/* @ts-ignore */}
                <Link href={item.link}>
                  <p
                    className={`cursor-pointer hover:text-semibold text-sm ${
                      item.name === pageName ? 'text-white' : 'text-black'
                    }`}
                  >
                    {item.name}
                  </p>
                </Link>
              </li>
            </>
          ))}
        </ul>
        <a
          className='hidden rounded-xl bg-gray-50 px-6 py-2 text-sm font-bold text-gray-900 transition duration-200 hover:bg-gray-100  lg:ml-auto lg:mr-3 lg:inline-block'
          href='#'
        >
          Sign In
        </a>
        <a
          className='hidden rounded-xl bg-blue-500 px-6 py-2 text-sm font-bold text-white transition duration-200 hover:bg-blue-600 lg:inline-block'
          href='#'
        >
          Sign up
        </a>
      </nav>
      <div className={`navbar-menu relative z-50 ${!isShow && 'hidden'}`}>
        <div
          className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25'
          onClick={() => setShow(false)}
        ></div>
        <nav className='fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-white px-6 py-6'>
          <div className='mb-8 flex items-center'>
            <a
              className='mr-auto flex h-10 w-10 items-center justify-center text-3xl font-bold leading-none'
              href='/'
            >
              <svg
                height='1024pt'
                viewBox='.5 -.2 1023 1024.1'
                width='1024pt'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z' />
                <path d='m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z' />
              </svg>
            </a>
            <button className='navbar-close' onClick={() => setShow(false)}>
              <svg
                className='h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {navList.map((item, ind) => (
                <li key={ind} className='mb-1'>
                  {/* @ts-ignore */}
                  <Link href={item.link}>
                    <p
                      className={`cursor-pointer block rounded p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 ${
                        item.name === pageName ? 'text-blue-600' : 'text-gray-400'
                      }`}
                    >
                      {item.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-auto'>
            <div className='pt-6'>
              <a
                className='mb-3 block rounded-xl bg-gray-50 px-4 py-3 text-center text-xs font-semibold leading-loose hover:bg-gray-100'
                href='#'
              >
                Sign in
              </a>
              <a
                className='mb-2 block rounded-xl bg-blue-600 px-4 py-3 text-center text-xs font-semibold leading-loose text-white  hover:bg-blue-700'
                href='#'
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
