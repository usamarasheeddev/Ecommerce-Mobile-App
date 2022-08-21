// import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native'
import * as React from 'react';
import { TextInput } from 'react-native-paper';



export default function SignUp({ navigation }) {
  const [userCreds, setUserCreds] = React.useState("");
  


  const handleSignUp = () => {
    console.log("hello")
    console.log(userCreds)
  }

  return (

    <View style={styles.flexContainer}>
      {/* <ImageBackground source={bg} style={styles.img} > */}

      <View>

        <View><Text style={styles.heading}>SignUp</Text></View>
        <View style={styles.screenStyle}>

          <TextInput
            style={{ marginTop: 10 }}
            mode="outlined"
            label="Email"
            // value={text}
            name="email"
            onChangeText={text => setUserCreds(s => ({ ...s, userEmail: text }))}
            outlineColor='#0466c8'
            activeOutlineColor='#4361ee'
          />
          <TextInput
            style={{ marginTop: 10 }}
            mode="outlined"
            label="Username"
            // value={text}
            name="username"
            onChangeText={text => setUserCreds(s => ({ ...s, username: text }))}
            outlineColor='#0466c8'
            activeOutlineColor='#4361ee'
          />
          <TextInput
            style={{ marginTop: 10 }}
            mode="outlined"
            label="Password"
            // value={text}
            name="password"
            onChangeText={text => setUserCreds(s => ({ ...s, userPassword: text }))}
            outlineColor='#0466c8'
            activeOutlineColor='#4361ee'
            secureTextEntry
            right={<TextInput.Icon name="eye" />}
            fontSize=''
          />

        </View>
        <View style={{ marginTop: 30 }}>
          <Button
            onPress={handleSignUp}
            title='Sign Up'
          />
        </View>

        <View >
          <Text style={{ textAlign: "center", fontSize: 15, marginTop: 50 }}
            onPress={() => navigation.navigate('login')}
          >

            Already have an account?</Text>
        </View>

      </View>
      {/* </ImageBackground> */}
    </View>
  )
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  img: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Roboto'

  },
  screenStyle: {
    width: 300,

  },
  inputStyle: {
    fontSize: "10",

  }
  , text: {
    textAlign: 'center'
  }


})