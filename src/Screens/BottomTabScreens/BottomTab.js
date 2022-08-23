import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from '../HomeNavigation';
import FavuriteItems from './FavuriteItems/FavuriteItems';
import UserCart from './Cart/UserCart';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator>
            <Tab.Group 
            screenOptions={{headerShown:false}}>

                <Tab.Screen name='Home' component={HomeNavigation} />
                <Tab.Screen name='Favurite Item' component={FavuriteItems} />
                <Tab.Screen name='Cart' component={UserCart} />
            </Tab.Group>
        </Tab.Navigator>

    )
}