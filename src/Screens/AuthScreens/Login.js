// import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native'
import * as React from 'react';
import { TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { useAuthContext } from '../../contexts/AuthContext';


const initialState = { email: '', password: '' }
export default function Login({ navigation }) {
  const [showPassword, setShowPassword] = React.useState(false)
  const [state, setState] = React.useState(initialState)
  const { dispatch } = useAuthContext()

  const handleChange = (name, value) => {
    setState(s => ({ ...s, [name]: value }))

  }


  const handleLogin = () => {
    let { email, password } = state

    if (!email) return alert("Email is invalid")
    if (!password) return alert("Password is invalid")
    console.log(state)
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user

        dispatch({ type: "LOGIN", payload: { user } })
        console.log('User account created & signed in!');

      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      })

  }

  return (

    <View style={styles.flexContainer}>
      {/* <ImageBackground source={bg} style={styles.img} > */}

      <View>

        <View><Text style={styles.heading}>Login</Text></View>
        <View style={styles.screenStyle}>

          <TextInput
            style={{ marginTop: 10 }}
            mode="outlined"
            label="Email"
            keyboardType='email-address'
            autoCapitalize='none'
            // value={text}
            name="email"
            onChangeText={value => handleChange("email", value)}
            outlineColor='#0466c8'
            activeOutlineColor='#4361ee'
          />
          <TextInput
            style={{ marginTop: 10 }}
            mode="outlined"
            label="Password"
            // value={text}
            autoCapitalize='none'
            onChangeText={value => handleChange("password", value)}
            outlineColor='#0466c8'
            activeOutlineColor='#4361ee'
            secureTextEntry={showPassword}
            right={<TextInput.Icon name={showPassword ? 'eye' : 'eye-off'}
              onPress={() => setShowPassword(!showPassword)} />}
            fontSize=''
          />


          <Text style={{ textAlign: "right", marginTop: 15 }}
            onPress={() => navigation.navigate('forgetPassword')}
          >Forget password?</Text>


        </View>
        <View style={{ marginTop: 30 }}>
          <Button
            onPress={handleLogin}
            title='Login'
          />
        </View>

        <View >
          <Text style={{ textAlign: "center", fontSize: 15, marginTop: 50 }}
            onPress={() => navigation.navigate('SignUp', {
              screen: 'SignUp',
              initial: false,
            })}
          >

            Don't have an account?</Text>
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