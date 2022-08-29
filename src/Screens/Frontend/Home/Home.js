import { View, Text, ScrollView, TouchableWithoutFeedback, ActivityIndicator, Image } from 'react-native'
import React from 'react'
import { usePostContext } from '../../../contexts/PostContext'
import { styles } from './styles'
import { IconButton, MD3Colors } from 'react-native-paper';
import { useAuthContext } from '../../../contexts/AuthContext';
import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore';
import { useFavuriteItemsContext } from '../../../contexts/FavuriteItemsContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function Home({ navigation }) {
  const { isAuthenticated, dispatch } = useAuthContext()
  const [isliked, setIsLiked] = React.useState(false)
  const { post, setPost, isLoadingPost } = usePostContext()
  const [favuriteItem, setFavuriteItem] = React.useState([])
  // const { addFavuriteItem, favuriteItem, setFavuriteItem } = useFavuriteItemsContext()
{
  console.log(post)
}

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
        {!isLoadingPost?
        <ActivityIndicator style={{marginTop:350}} size='large'/>
          :<>
            <View style={{ width: 330 }}>

              <View style={{ paddingVertical: 10, marginVertical: 10 }}>
                <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}> This Might Help You</Text>
              </View>
              <View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Ionicons name='card' color='#40916c' style={{ backgroundColor: '#cfe1b9', padding: 10, borderRadius: 10, marginBottom: 5 }} size={45} />
                    <Text style={{ textAlign: 'center' }}>Find Agent</Text>
                  </View>
                  <View>
                    <Ionicons name='map' size={45} color='#40916c'
                      style={{ backgroundColor: '#cfe1b9', padding: 10, borderRadius: 10, marginBottom: 5 }}
                    />
                    <Text style={{ textAlign: 'center', }}>Maps</Text>
                  </View>
                  <View>
                    <Ionicons name='home' size={45} color='#40916c' style={{ backgroundColor: '#cfe1b9', padding: 10, borderRadius: 10, marginBottom: 5 }} />
                    <Text style={{ textAlign: 'center' }}>Houses</Text>
                  </View>
                  <View>
                    <Ionicons name='newspaper' size={45} color='#40916c' style={{ backgroundColor: '#cfe1b9', padding: 10, borderRadius: 10, marginBottom: 5 }} />
                    <Text style={{ textAlign: 'center' }}>News</Text>
                  </View>
                </View>
              </View>
            </View>


            {
              //PRODUCT MAP FUNCTION
              post.map((item, i) => {
                return <TouchableWithoutFeedback key={i} onPress={() => navigation.navigate('ProductDetails', { item })}>
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
                          uri: item.newPost.url
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
          </>

        }
      </View>

    </ScrollView>
  )
}