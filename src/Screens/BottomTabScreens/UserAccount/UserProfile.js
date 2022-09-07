import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import profile from '../../../ascets/profile/profile.jpg'
import { IconButton, MD3Colors } from 'react-native-paper'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



let options = {
    mediaType: 'photo',
    selectionLimit: 1,
    croping: true,
    height: 150,
    width: 150
}
export default function UserProfile() {


    const [user, setUser] = React.useState({})
    const [profileUri, setProfileUri] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(true)
    // const [updateUser, setUpdateUser] = React.useState()

    React.useEffect(() => {
        getUser()
    }, [])

    //Get userFrom firebase
    const getUser = async () => {
        setIsLoading(true)
        await firestore().collection("users").doc(auth().currentUser.uid).get().then(
            (data) => { setUser(data._data) }

        ).then(setIsLoading(false)).catch(error => console.error(error))
    }

    //profile img picker
    const profilePicker = () => {

        launchImageLibrary(options, (response) => {

            if (response.didCancel) {
                alert("Profile Upload Cancelled")

            } else if (response.error) {

                console.log('Error : ', error);
            } else {
                // const source = { uri: response.uri };
                setProfileUri(response.assets[0].uri);
                handleUpload(response.assets[0].uri)
                setUser({ ...user, profileUrl: response.assets[0].uri })


            }
        })
    }



    const handleUpload = async (image) => {
        try {

            const reference = await storage().ref(`images/profile/${auth().currentUser.uid}`).putFile(image);
            console.log(reference)
            url = await storage().ref(`images/profile/${auth().currentUser.uid}`).getDownloadURL();
            // console.log(url)
            updateProfile(url)
        } catch {
            (error) => alert(error)

        }
    }

    //Get & Upload profile form firebase

    const updateProfile = (url) => {
        firestore()
            .collection('users')
            .doc(auth().currentUser.uid)
            .update({
                ...user, profileUrl: url
            })
            .then(() => {
                console.log('User updated!');
            });
    }

    return (
        <>
            {isLoading ? <ActivityIndicator size='large' style={{ marginTop: 190 }} />

                : <View>

                    <IconButton
                        icon="camera"
                        onPress={() => profilePicker()}
                        iconColor="#ffff"
                        style={styles.camera}
                        size={22}
                    />
                    <View style={styles.container}>
                        <Image
                            // source={profileUri == '' ? profile : { uri: user.profileUrl }}
                            source={!user.profileUrl == '' ? { uri: user.profileUrl } : profile}
                            style={styles.image}

                        />



                        <Text style={{ fontWeight: "bold", marginTop: 10, color: 'black' }}> {user.userName}</Text>


                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Icon name='phone-check' size={18} color='#40916c' />
                            <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                                {user.contactNo}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <Icon name='email' size={18} color='#40916c' />
                            <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                                {user.email}</Text>
                        </View>
                    </View>
                </View>
            }</>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        marginTop: 30
    },
    image: {
        width: 150, height: 150,
        borderRadius: 80, resizeMode: 'contain',
    },
    camera: {
        position: 'absolute',
        zIndex: 1,
        top: 130,
        right: 30,
        backgroundColor: '#40916c'


    }

})