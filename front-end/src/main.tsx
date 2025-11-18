import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import { GlobalProvider } from './contexts/GlobalContext.tsx';
import { Provider } from 'react-redux'
import { store } from './store.ts';

// import global from 'global';

// if (typeof global !== 'object' || global.GLOBAL === global) {
//   global.GLOBAL = global;
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>

      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Provider>

  </React.StrictMode>,
)
