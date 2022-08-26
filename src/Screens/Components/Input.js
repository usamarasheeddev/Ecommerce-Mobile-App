import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Input(props) {
    const { placeholder, label, error } = props
    return (
        <>
            <View style={{margin:12}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginBottom:2 ,paddingHorizontal:5}}>
                    <Text style={{ fontWeight: 'bold' }}>{label}</Text>
                    {error ? <Text style={{ color: 'red', fontSize: 12 }}>{error}</Text> : null}
                </View>
                <TextInput {...props} placeholder={placeholder} style={styles.input} />

            </View>


        </>
    )
}
const styles = StyleSheet.create({

    input: {
        borderWidth: 1,
        borderColor: 'grey',
        height: 35,
        borderRadius:5
    }
})