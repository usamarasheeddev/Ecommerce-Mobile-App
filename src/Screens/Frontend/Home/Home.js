import {
  View, Text, ScrollView, TouchableWithoutFeedback,
  ActivityIndicator, Image, StatusBar
} from 'react-native'
import React from 'react'
import { usePostContext } from '../../../contexts/PostContext'
import { styles } from './styles'
import { IconButton, MD3Colors } from 'react-native-paper';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useFavuriteItemsContext } from '../../../contexts/FavuriteItemsContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'


export default function Home({ navigation }) {
  const { isAuthenticated } = useAuthContext()
  const { post, setPost, isLoadingPost } = usePostContext()
  const { likePost, unLikePost } = useFavuriteItemsContext()

  React.useEffect(() => {
    getFromDb()
  }, [isLoadingPost, isAuthenticated])


  //SET FAVURITE ITEM
  const handleFavurite = (postItem) => {
    const { id, isLiked } = postItem

    isLiked ? unLikePost(id) : likePost(id)
    setPost(
      post.map((item) => item.id == id ? { ...item, isLiked: !item.isLiked } : item)
    )
  }


  //Getting liked post from db
  let likeArr = []
  const getFromDb = async () => {
    await firestore().collection('favuriteItems')
      .doc(auth().currentUser.uid)
      .collection('likedPosts').get().then((docs) => {
        docs.forEach((doc) => { likeArr.push({ ...doc.data(), id: doc.id }) })
      })

    //setting liked items to post context
    likeArr.forEach(doc => {
      setPost(
        post.map((item) => item.id == doc.id ? { ...item, isLiked: doc.isLiked } : item)
      )
    })
  }




  return (

    <>
      <View>
        <Text style={{
          textAlign: 'center', paddingVertical: 15, fontWeight: 'bold', fontSize: 16
        }}>Welcom To Nature House</Text>
      </View>
      <ScrollView >
        <View style={styles.flexContainer}>
          <StatusBar barStyle="light-content" backgroundColor="#40916c" />
          {!isLoadingPost ?
            <ActivityIndicator style={{ marginTop: 350 }} size='large' />
            : <>
              <Text variant='headlineSmall' style={{ fontWeight: 'bold', textAlign: 'left' }}> Suggestions</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.scrollView}>

                  <View style={{ marginVertical: 10 }}>
                  </View>
                  <View >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: '#adb5bd' }}>
                      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Ionicons name='card' color='#40916c' style={{ backgroundColor: '#cfe1b9', padding: 10, borderRadius: 10, marginBottom: 5 }} size={45} />
                      </View>
                      <View>
                        <Ionicons name='map' size={45} color='#40916c'
                          style={{ backgroundColor: '#cfe1b9', padding: 10, borderRadius: 10, marginBottom: 5 }}
                        />
                      </View>
                      <View>
                        <Ionicons name='home' size={45} color='#40916c' style={{ backgroundColor: '#cfe1b9', padding: 10, borderRadius: 10, marginBottom: 5 }} />

                      </View>
                      <View>
                        <Ionicons name='newspaper' size={45} color='#40916c' style={{ backgroundColor: '#cfe1b9', padding: 10, borderRadius: 10, marginBottom: 5 }} />
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>


              {
                //PRODUCT MAP FUNCTION
                post.map((item, i) => {
                  return <TouchableWithoutFeedback key={i} onPress={() => {
                    isAuthenticated ?
                      navigation.navigate('ProductDetails', { item }) : navigation.navigate('Auth', { screen: "Auth", initial: false })
                  }}>



                    <View style={[styles.box, styles.shadowProp]}>

                      {/* if authenticated then show like button */}
                      {isAuthenticated ?
                        <IconButton
                          icon={!item.isLiked ? "heart-outline" : "heart"}
                          iconColor={MD3Colors.error50}
                          size={20}
                          onPress={() => handleFavurite(item)}
                          style={{ position: 'absolute', zIndex: 1, top: -5, left: 110 }}
                        />
                        : null
                      }
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
    </>
  )
}