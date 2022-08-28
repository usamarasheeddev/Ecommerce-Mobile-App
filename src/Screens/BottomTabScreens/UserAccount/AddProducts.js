import { View, Text, Button, Image, ScrollView } from 'react-native'
import React, { useState, useCallback } from 'react'
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import AddProductForm from './AddProductForm';

let options = {
    mediaType: 'photo',
    selectionLimit: 1
}
export default function ImagePicker() {
    const[productCreds,setProcuctCreds]=React.useState('')
    const [imgUri, setImgUri] = useState(null);
    let imgName, url, img

    const imagePicker = () => {
        launchImageLibrary(options, (response) => {
            // console.log('response =', response);
            setImgUri(response.assets[0].uri);
            img = response.assets[0].uri
            // console.log(response.assets[0].uri);

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
            setProcuctCreds()
            alert('Image uploaded')
            console.log(url)

        } catch { (error) => alert(error) }
    }
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', marginBottom: 12, justifyContent: 'space-between' }}>

                    <View style={{ width: 150 }}><Button
                        title='Pick Image'
                        onPress={imagePicker}

                    /></View>
                    <View style={{ width: 150 }}>
                        <Button
                            title='upload'
                            onPress={handleUpload}
                        />
                    </View>
                </View>

                {/* <Image
                source={{ uri:url }}
                // source={{ uri: imgUri }}
                style={{ width: 300, height: 300, borderWidth: 1 }}
            /> */}

                <AddProductForm />
            </View>
        </ScrollView>
    )
}