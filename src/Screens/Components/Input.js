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
        borderWidth: 0,
        borderColor: 'grey',
        height: 37,
        borderRadius:5,
        padding:4,
        border:'none',
        borderBottomWidth:1,
    }
})