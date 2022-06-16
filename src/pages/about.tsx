import { Component, createEffect, Suspense } from 'solid-js';
import { useRouteData } from 'solid-app-router';
import { FullPageWrapper } from '../layouts/fullpage';

const About: Component = () => {
  const aboutData = useRouteData<() => string>();

  return (
    <FullPageWrapper classNames='bg-gray-100 text-gray-700 p-8'>
      <h1 class='text-2xl font-bold text-center mb-5'>About the project</h1>

      <Suspense fallback={<span>Loading...</span>}>
        <div class='container mx-auto w-full px-5'>
          <p class='text-lg break-normal h-20 whitespace-normal'>
            {aboutData()}
          </p>
        </div>
      </Suspense>

      <footer class='fixed bottom-0 left-0 px-2 py-4 w-full text-center'>
        Powered by{' '}
        <a
          href='https://www.coingecko.com/en/api'
          target='_blank'
          class='text-teal-700 hover:text-teal-900'
        >
          CoinGecko API
        </a>
      </footer>
    </FullPageWrapper>
  );
};

export default About;
