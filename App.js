// import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthContextProvider from './src/contexts/AuthContext';
import ScreensNavigator from './src/Screens/ScreensNavigator';
import FavuriteItemsContextProvider from './src/contexts/FavuriteItemsContext';
import SplashScreen from 'react-native-splash-screen'

import PostContextProvider from './src/contexts/PostContext';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])


  return (
    <AuthContextProvider>
      <PostContextProvider>
        <FavuriteItemsContextProvider>
          <NavigationContainer>

            <ScreensNavigator />

          </NavigationContainer>
        </FavuriteItemsContextProvider>
      </PostContextProvider>
    </AuthContextProvider>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
