import { useRoutes } from 'solid-app-router';
import { Component, onMount } from 'solid-js';
import { Navbar } from './components/navbar/navbar';
import { routes } from './routes';
import { initCoinsStore } from './store/coins';

const App: Component = () => {
  const Route = useRoutes(routes);

  onMount(() => {
    initCoinsStore();
  });

  return (
    <div class='w-screen h-screen overflow-x-auto overflow-y-auto'>
      <Navbar />

      <main class='w-full h-full pt-5'>
        <Route />
      </main>
    </div>
  );
};

export default App;
