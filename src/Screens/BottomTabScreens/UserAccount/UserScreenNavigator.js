import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UserAccount from './UserAccount';
import AddProducts from './AddProducts';
import DelProducts from './DelProducts';
import Orders from './Orders';

const Stack = createStackNavigator();

export default function UserScreenNavigator() {
    return (
        <View style={{ flex: 1 }}>

            <Stack.Navigator initialRouteName='UserAccount'>

                <Stack.Screen name='UserAccount' component={UserAccount} />
                <Stack.Screen name='AddProducts' component={AddProducts} />
                <Stack.Screen name='DelProducts' component={DelProducts} />
                <Stack.Screen name='Orders' component={Orders} />


            </Stack.Navigator>


        </View>
    )
}