import React from 'react';
import { View, Text, Button } from 'react-native'
import auth from '@react-native-firebase/auth';


export default function UserAccount({ navigation }) {
  return (
    <View style={{ padding: 30 }}>
      <Text style={{fontWeight:'bold'}}>User Email</Text>
      <Text> {auth().currentUser.email} </Text>
    </View>
  )
}