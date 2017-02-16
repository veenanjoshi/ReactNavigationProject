/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import { AppRegistry } from 'react-native';

 import configureStore from './app/store/configureStore';
 import NavigationRootContainer from './app/containers/NavRootContainer';
 import { Provider } from 'react-redux';

 const
   store = configureStore(),
   App = () => (
     <Provider store={store}>
       <NavigationRootContainer />
     </Provider>
   );

 AppRegistry.registerComponent('RNProject', () => App);
