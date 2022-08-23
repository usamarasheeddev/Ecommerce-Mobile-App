import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import Login from './Auth/Login'
import SignUp from './Auth/SignUp'
import Home from './Frontend/Home/Home'
import ImagePicker from './ImagePicker'
import ForgetPassword from './Auth/ForgetPassword'
import { NavigationContainer } from '@react-navigation/native';
import { useAuthContext } from '../contexts/AuthContext'
import auth from '@react-native-firebase/auth';
import Products from './Products'
import ProdutcDetailsScreen from './Frontend/ProductDetails.js/ProdutcDetailsScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function Navigation() {
    const { isAuthenticated, dispatch } = useAuthContext()
    const handleLogout = () => {
        console.log(isAuthenticated)
        auth().signOut()
            .then(() => {
                dispatch({ type: "LOGOUT" })
            })
            .catch((err) => {
                console.error(err)
                alert("Something went wrong")
            })
    }
    return (
        <View style={styles.flexContainer}>

            <NavigationContainer>

                <Stack.Navigator initialRouteName='Home'>
                    {isAuthenticated
                        ? <Stack.Group screenOptions={{ headerShown: false }}>
                            <Stack.Screen name='products' component={Products} />
                            <Stack.Screen name='imagePicker' component={ImagePicker} />
                            <Stack.Screen name='login' component={Login} />
                            <Stack.Screen name='signUp' component={SignUp} />
                            <Stack.Screen name='forgetPassword' component={ForgetPassword} />
                        </Stack.Group>
                        : <Stack.Group screenOptions={{
                            // headerRight: () => { return <Button title='Logout' onPress={handleLogout} /> }
                            headerTitleAlign:'center'
                        }}>
                            <Stack.Screen name='Home' component={Home} />
                            <Stack.Screen  name='ProductDetails' component={ProdutcDetailsScreen}  
                            options={{title:"Details"}}
                            />
                        </Stack.Group>
                    }
                </Stack.Navigator>

            </NavigationContainer>
        </View >
    )
}
const styles = StyleSheet.create({
    flexContainer: {
        flex: 1
    }
})