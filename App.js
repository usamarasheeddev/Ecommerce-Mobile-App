import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthContextProvider from './src/contexts/AuthContext';
import CartContextProvider from './src/contexts/CartContext';
import ScreensNavigator from './src/Screens/ScreensNavigator';
import ProductsContextProvider from './src/contexts/ProductsContext';

const App = () => {

  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <NavigationContainer>

            <ScreensNavigator />

          </NavigationContainer>
        </CartContextProvider>
      </ProductsContextProvider>
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
