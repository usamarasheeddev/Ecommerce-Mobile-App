import { View, Text, ScrollView, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native'
import React from 'react'
import shopProducts from '../../data'
import { useProductsContext } from '../../../contexts/ProductsContext'
import { styles } from './styles'

export default function Home({ navigation }) {
  const { products, setProducts } = useProductsContext()
  return (
    <ScrollView >
      <View style={styles.flexContainer}>
        <View style={{ width: "100%" }}>
          {/* <Text style={styles.headigStyle}>Vegetables</Text> */}
        </View>
        {
          products.map((item) => {
            return <TouchableWithoutFeedback key={item.id} onPress={() => navigation.navigate('ProductDetails', { item })}>

              <View style={[styles.box, styles.shadowProp]}>
                <Image
                  source={{
                    uri: item.url
                  }}
                  style={{ width: 148, borderRadius: 20, height: 180, objectFit: "cover" }}

                />
                <View style={styles.textBox}>
                  <Text>{item.title}</Text>
                  <Text>$200</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          })
        }
      </View>

      {/* ANOTHER SECTION */}

      <View style={styles.flexContainer}>
        <View style={{ width: "100%" }}>
          <Text style={styles.headigStyle}>Nuts</Text>
        </View>
        {
          products.map((item) => {
            return <TouchableWithoutFeedback key={item.id} onPress={() => alert(item.id)}>

              <View style={[styles.box, styles.shadowProp]}>
                <Image
                  source={{
                    uri: item.url
                  }}
                  style={{ width: 148, borderRadius: 20, height: 180, objectFit: "cover" }}

                />
                <View style={styles.textBox}>
                  <Text>{item.title}</Text>
                  <Text>$200</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          })
        }
      </View>

      {/* ANOTHER SECTION */}
      <View style={styles.flexContainer}>
        <View style={{ width: "100%" }}>
          <Text style={styles.headigStyle}>Pulses</Text>
        </View>
        {
          products.map((item) => {
            return <TouchableWithoutFeedback key={item.id} onPress={() => alert(item.id)}>

              <View style={[styles.box, styles.shadowProp]}>
                <Image
                  source={{
                    uri: item.url
                  }}
                  style={{ width: 148, borderRadius: 20, height: 180,resizeMode : 'contain' }}

                />
                <View style={styles.textBox}>
                  <Text>{item.title}</Text>
                  <Text>$200</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          })
        }
      </View>

    </ScrollView>
  )
}