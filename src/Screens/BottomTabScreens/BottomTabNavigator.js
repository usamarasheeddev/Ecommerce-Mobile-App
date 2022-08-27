import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavuriteItems from './Cart/FavuriteItems/FavuriteItems';
import UserCart from './Cart/UserCart';
import HomeScreenNavigator from '../Frontend/HomeScreenNavigator';
import SearchTab from './SearchTab.js/SearchTab';
import CartScreensNavigator from './Cart/CartScreensNavigator';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from 'react-native-vector-icons/SimpleLineIcons'
import Heart from 'react-native-vector-icons/SimpleLineIcons'
import Search from 'react-native-vector-icons/Ionicons'
import Bag from 'react-native-vector-icons/SimpleLineIcons'


const Tab = createBottomTabNavigator();

export default function BottomTabScreen() {
    return (
        <Tab.Navigator initialRouteName='Home'
            screenOptions={{
                //bottom tab styling
                tabBarStyle: {
                    // backgroundColor:'black',
                    position: "absolute",
                    bottom: 15,
                    height: 60,
                    borderRadius: 10,
                    width: 320,
                    marginHorizontal: 19,
                    // shasdow
                    shadowColor: "#000",
                    shadowOpacity: 0.5,
                    shadowOffset: {
                        width: 10,
                        height: 10,
                    }

                }
            }}
        >

            {/* BottomTabS */}
            <Tab.Group
                screenOptions={{ tabBarShowLabel: false }}>

                <Tab.Screen name='Home' component={HomeScreenNavigator}

                    options={{
                        headerShown: false,
                        tabBarIcon: (({ color }) => <Home name='home' color={color} size={25} />)
                    }}
                />
                <Tab.Screen name='Favurite Item' component={FavuriteItems}
                    options={{
                        tabBarIcon: (({ color }) => <Heart name='heart' color={color} size={25} />),
                        tabBarActiveTintColor: 'red',headerTitleAlign:'center'
                    }}
                />

                <Tab.Screen name='Search' component={SearchTab}
                    options={{
                        tabBarIcon: (({ color }) => <Search name='search-outline' size={30} color={color} />)
                    }}
                />

                <Tab.Screen name='UserCart' component={CartScreensNavigator}

                    options={{

                        tabBarIcon: (({ color }) => <Bag name='bag' size={25} color={color} />),
                        headerShown:false,
                    }} />
            </Tab.Group>
        </Tab.Navigator>

    )
}
