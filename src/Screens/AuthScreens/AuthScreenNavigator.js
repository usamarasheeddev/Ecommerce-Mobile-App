import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Login'
import SignUp from './SignUp'
import ForgetPassword from './ForgetPassword'


const Stack = createNativeStackNavigator()
export default function AuthScreenNavigator() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName='Login'>

        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='forgetPassword' component={ForgetPassword} />
        </Stack.Group>
      </Stack.Navigator>
    </View>
  )
}