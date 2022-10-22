/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  LogBox,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store,persistor } from './src/store';

LogBox.ignoreAllLogs()


const App = () => {

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </ReduxProvider>
  );
};


export default App;
