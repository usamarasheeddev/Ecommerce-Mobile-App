import { View, Text, ScrollView, TouchableWithoutFeedback, TouchableHighlight, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useProductsContext } from '../../../contexts/ProductsContext'
import { styles } from './styles'
import { IconButton, MD3Colors } from 'react-native-paper';

export default function Home({ navigation }) {
  // const [isliked, setIsLiked] = React.useState(false)
  const { products, setProducts } = useProductsContext()

  //SET FAVURITE ITEM
  const handleFavurite = (id) => {
    setProducts(

      products.map((item) => item.id == id ? { ...item, isLiked: !item.isLiked } : item)
    )

  }


  return (
    <ScrollView >
      <View style={styles.flexContainer}>
        <View style={{ width: "100%" }}>
          {/* <Text style={styles.headigStyle}>Vegetables</Text> */}
        </View>
        {
          //PRODUCT MAP FUNCTION
          products.map((item) => {
            return <TouchableWithoutFeedback key={item.id} onPress={() => navigation.navigate('ProductDetails', { item })}>
              <View style={[styles.box, styles.shadowProp]}>

                <IconButton
                  icon={!item.isLiked ? "heart-outline" : "heart"}
                  iconColor={MD3Colors.error50}
                  size={20}
                  onPress={() => handleFavurite(item.id)}
                  style={{ position: 'absolute', zIndex: 1, top: -5, left: 105 }}
                />
                {/* //PRODUCT iMAGE */}
                <Image
                  source={{
                    uri: item.url
                  }}
                  style={{ width: 148, borderRadius: 20, height: 180, objectFit: "cover" }}

                />
                <View style={styles.textBox}>
                  <Text>{item.title}</Text>
                  <Text>${item.price}</Text>
                </View>


              </View>

            </TouchableWithoutFeedback>
          })
        }
      </View>



    </ScrollView>
  )
}