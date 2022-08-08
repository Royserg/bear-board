import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import BearBoardLogo from '../components/bear-board-logo';
import { BsApple, BsWindows } from 'react-icons/bs';
import { VscTerminalLinux } from 'react-icons/vsc';

type UserPlatform = 'Mac' | 'Windows' | 'Linux' | 'Other';

const Home: NextPage = () => {
  const [userPlatform, setUserPlatform] = useState<UserPlatform>();

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const platformInfo = userAgent?.split(' ')[1];

    if (platformInfo) {
      if (platformInfo.includes('Macintosh')) {
        setUserPlatform('Mac');
        return;
      }

      if (platformInfo.includes('Windows')) {
        setUserPlatform('Windows');
        return;
      }

      if (platformInfo.includes('Linux')) {
        setUserPlatform('Linux');
        return;
      }

      setUserPlatform('Other');
    }
  }, []);

  const iconClassNames = 'text-xl mr-3';
  const platformIcon = () => {
    if (userPlatform === 'Other') {
      return;
    }
    if (userPlatform === 'Windows') {
      return <BsWindows className={iconClassNames} />;
    }
    if (userPlatform === 'Mac') {
      return <BsApple className={iconClassNames} />;
    }
    if (userPlatform === 'Linux') {
      return <VscTerminalLinux className={iconClassNames} />;
    }
  };

  return (
    <div className='bg-slate-100'>
      <Head>
        <title>BearBoard</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto flex flex-col items-center min-h-screen p-4'>
        {/* Divider */}
        <div className='mt-10'></div>

        {/* Hero section */}
        <section className='flex flex-col items-center justify-center'>
          <BearBoardLogo />

          <h1 className='text-xl md:text-[3rem] leading-normal font-extrabold text-gray-700'>
            BearBoard
          </h1>
          <h3 className='text-md text-gray-600'>Cryptocurrency dashboard.</h3>

          {/* Divider */}
          <div className='mt-7'></div>

          <div>
            <button className='rounded-full py-5 px-16 border-2 border-gray-500 text-gray-700 shadow-md hover:border-amber-500 hover:text-amber-500 hover:shadow-xl transition-colors flex'>
              {platformIcon()}
              Download
            </button>
            <p className='mt-1 text-center text-sm'>Other platforms</p>
          </div>
        </section>

        {/* <section>TODO: Features</section> */}
        {/* <section>TODO: Version & releases</section> */}
      </main>
    </div>
  );
};

export default Home;
