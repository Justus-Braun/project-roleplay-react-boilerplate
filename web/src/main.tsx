import React from 'react';
import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './providers/VisibilityProvider';
import App from './components/App';
import './index.css';
import { isEnvBrowser } from './utils/misc';
import { NextUIProvider } from '@nextui-org/react';

const root = document.getElementById('root');

if (isEnvBrowser()) {
  // https://i.imgur.com/iPTAdYV.png - Night time img
  root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  root!.style.backgroundSize = 'cover';
  root!.style.backgroundRepeat = 'no-repeat';
  root!.style.backgroundPosition = 'center';
}

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <NextUIProvider>
        <main className="mint text-foreground">
            <App />
        </main>
      </NextUIProvider>
    </VisibilityProvider>
  </React.StrictMode>,
);