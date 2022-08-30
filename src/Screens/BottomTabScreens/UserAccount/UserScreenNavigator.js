import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UserAccount from './UserAccount';


const Stack = createStackNavigator();

export default function UserScreenNavigator() {
    return (
        <View style={{ flex: 1 }}>

            <Stack.Navigator initialRouteName='UserAccount'>

                <Stack.Screen name='UserAccount' component={UserAccount}
                
                options={{

                    headerShown:false
                }}/>
                

            </Stack.Navigator>


        </View>
    )
}