import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useAuthContext } from '../../../contexts/AuthContext';
import firestore from "@react-native-firebase/firestore"
import UserPosts from './UserPosts';



export default function UserAccount({ navigation }) {
  const { isAuthenticated, dispatch } = useAuthContext()
  const [isLoading, setIsLoading] = React.useState(false)
  // const [user, setUser] = React.useState({})
  let user
  React.useEffect(() => {
    getUser()
    console.log(user)
  }, [])


  // getUser()
  const handleLogout = () => {
    setIsLoading(true)
    auth().signOut()
      .then(() => {
        dispatch({ type: "LOGOUT" })
      })
      .catch((err) => {
        console.error(err)


        alert("Something went wrong")
      })
    setIsLoading(true)
  }


  const getUser = () => {
    let arr
    if (auth().currentUser)
      firestore().collection("users").doc(auth().currentUser.uid).get().then(
        (item) => {

          console.log(item)
          arr = item
        }
      )
  }

  return (
    <>
      {isLoading ?
        <ActivityIndicator size='large' color="#a4161a" style={{ marginTop: 350 }} />


        : <View style={{ padding: 10 }}>
          <View>
            {/* <Text style={{ fontWeight: 'bold' }}>User Email</Text>
          <Text style={{ fontWeight: 'bold' }}>{ }</Text> */}

            <TouchableOpacity onPress={() => handleLogout()} style={{ backgroundColor: '#a4161a', marginTop: 10 }}>

              <Text style={{ textAlign: 'center', color: 'white', paddingVertical: 10 }}>
                Logout</Text>
            </TouchableOpacity>
          </View>


          {/* USER POSTS USER POSTS */}
          <Text style={{ marginTop: 25, textAlign: 'center', color: 'black', fontSize: 20,
           fontWeight: 'bold',borderBottomWidth:1,borderColor:'#caceb7',padding:3 }} >Posts</Text>
          <View style={{ alignItems: 'center' }}>
            <ScrollView>

              <UserPosts />

            </ScrollView>
          </View>




        </View>



      }</>
  )
}