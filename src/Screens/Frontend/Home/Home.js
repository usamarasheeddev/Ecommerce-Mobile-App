import { View, Text, ScrollView, TouchableWithoutFeedback, TouchableHighlight, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import { usePostContext } from '../../../contexts/PostContext'
import { styles } from './styles'
import { IconButton, MD3Colors } from 'react-native-paper';
import { useAuthContext } from '../../../contexts/AuthContext';
import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore';
import { useFavuriteItemsContext } from '../../../contexts/FavuriteItemsContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Home({ navigation }) {
  const { isAuthenticated, dispatch } = useAuthContext()
  // const [isliked, setIsLiked] = React.useState(false)
  const { post, setPost } = usePostContext()
  const [favuriteItem, setFavuriteItem] = React.useState([])
  // const { addFavuriteItem, favuriteItem, setFavuriteItem } = useFavuriteItemsContext()

  //SET FAVURITE ITEM
  const handleFavurite = (id) => {
    
    setPost(

      post.map((item) => item.id == id ? { ...item, isLiked: !item.isLiked } : item)
    )


    // addFavuriteItem(id)


  }






  return (
    <ScrollView >
      <View style={styles.flexContainer}>

        {
          //PRODUCT MAP FUNCTION
          post.map((item) => {
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
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                  <Image
                    source={{
                      uri: item.url
                    }}
                    style={{ width: 148, borderRadius: 20, height: 130, objectFit: "cover" }}

                  />
                  <View style={styles.textBox}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.title}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>PKR  {item.price}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 12, marginTop: 5 }}>{item.address}</Text>



                    <View style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between', width: 130, marginTop: 10
                    }}>
                      <Icon name='bed' size={18} /><Text>{item.rooms}</Text>
                      <Icon name='bathtub-outline' size={18} /><Text>{item.bath}</Text>
                      <Icon name='crop-square' size={18} /><Text>{item.area}</Text>
                    </View>
                  </View>
                  <View>


                  </View>
                </View>

              </View>

            </TouchableWithoutFeedback>
          })
        }
      </View>



    </ScrollView>
  )
}