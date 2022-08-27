import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { useCartContext } from '../../../contexts/CartContext'
import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore';
import { v4 as uuid } from 'uuid';




export default function CheckOutScreen({ route, navigation }) {
    const [order, setOrder] = React.useState({})
    const { userName, email, contactNo, city, address } = route.params
    const { cartItems } = useCartContext()
    const shipping = 400
    const itemsTotal = cartItems.reduce((a, c) => a + (c.price * c.qnt), 0)
    //DATE AND TIME
    var today = new Date().toLocaleDateString();
    var time = new Date().toLocaleTimeString();


    const handleOrder = async () => {
        let orderData = { cartItems, itemsTotal, shipping, userName, email, contactNo, city, address, status: 'pending', today, time }
        // console.log(orderData)

        await firestore()
            .collection('orders').doc(uuid)
            .set({ orderData })
            .then(() => {
                // console.log('User added!');
                alert('order added')
                navigation.navigate("Cart")
            }).catch(err => {
                console.error(err)
                alert(err)
            })
    }


    // console.log(userDetails)
    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.header, { justifyContent: 'flex-end' }]}>
                {/* <Text style={{ fontSize: 18, }}>${itemsTotal}</Text> */}
                <TouchableOpacity onPress={handleOrder}>
                    <Text style={styles.button}>Order</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: 'center', marginBottom: 10, padding: 5 }}>CheckOut Order</Text>
            <View style={{ padding: 20 }}>
                <Text>{userName}</Text>
                <Text>{email}</Text>
                <Text>{contactNo}</Text>
                <Text>{city}</Text>
                <Text>{address}</Text>

            </View>
            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: 'center', marginBottom: 10, padding: 5 }}>Cart Items</Text>
            <View style={{ alignItems: 'center' }}>

                {
                    cartItems.map((item, i) => {
                        return <View key={i} style={{ padding: 10, borderBottomWidth: 1, width: 300, borderColor: '#ccc5b9' }}>

                            <Text>{item.title}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                <Text style={{ fontWeight: 'bold' }} >Quantity:  x{item.qnt}</Text>
                                <Text>Price: ${item.price * item.qnt}</Text>
                            </View>

                        </View>
                    })
                }


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text style={{ fontWeight: 'bold' }} >Shipping Charges: </Text>
                    <Text>${shipping}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text style={{ fontWeight: 'bold' }} >Grand Total: </Text>
                    <Text style={{ color: 'red', fontWeight: 'bold' }}
                    >${shipping + itemsTotal}</Text>
                </View>
            </View>


        </View>
    )
}