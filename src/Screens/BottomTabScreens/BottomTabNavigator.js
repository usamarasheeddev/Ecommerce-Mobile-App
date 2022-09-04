import { View, Text, StyleSheet, Button,StatusBar } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavuriteItems from './FavuriteItems/FavuriteItems';
import HomeScreenNavigator from '../Frontend/HomeScreenNavigator';
import SearchTab from './SearchTab.js/SearchTab';
import AddPost from './Post/AddPost';
import Home from 'react-native-vector-icons/SimpleLineIcons'
import Heart from 'react-native-vector-icons/SimpleLineIcons'
import Search from 'react-native-vector-icons/Ionicons'
import Plus from 'react-native-vector-icons/AntDesign'
import User from 'react-native-vector-icons/AntDesign'
import { IconButton, MD3Colors } from 'react-native-paper';
import auth from "@react-native-firebase/auth"
import { useAuthContext } from '../../contexts/AuthContext';
import UserScreenNavigator from './UserAccount/UserScreenNavigator';
import FavuriteItemsNavigator from './FavuriteItems/FavuriteItemsNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabScreen({ navigation }) {
    const { isAuthenticated, dispatch } = useAuthContext()





    return (
        <Tab.Navigator initialRouteName='Account'
        
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
                    ,
                },tabBarInactiveTintColor:"#cfe1b9",
                
                
            }}
        >

            {/* BottomTabS */}
            <Tab.Group
                screenOptions={{ tabBarShowLabel: false ,}}>
                    

                <Tab.Screen name='Feed' component={HomeScreenNavigator}
                    options={{
                        headerShown: false,
                        tabBarIcon: (({ color }) => <Home name='home' color={color} size={25}
                        />),
                        headerStyle:{
                            // backgroundColor:'#40916c',
                        
                        }
                        // ,headerTintColor:'white'
                        ,headerTitleAlign:'center'
                    }}
                />



                <Tab.Screen name='Search' component={SearchTab}
                    options={{
                        headerShown: false,
                        tabBarIcon: (({ color }) => <Search name='search-outline' size={30} color={color}
                        />),tabBarHideOnKeyboard:true,
                    }}
                />



                <Tab.Screen name='AddPost' component={AddPost}

                    options={{

                        tabBarIcon: (({ color }) => <Plus name='pluscircle' size={38} color={color} />),
                        headerShown: false,tabBarHideOnKeyboard:true
                    }} />


                <Tab.Screen name='FavuriteItems' component={FavuriteItemsNavigator}
                    options={{
                        // tabBarBadge: 1,
                        tabBarIcon: (({ color }) => <Heart name='heart' color={color} size={26} />),
                        tabBarActiveTintColor: 'red', headerTitleAlign: 'center',
                        headerShown: false,
                    }}
                />

                <Tab.Screen name='Account' component={UserScreenNavigator}
                    options={{
                        tabBarIcon: (({ color }) => <User name='user' color={color} size={25} />),
                        headerTitleAlign: 'center',tabBarHideOnKeyboard:true,headerShown:false
                       

                    }}

                />




            </Tab.Group>
        </Tab.Navigator>

    )
}
