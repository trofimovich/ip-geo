import React from 'react';
import { Provider } from 'react-redux';
import { node, arrayOf, oneOfType } from 'prop-types';

import configureStore from '.';

const StoreProvider = ({ children }) => {
  const store = configureStore();
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;

StoreProvider.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]).isRequired,
};
