import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
// import AddPostForm from './';
import UploadImg from './UploadImg';
import Login from '../../AuthScreens/Login';
import SignUp from '../../AuthScreens/SignUp';
import AuthScreenNavigator from '../../AuthScreens/AuthScreenNavigator';
import { useAuthContext } from '../../../contexts/AuthContext';
const Stack = createStackNavigator();

export default function CartScreensNavigator() {
    const { isAuthenticated } = useAuthContext()

    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator
            >
                <Stack.Group screenOptions={{
                    headerShown: false
                }}>
                    {isAuthenticated ?
                        <Stack.Screen name="AddNewPost" component={UploadImg} />


                        : <Stack.Screen name='Auth' component={AuthScreenNavigator} />
                    }

                </Stack.Group>

            </Stack.Navigator>
        </View>
    )
}