import { View, Text, ScrollView, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useCartContext } from '../../../contexts/CartContext'
import { styles } from './style'
import Icon from 'react-native-vector-icons/Entypo'
// import UserCredsScreen from './UserCredsScreen'

export default function UserCart({ navigation }) {
  const { cartItems, decrimentQnt, incrimentQnt, removeItem } = useCartContext()
  const itemsTotal = cartItems.reduce((a, c) => a + (c.price * c.qnt), 0)

  return (
    <ScrollView>
      {/* Cart Header */}
      <View>

        {cartItems.length === 0 ?
          <View>

          </View>

          : <View style={styles.header}>
            <Text style={{ fontSize: 18, }}>Total:  ${itemsTotal}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('UserCredsScreen')}>
              <Text style={styles.button}>Place Order</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
      <View style={{ flex: 1 }}>



        {cartItems.length === 0 ?
          <View>
            <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 300 }}
            >No Item added to  cart</Text>
            
          </View>
          : cartItems.map((item, i) => {
            return <View key={i} style={styles.cartItem}>
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
                    <TouchableOpacity
                      onPress={() => decrimentQnt(item)}
                      style={styles.btn}>
                      <Text style={styles.btnFont}>-</Text>
                    </TouchableOpacity>

                    <View><Text style={{ fontSize: 16, color: 'black', width: 30, textAlign: "center", padding: 4 }} >{item.qnt}</Text></View>

                    <TouchableOpacity
                      onPress={() => incrimentQnt(item)}
                      style={styles.btn}>
                      <Text style={styles.btnFont}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <View><Text style={{ fontSize: 16, marginTop: 5 }}>${item.price * item.qnt}</Text></View>
                </View>

                {/* cross */}
              </View>
              <TouchableOpacity onPress={() => removeItem(item)}>
                <View style={styles.cross}>
                  <Icon name='cross' size={26} color={"red"} />
                </View>
              </TouchableOpacity>
            </View>
          })
        }

      </View>
    </ScrollView>
  )
}
