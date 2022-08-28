import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Input from '../../Components/Input'
import { usePostContext } from '../../../contexts/PostContext'
import { v4 as uuid } from 'uuid';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';

export default function Form({ navigation, postImage }) {
    const { post, setPost, imgUrl, setImgUrl } = usePostContext()
    const postCreds = {
        email: '', title: '', contactNo: '', city: '', address: '',
        area: '', rooms: '', bath: '', kitchen: '', discription: ''
    }

    // React.useEffect(() => {
    //     alert(postImage)
    // }, [postImage])


    const uploadToFirebase = async (data) => {
        console.log(data)
        // await firestore()
        //     .collection('posts')
        //     .doc(uuid)
        //     .set(data)
        //     .then(() => {
        //         console.log('post');
        //         alert("post added")

        //     })
        //     .catch(err => {
        //         console.error(err)
        //     })
    }




    const validationSchema = Yup.object({
        title: Yup.string().trim().min(3, 'Invalid Name').required('Name is required!'),
        email: Yup.string().email('Invalid Email').required('Email required!'),
        contactNo: Yup.number().required('Contact number required! '),
        city: Yup.string().trim().min(5, 'Too short name of city').required("City name required!"),
        discription: Yup.string().trim().min(2, "Too short discription").required('Discription required!'),
        address: Yup.string().trim().min(2, "Too short address").required('Address required!'),
        area: Yup.number().required('Area required!'),
        rooms: Yup.number().required('Rooms required!'),
        bath: Yup.number().required('Bath required!'),
        kitchen: Yup.number().required('Kitchen required!'),
    })




    return (
        <Formik
            initialValues={postCreds} validationSchema={validationSchema}
            onSubmit={(values, formikActions) => {

                // setImgUrl(s=>({...s,values}))
                setPost(s => ([{ ...s, imgUrl, values }]))
                uploadToFirebase(imgUrl)
                console.log({ postImage, values })
                formikActions.resetForm()

                // formikActions.setSubmitting(false)
            }}
        >
            {({ handleChange, touched, handleBlur, isSubmitting, handleSubmit, values, errors }) => {

                return <>

                    <Button
                        title='onSubmit'
                        onPress={() => alert(postImage)}
                    />
                    <Input
                        placeholdero=''
                        label='Title'
                        onChangeText={handleChange('title')}
                        onBlur={handleBlur('title')}
                        value={values.title}
                        error={touched.title && errors.title}


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

                        label='Discription*'
                        onChangeText={handleChange('discription')}
                        onBlur={handleBlur('discription')}
                        value={values.discription}
                        multiline={true}
                        numberOfLines={4}
                        error={touched.discription && errors.discription}
                        autoCaptlize='word'
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

                    <Input
                        placeholdero=''
                        label='Area*'
                        onChangeText={handleChange('area')}
                        onBlur={handleBlur('area')}
                        value={values.area}
                        keyboardType='numeric'
                        error={touched.area && errors.area}

                    />
                    <Input
                        placeholdero=''
                        label='Rooms*'
                        onChangeText={handleChange('rooms')}
                        onBlur={handleBlur('room')}
                        value={values.rooms}
                        keyboardType='numeric'
                        error={touched.rooms && errors.rooms}

                    />
                    <Input
                        placeholdero=''
                        label='Kitchen*'
                        onChangeText={handleChange('kitchen')}
                        onBlur={handleBlur('kitchen')}
                        value={values.kitchen}
                        keyboardType='numeric'
                        error={touched.kitchen && errors.kitchen}

                    />
                    <Input
                        placeholdero=''
                        label='Bath*'
                        onChangeText={handleChange('bath')}
                        onBlur={handleBlur('bath')}
                        value={values.bath}
                        keyboardType='numeric'
                        error={touched.bath && errors.bath}

                    />



                    <View style={{ alignItems: 'center', marginTop: 10 }}>



                        <TouchableOpacity style={{ backgroundColor: 'skyblue', width: 320, borderRadius: 5 }}
                            onPress={handleSubmit}
                        >
                            <Text style={{ textAlign: 'center', padding: 5, backgroundColor: '#38b000', color: 'white' }}>
                                Post
                            </Text>
                        </TouchableOpacity>
                    </View>

                </>

            }
            }
        </Formik>
    )
}