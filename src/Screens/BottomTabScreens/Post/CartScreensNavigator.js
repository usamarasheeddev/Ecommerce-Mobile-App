import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UploadImg from './UploadImg';

const Stack = createStackNavigator();

export default function CartScreensNavigator() {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator
            >
                <Stack.Group screenOptions={{
                    headerShown: false
                }}>

                    <Stack.Screen name="UploadPost" component={UploadImg} />

                </Stack.Group>

            </Stack.Navigator>
        </View>
    )
}