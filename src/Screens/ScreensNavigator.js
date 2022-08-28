import { View, Text } from 'react-native'
import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import AuthScreenNavigator from './AuthScreens/AuthScreenNavigator'
import BottomTabNavigator from './BottomTabScreens/BottomTabNavigator'

export default function ScreensNavigator() {
    const { isAuthenticated } = useAuthContext()
   
    return (
        <View style={{ flex: 1 }}>
            {!isAuthenticated ?
                <AuthScreenNavigator />

                : <BottomTabNavigator />


            }
        </View>
    )
}