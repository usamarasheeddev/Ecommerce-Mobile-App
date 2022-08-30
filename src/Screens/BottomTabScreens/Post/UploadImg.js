import { View, Text, Button, Image, ScrollView, Alert, ActivityIndicator } from 'react-native'
import React, { useState, useCallback } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { useAuthContext } from '../../../contexts/AuthContext';
import { usePostContext } from '../../../contexts/PostContext';
import AuthScreenNavigator from '../../AuthScreens/AuthScreenNavigator';

import Form from './Form'
let options = {
    mediaType: 'photo',
    selectionLimit: 1,
    croping: true,
    height: 400,
    width: 500
}
export default function UploadImg({ navigation }) {
    // const [imgUrl,setImgUrl]=React.useState('')
    const { post, setPost, imgUrl, setImgUrl } = usePostContext()
    const [isloading, setIsLoading] = React.useState(false)
    const [isDisable, setIsDisable] = React.useState(false)
    const [newPost, setNewPost] = React.useState(null)
    const [imgUri, setImgUri] = useState(null);

    const imagePicker = () => {

        launchCamera, launchImageLibrary(options, (response) => {
            // console.log('response =', response);


            if (response.didCancel) {
                Alert.alert("Image Upload", "Cancelled")
                setIsDisable(false)
            } else if (response.error) {
                setIsDisable(false)
                alert('Error : ', error);
            } else {
                // const source = { uri: response.uri };
                setImgUri(response.assets[0].uri);
                setIsDisable(true)

            }
        })

    }

    const handleUpload = async () => {
        setIsLoading(true)
        imgName = imgUri.substring(imgUri.lastIndexOf('-') + 1)
        try {

            const reference = await storage().ref(`/images/${imgName}`).putFile(imgUri);
            console.log(reference)
            url = await storage().ref(`/images/${imgName}`).getDownloadURL();
            // console.log(url)
            setNewPost({ url, imgName, propertyStatus: 'avialable' })
            setIsLoading(false)
            setIsDisable(false)
            // console.log(newPost)
        } catch { (error) => alert(error) }
    }
    return (
        <ScrollView>
            {
                isloading ?

                    <ActivityIndicator style={{ flex: 1, marginTop: 350 }}
                        size="large" color="#0000ff" /> :



                    <View style={{ flex: 1, marginTop: 50, marginBottom: 100 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                            <View style={{ width: 150, backgroundColor: '#38b000' }}><Button
                                title='Pick Image'
                                onPress={imagePicker}

                            /></View>
                            <View style={{ width: 150, backgroundColor: '#38b000' }}>
                                <Button
                                    title='upload'
                                    onPress={handleUpload}
                                    disabled={!isDisable}
                                />
                            </View>
                        </View>


                        <Form setNewPost={setNewPost} newPost={newPost} />

                    </View>

            }
        </ScrollView>
    )
}