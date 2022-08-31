import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useAuthContext } from '../../../contexts/AuthContext';


export default function UserAccount({ navigation }) {
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
    <View style={{ padding: 30 }}>
      <Text style={{ fontWeight: 'bold' }}>User Email</Text>
      {/* <Text> {auth().currentUser.email} </Text> */}

      <TouchableOpacity onPress={() => handleLogout()} style={{ backgroundColor: '#a4161a', marginTop: 10 }}>

        <Text style={{ textAlign: 'center', color: 'white', paddingVertical: 10 }}>
          Logout</Text>
      </TouchableOpacity>

    </View>
  )
}