import { useRoutes } from 'solid-app-router';
import { Component, onMount } from 'solid-js';
import { routes } from './routes';

const App: Component = () => {
  const Route = useRoutes(routes);

  return (
    <div class='w-screen h-screen overflow-x-auto overflow-y-auto'>
      {/* 
        <Navbar /> 
        add `pt-5` to <main> if Navbar uncommented
      */}

      <main class='w-full h-full'>
        <Route />
      </main>
    </div>
  );
};

export default App;
