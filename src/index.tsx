import './index.css';

import { Router } from 'solid-app-router';
import { render } from 'solid-js/web';
import App from './app';
import { StoreProvider } from './store';

render(
  () => (
    <StoreProvider>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  ),
  document.getElementById('root') as HTMLElement
);
