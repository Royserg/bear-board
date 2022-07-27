import { useRouteData } from 'solid-app-router';
import { Component, Suspense } from 'solid-js';
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
    </FullPageWrapper>
  );
};

export default About;
