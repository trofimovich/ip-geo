import React from 'react';

import StoreProvider from './store/StoreProvider';
import Home from './views/Home';

const App = () => (
  <StoreProvider>
    <Home />
  </StoreProvider>
);

export default App;
