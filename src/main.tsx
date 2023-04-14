import {View, Text} from 'react-native';
import React from 'react';
import App from '../App';
import {Provider} from 'react-redux';
import {store} from './Redux/store';

const Main = () => {
  return (
    <>

    <Provider store={store}>
      <App />
     </Provider>
     </>
  );
};

export default Main;
