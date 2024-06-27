import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@monorepo/common/src/styles/common.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
