import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useCartContext } from '../../../contexts/CartContext'
import Icon from 'react-native-vector-icons/Entypo'

export default function UserCart() {
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
                  style={{  borderRadius: 20, height: 110, width:100,resizeMode : 'contain', }}

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

      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  cartItem: {

    height: 130,
    flexDirection: 'row',
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc5b9'
  },
  headign: {
    fontSize: 16
  },
  img: {
    // height: 100,
    // width: 100,
    // backgroundColor: "red",
    borderRadius: 20
  },
  productTitle: {
    width: 230,
    height: 140,
    padding: 13,
    flexDirection: 'column',
    justifyContent: 'space-around',

  },
  quantity: {
    flexDirection: 'row'
  },

  btn: {
    borderRadius: 10,
    width: 30,
    borderColor: 'black',
    borderWidth: 1,
    height: 30

  },
  btnFont: {
    fontSize: 14,
    color: "black",
    textAlign: 'center',
    padding: 4
  },
  cross: {
    position: "absolute",
    left: 320,
    top: 10
  }
})