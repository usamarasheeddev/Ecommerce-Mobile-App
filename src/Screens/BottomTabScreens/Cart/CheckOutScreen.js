import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { useCartContext } from '../../../contexts/CartContext'

export default function CheckOutScreen({ route }) {
    // const { userDetails } = route.params
    const { cartItems } = useCartContext()

    console.log(cartItems.length)
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={{ fontSize: 18, }}>$567</Text>
                <TouchableOpacity >
                    <Text style={styles.button}>Order</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: 'center', marginBottom: 10, padding: 5 }}>CheckOut Order</Text>
            <View style={{ padding: 20 }}>
                <Text>{userDetails.userName}</Text>
                <Text>{userDetails.email}</Text>
                <Text>{userDetails.contactNo}</Text>
                <Text>{userDetails.city}</Text>
                <Text>{userDetails.address}</Text>

            </View>
            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: 'center', marginBottom: 10, padding: 5 }}>Cart Items</Text>
            <View style={{ alignItems: 'center' }}>

                {
                    cartItems.map((item, i) => {
                        return <View key={i} style={{ padding: 10, borderBottomWidth: 1, width: 300,borderColor:'#ccc5b9' }}>

                            <Text>{item.title}</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}} > 
                            <Text style={{ fontWeight: 'bold' }} >Qnt:  X{item.qnt}</Text>
                            <Text>Price: ${item.price * item.qnt}</Text>
                            </View>

                        </View>
                    })
                }
            </View>


        </View>
    )
}