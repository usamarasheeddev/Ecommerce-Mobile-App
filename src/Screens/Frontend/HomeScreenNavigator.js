import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home/Home'
import ProdutcDetailsScreen from './ProductDetails.js/ProdutcDetailsScreen'
import AuthScreenNavigator from '../AuthScreens/AuthScreenNavigator'
import { useAuthContext } from '../../contexts/AuthContext'

const Stack = createNativeStackNavigator()

export default function HomeScreenNavigator() {
    const { isAuthenticated } = useAuthContext()
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
                    <Stack.Screen name='Auth' component={AuthScreenNavigator}
                    options={{
                        headerShown:false
                    }}
                    />


                </Stack.Group>
            </Stack.Navigator>
        </View>
    )
}