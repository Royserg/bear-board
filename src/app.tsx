import { useRoutes } from 'solid-app-router';
import type { Component } from 'solid-js';
import { Navbar } from './components/navbar/navbar';
import { routes } from './routes';

const App: Component = () => {
  const Route = useRoutes(routes);

  return (
    <div class='w-screen h-screen overflow-x-auto overflow-y-auto'>
      <Navbar />

      <main class='w-full h-full'>
        <Route />
      </main>
    </div>
  );
};

export default App;
