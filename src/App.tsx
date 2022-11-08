import React, {useEffect} from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';

import {AppNavigation} from './routes';
import {SpinnerOverlay} from './components';
import {store} from './store';
import BaseApi from './services/BaseApi';

export default function App() {
  useEffect(() => {
    BaseApi.setDefaults();
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <NativeBaseProvider>
          <AppNavigation />
          <SpinnerOverlay />
          <Toast />
        </NativeBaseProvider>
      </Provider>
    </NavigationContainer>
  );
}
