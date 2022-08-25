import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { styles } from './style'
import { useCartContext } from '../../../contexts/CartContext'

export default function CheckOutScreen({ route }) {
    const { orderCreds } = route.params
    const { cartItems } = useCartContext()

    const showAlert = () =>
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    
                },
            ],
            {
                cancelable: true,
            
            }
        );
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={{ fontSize: 18, }}>$567</Text>
                <TouchableOpacity onPress={ showAlert}>
                    <Text style={styles.button}>Order</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}