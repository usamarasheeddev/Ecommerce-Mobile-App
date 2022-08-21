import { View, Text, Button, Image } from 'react-native'
import React, { useState, useCallback } from 'react'
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

let options = {
    mediaType: 'photo',
    selectionLimit: 1
}
export default function ImagePicker() {
    const [imgUri, setImgUri] = useState(null);
    let imgName,url

    const imagePicker = () => {
        launchImageLibrary(options, (response) => {
            // console.log('response =', response);
            setImgUri(response.assets[0].uri);
            console.log(response.assets[0].uri);

            if (response.didCancel) {
                alert('cancelled');
            } else if (response.error) {
                alert('Error : ', error);
            } else {
                const source = { uri: response.uri };

            }
        })
    }

    const handleUpload = async () => {
        imgName = imgUri.substring(imgUri.lastIndexOf('-') + 1)
        console.log(imgName)
        try {
            const reference = await storage().ref(`/images/${imgName}`).putFile(imgUri);
            console.log(reference)
             url = await storage().ref(`/images/${imgName}`).getDownloadURL();
            console.log(url)

        } catch { (error) => alert(error) }
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Image
                source={{ uri: url }}
                // source={{ uri: imgUri }}
                style={{ width: 300, height: 300 }}
            />
            <Button
                title='Image Picker'
                onPress={imagePicker}
            />
            <Button
                title='upload'
                onPress={handleUpload}
            />
        </View>
    )
}