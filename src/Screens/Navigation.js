import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Login from './Auth/Login'
import SignUp from './Auth/SignUp'
import Home from './Frontend/Home'
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function Navigation() {
    return (
        <View style={styles.flexContainer}>

            <NavigationContainer>
                <Stack.Navigator>

                    <Stack.Screen name='login' component={Login} />
                    <Stack.Screen name='signUp' component={SignUp} />
                    <Stack.Screen name='home' component={Home}
                    options={{
                    headerTitle:"Home",
                    headerTitleAlign:'center'
                    }}
                    />
                </Stack.Navigator>

            </NavigationContainer>
        </View>
    )
}
const styles = StyleSheet.create({
    flexContainer: {
        flex: 1
    }
})