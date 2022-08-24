import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home/Home'
import ProdutcDetailsScreen from './ProductDetails.js/ProdutcDetailsScreen'

const Stack = createNativeStackNavigator()

export default function HomeScreenNavigator() {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName='HomePage'>

                <Stack.Group screenOptions={{
                    headerTitleAlign: 'center'
                }}>
                    <Stack.Screen name='HomePage' component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name='ProductDetails' component={ProdutcDetailsScreen}
                        options={{ title: "Details" }}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </View>
    )
}