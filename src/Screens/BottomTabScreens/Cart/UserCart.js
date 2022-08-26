import { View, Text, ScrollView, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useCartContext } from '../../../contexts/CartContext'
import { styles } from './style'
import Icon from 'react-native-vector-icons/Entypo'
// import UserCredsScreen from './UserCredsScreen'

export default function UserCart({ navigation }) {
  const { cartItems, setCartItems } = useCartContext()


  return (
    <ScrollView>

      <View style={{ flex: 1 }}>



        {
          cartItems.map((item) => {
            return <View style={styles.cartItem}>
              <View style={styles.img}>
                <Image
                  source={{
                    uri: item.url
                  }}
                  style={{ borderRadius: 20, height: 110, width: 100, resizeMode: 'contain', }}

                />


              </View>
              {/* Product title and Qnt */}

              <View style={styles.productTitle}>
                <View>

                  <Text style={styles.headign}>title fo product</Text>
                </View>
                {/* Qnt controler */}
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                  <View style={styles.quantity}>
                    <TouchableOpacity onPress={() => alert('hi')} style={styles.btn}>
                      <Text style={styles.btnFont}>-</Text>
                    </TouchableOpacity>
                    <View><Text style={{ fontSize: 16, color: 'black', width: 30, textAlign: "center", padding: 4 }} >2 </Text></View>
                    <TouchableOpacity style={styles.btn}>
                      <Text style={styles.btnFont}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <View><Text style={{ fontSize: 16, marginTop: 5 }}>$333</Text></View>
                </View>


              </View>
              <Icon name='cross' style={styles.cross} size={26} color={"red"} />

            </View>
          })
        }
        {/* Cart Header */}
        <View style={styles.header}>
          <Text style={{ fontSize: 18, }}>$567</Text>
          <TouchableOpacity onPress={() => navigation.navigate('UserCredsScreen')}>
            <Text style={styles.button}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
