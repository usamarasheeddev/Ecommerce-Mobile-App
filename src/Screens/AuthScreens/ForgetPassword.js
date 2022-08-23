import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'

import { TextInput } from 'react-native-paper'
import { useAuthContext } from '../../contexts/AuthContext'
import auth from '@react-native-firebase/auth';

const initialState = { email: '' }
export default function ForgetPassword() {
    const { dispatch } = useAuthContext()
    const [state, setState] = React.useState(initialState)
    const { email } = state

    const handleChange = (name, value) => {
        setState(s => ({ ...s, [name]: value }))
    }

    const handleVerify = () => {
        if (!email) alert("Enter Valid Email")
        auth().sendPasswordResetEmail(auth, email, null)
            .then((user) => {
                // dispatch({ type: 'Login', payload: { user } })
                alert("reset email sent to " + email);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <View style={styles.flexContainer}>
            <Text style={{
                textAlign: 'center', fontWeight: '600', fontSize: 20,
                marginBottom: 20

            }} >Forget Password</Text>
            <TextInput
                style={styles.input}
                mode="outlined"
                label="Email"
                // value={text}
                name="email"
                onChangeText={value => handleChange("email", value)}
                outlineColor='#0466c8'
            // activeOutlineColor='#4361ee'
            />

            <View style={{ marginTop: 10, borderRadius: 10 }}>

                <TouchableOpacity style={{

                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 100,
                    padding: 5,
                    backgroundColor: '#0466c8',
                    borderRadius: 50,
                }} onPress={handleVerify}
                >

                    <Text style={{ color: "white" }} >Verify Emial</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 300
    }

})