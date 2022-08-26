import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UserCart from './UserCart';
import UserCredsScreen from './UserCredsScreen';
import CheckOutScreen from './CheckOutScreen';

const Stack = createStackNavigator();

export default function CartScreensNavigator() {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName='Cart'
            >
                <Stack.Group screenOptions={{
                    headerShown: false
                }}>

                    <Stack.Screen name="Cart" component={UserCart} />
                    <Stack.Screen name="UserCredsScreen" component={UserCredsScreen} />
                    <Stack.Screen name="CheckOutScreen" component={CheckOutScreen} />
                </Stack.Group>

            </Stack.Navigator>
        </View>
    )
}