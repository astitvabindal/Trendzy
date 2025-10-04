import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './src/Routes/Navigation';
import {Provider} from 'react-redux';
import store from './src/Store';

const App = () => {
  return (
    <Provider store={store}>
    <GestureHandlerRootView style={{ flex: 1, paddingTop: 50 }}>
      <Navigation />
    </GestureHandlerRootView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
