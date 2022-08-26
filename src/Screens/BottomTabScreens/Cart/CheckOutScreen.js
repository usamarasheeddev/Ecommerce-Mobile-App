import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { styles } from './style'
import { useCartContext } from '../../../contexts/CartContext'

export default function CheckOutScreen({ route }) {
    // const { userDetails } = route.params
    const { cartItems } = useCartContext()

   
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={{ fontSize: 18, }}>$567</Text>
                <TouchableOpacity >
                    <Text style={styles.button}>Order</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: 'center', marginBottom: 10, padding: 5 }}>CheckOut Order</Text>
            {/* <View style={{ padding: 20 }}>
                <Text>{userDetails.userName}</Text>
                <Text>{userDetails.email}</Text>
                <Text>{userDetails.contactNo}</Text>
                <Text>{userDetails.city}</Text>
                <Text>{userDetails.address}</Text>

            </View> */}
            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: 'center', marginBottom: 10, padding: 5 }}>Cart Items</Text>

            {
                cartItems.map((item) => {
                    <View style={{ padding: 20, borderBottomWidth: 1, width: 300, }}>

                        <Text>{item.title}</Text>
                        <Text style={{ fontWeight: 'bold' }} >Qnt:X{item.qnt}</Text>
                        <Text>Price ${item.price}</Text>


                    </View>
                })
            }


        </View>
    )
}