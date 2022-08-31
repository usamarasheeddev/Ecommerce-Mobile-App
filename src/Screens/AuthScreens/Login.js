// import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import * as React from 'react';
import auth from '@react-native-firebase/auth';
import { useAuthContext } from '../../contexts/AuthContext';
import { Formik } from 'formik'
import * as Yup from 'yup'
import Input from '../Components/Input';
import { styles } from './styles';

const initialState = { email: '', password: '' }
export default function Login({ navigation }) {

  const { dispatch } = useAuthContext()

  const userCreds = {
    email: '', password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Email required!'),
    password: Yup.string().trim().min(8, "Invalid Password").required('Password required')

  })



  const handleLogin = (values) => {
    const { email, password } = values

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
      <Formik
        initialValues={userCreds} validationSchema={validationSchema}
        onSubmit={(values, formikActions) => {
          handleLogin(values)
        }}
      >

        {({ handleChange, touched, handleBlur, isSubmitting, handleSubmit, values, errors }) => {


          return <>
          <Text style={{fontSize:26,fontWeight:'bold',textAlign:'center',marginBottom:10}} >Login</Text>
            <Input
              placeholdero='Email'
              label='Email'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType='email-address'
              error={touched.email && errors.email}

            />
            <Input
              placeholdero='Email'
              label='Password'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry
              
              value={values.password}
              error={touched.password && errors.password}

            />
            <TouchableOpacity style={{
              width: 320, marginTop: 30,
              alignSelf: 'center'
            }}
              onPress={handleSubmit}
            >
              <Text style={{ textAlign: 'center', padding: 10, backgroundColor: '#40916c', color: 'white' }}>
                Login
              </Text>
            </TouchableOpacity>

            <View >
          <Text style={{ textAlign: "center", fontSize: 15, marginTop: 50 }}
            onPress={() => navigation.navigate('SignUp', {
              screen: 'SignUp',
              initial: false,
            })}
          >

            Don't have an account?</Text>
        </View>

          </>
        }

        }


      </Formik>

    </View>
  )
}
