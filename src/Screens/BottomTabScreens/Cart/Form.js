import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Input from '../../Components/Input'

export default function Form({ navigation }) {
    const orderCreds = {
        email: '', userName: '', contactNo: '', city: '', address: ''
    }

    const [userDetails, setUserDetails] = React.useState("");

    const validationSchema = Yup.object({
        userName: Yup.string().trim().min(3, 'Invalid Name').required('Name is required!'),
        email: Yup.string().email('Invalid Email').required('Email required!'),
        contactNo: Yup.string().trim().min(11, 'Invalid Contact ').required('Contact number required! '),
        city: Yup.string().trim().min(5, 'Too short name of city').required("City name required!"),
        address: Yup.string().trim().min(25, "Too short address").required('Address required!')
    })


    return (
        <Formik
            initialValues={orderCreds} validationSchema={validationSchema}
            onSubmit={(values, formikActions) => {
                setTimeout(() => {
                    setUserDetails({...values})
                    formikActions.resetForm()
                    navigation.navigate('CheckOutScreen',{userDetails})
                    // formikActions.setSubmitting(false)
                }, 1000);
            }}
        >
            {({ handleChange, touched, handleBlur, isSubmitting, handleSubmit, values, errors }) => {

                return <>

                    <Input
                        placeholdero=''
                        label='Username'
                        onChangeText={handleChange('userName')}
                        onBlur={handleBlur('userName')}
                        value={values.userName}
                        error={touched.userName && errors.userName}

                    />


                    <Input
                        placeholdero='Email'
                        label='Email*'
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType='email-address'
                        error={touched.email && errors.email}

                    />

                    <Input
                        placeholdero='Contact'
                        label='Contact*'
                        onChangeText={handleChange('contactNo')}
                        onBlur={handleBlur('contactNo')}
                        value={values.contactNo}
                        keyboardType='numeric'
                        error={touched.contactNo && errors.contactNo}

                    />

                    <Input
                        placeholdero='City*'
                        label='City*'
                        onChangeText={handleChange('city')}
                        onBlur={handleBlur('city')}
                        value={values.city}
                        error={touched.city && errors.city}

                    />
                    <Input
                        placeholdero='Address*'
                        label='Address*'
                        onChangeText={handleChange('address')}
                        onBlur={handleBlur('address')}
                        value={values.address}
                        error={touched.address && errors.address}
                        autoCaptlize='word'
                    />

                    <View style={{ alignItems: 'center', marginTop: 10 }}>



                        <TouchableOpacity style={{ backgroundColor: 'skyblue', width: 320, borderRadius: 5 }}
                            onPress={handleSubmit}
                        >
                            <Text style={{ textAlign: 'center', padding: 5 }}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>

                </>

            }
            }
        </Formik>
    )
}