import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import BearBoardLogo from '../components/bear-board-logo';

interface PlatformInfo {
  platform?: string;
  userAgent?: string;
}

const Home: NextPage = () => {
  const [platformInfo, setPlatformInfo] = useState<PlatformInfo>();

  useEffect(() => {
    setPlatformInfo({
      platform: navigator?.platform,
      userAgent: navigator?.userAgent,
    });
  }, []);

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
            <button className='rounded-full p-5 border-2 border-gray-500 text-gray-700 shadow-md hover:border-amber-700 hover:text-amber-700 hover:shadow-xl transition-colors'>
              Download PLATFORM
            </button>
            <p className='mt-1 text-center'>Other platforms</p>
          </div>

          <code className='w-3/4 h-20 text-gray-600'>
            <div className='break-words w-100 h-10'>
              Navigator platform:
              <p>{platformInfo?.platform}</p>
            </div>
            <div className='mt-4 w-100 h-10'>
              Navigator userAgent:
              <p className='break-words h-20'>{platformInfo?.userAgent}</p>
            </div>
          </code>
        </section>

        {/* <section>TODO: Features</section> */}
        {/* <section>TODO: Version & releases</section> */}
      </main>
    </div>
  );
};

export default Home;
