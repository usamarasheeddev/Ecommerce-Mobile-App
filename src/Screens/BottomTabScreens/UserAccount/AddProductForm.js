import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Input from '../../Components/Input'

export default function AddProductForm({ navigation }) {
    const product = {
         label: '', price: '', discription: '', address: ''
    }

    const validationSchema = Yup.object({
        label: Yup.string().trim().min(10, 'Invalid Product label').required('label is required!'),
        price: Yup.string().trim().min(11, 'Invalid Contact ').required('Contact number required! '),
        discription: Yup.string().trim().min(30, 'Too short discription').required("discription required!"),
    })


    return (
        <Formik
            initialValues={product} validationSchema={validationSchema}
            onSubmit={(values, formikActions) => {
                formikActions.resetForm()
                // navigation.navigate('CheckOutScreen',{...values})
                // formikActions.setSubmitting(false)
            }}
        >
            {({ handleChange, touched, handleBlur, isSubmitting, handleSubmit, values, errors }) => {

                return <>

                    <Input
                        placeholdero=''
                        label='label'
                        onChangeText={handleChange('label')}
                        onBlur={handleBlur('label')}
                        value={values.label}
                        error={touched.label && errors.label}

                    />



                    <Input
                        
                        label='Price*'
                        onChangeText={handleChange('price')}
                        onBlur={handleBlur('price')}
                        value={values.price}
                        keyboardType='numeric'
                        error={touched.price && errors.price}

                    />

                    <Input
                        placeholdero='discription*'
                        label='discription*'
                        onChangeText={handleChange('discription')}
                        onBlur={handleBlur('discription')}
                        // value={values.discription}
                        error={touched.discription && errors.discription}

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