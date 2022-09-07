// import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { useAuthContext } from '../../contexts/AuthContext';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import { Formik } from 'formik'
import * as Yup from 'yup'
import Input from '../Components/Input';
import { styles } from './styles';


export default function SignUp({ navigation }) {

  const { dispatch } = useAuthContext()
  const [isLoading, setIsLoading] = React.useState(false)

  const userCreds = {
    email: '', password: '', username: '', contactNo: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Email required!'),
    password: Yup.string().trim().min(8, "Invalid Password").required('Password required'),
    username: Yup.string().trim().min(4, 'Invalid Username').required('Username required!'),
    contactNo: Yup.number().required("Phone number required!")

  })

  const handleSignUp = (values) => {
    setIsLoading(true)
    const { email, password, username,contactNo } = values
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        // dispatch({ type: "LOGIN", payload: { user } })
        createUserProfile(user, username, contactNo)
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setIsLoading(false)
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          setIsLoading(false)
        }

        console.error(error);
      })
    setIsLoading(true)
  }


  const createUserProfile = async (user, username, contactNo) => {
    let formData = {
      userName: username,
      email: user.email,
      contactNo: contactNo,
      profileUrl:'',
      uid: user.uid,
      dateCreated: firebase.firestore.FieldValue.serverTimestamp()
    }
    await firestore()
      .collection('users')
      .doc(user.uid)
      .set(formData)
      .then(() => {
        // console.log('User added!');
        dispatch({ type: "LOGIN", payload: { user } })
      })
      .catch(err => {
        console.error(err)
      })
  }




  return (

    <View style={styles.flexContainer}>

      <Formik
        initialValues={userCreds} validationSchema={validationSchema}
        onSubmit={(values, formikActions) => {
          handleSignUp(values)
          // formikActions.resetForm()
        }}
      >

        {({ handleChange, touched, handleBlur, isSubmitting, handleSubmit, values, errors }) => {



          return <>{
            isLoading ?
              <ActivityIndicator size="large" color="#40916c" style={{ marginTop: 350 }} />

              : <>
                <Text style={{
                  fontSize: 26, fontWeight: 'bold',
                  textAlign: 'center', marginBottom: 10
                }} >SignUp</Text>
                <Input

                  label='Username'
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  autoCapitalize="word"
                  // keyboardType='email-address'
                  error={touched.username && errors.username}

                />
                <Input
                  placeholdero='Email'
                  label='Email'
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType='email-address'
                  autoCapitalize='none'
                  error={touched.email && errors.email}

                />
                <Input
                  placeholdero='contactNo'
                  label='Contact Number'
                  onChangeText={handleChange('contactNo')}
                  onBlur={handleBlur('contactNo')}
                  value={values.contactNo}
                  keyboardType='numeric'
                  error={touched.contactNo && errors.contactNo}

                />
                <Input
                  placeholdero='Email'
                  label='Password'
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                  autoCapitalize='none'
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
                    SignUp
                  </Text>
                </TouchableOpacity>

                <View >
                  <Text style={{ textAlign: "center", fontSize: 15, marginTop: 50, color: '#40916c' }}
                    onPress={() => navigation.navigate('Login', {
                      screen: 'Login',
                      initial: false,
                    })}
                  >

                    Already have an account?</Text>
                </View>

              </>
          }</>
        }

        }


      </Formik>

    </View>
  )
}

