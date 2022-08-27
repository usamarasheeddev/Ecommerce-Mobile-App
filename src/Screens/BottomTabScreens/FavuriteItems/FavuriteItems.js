import { View, Text, ScrollView, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import { useProductsContext } from '../../../../contexts/ProductsContext'
import { styles } from '../../../Frontend/Home/styles'
import { IconButton, MD3Colors } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'



export default function FavuriteItems({ navigation }) {
  const { products, setProducts } = useProductsContext()

  const handleFavurite = (id) => {
    setProducts(

      products.map((item) => item.id == id ? { ...item, isLiked: !item.isLiked } : item)
    )
    console.log("working...")
    addFavuriteItem(id)

  }

  // Add Favurite Item
  const addFavuriteItem = async (id) => {
    console.log("ggggg")
    await firestore()

      .collection('favuriteItems').doc(auth().currentUser.uid)
      .add({
        FavuriteItemId: id

      })
      .then(() => {
        console.log('User added!');
      }).catch(err => {
                console.error(err)
            })
  }


  return (
    <ScrollView>
      <View style={styles.flexContainer}>
        {products.filter(item => item.isLiked == true).map((item) => {
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