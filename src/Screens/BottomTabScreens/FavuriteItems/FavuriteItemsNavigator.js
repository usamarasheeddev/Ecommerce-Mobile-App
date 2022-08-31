import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useAuthContext } from '../../../contexts/AuthContext';
import AuthScreenNavigator from '../../AuthScreens/AuthScreenNavigator';
import FavuriteItems from './FavuriteItems';
const Stack = createStackNavigator();




export default function FavuriteItemsNavigator() {
    const { isAuthenticated } = useAuthContext()
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator
            >
                <Stack.Group screenOptions={{
                    headerShown: false
                }}>
                    {isAuthenticated ?
                        <Stack.Screen name="FavuriteItem" component={FavuriteItems} />


                        : <Stack.Screen name='Auth' component={AuthScreenNavigator} />
                    }

                </Stack.Group>

            </Stack.Navigator>
        </View>
    )
}