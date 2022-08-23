import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavuriteItems from './FavuriteItems/FavuriteItems';
import UserCart from './Cart/UserCart';
import HomeScreenNavigator from '../Frontend/HomeScreenNavigator';
import SearchTab from './SearchTab.js/SearchTab';
import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Group
                screenOptions={{ headerShown: false }}>

                <Tab.Screen name='Home' component={HomeScreenNavigator} />
                <Tab.Screen name='Favurite Item' component={FavuriteItems} />
                <Tab.Screen name='Search' component={SearchTab} />
                <Tab.Screen name='Cart' component={UserCart} />
            </Tab.Group>
        </Tab.Navigator>

    )
}