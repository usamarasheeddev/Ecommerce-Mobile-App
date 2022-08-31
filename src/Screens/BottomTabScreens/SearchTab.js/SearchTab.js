import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { usePostContext } from '../../../contexts/PostContext'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from './styles'
import { IconButton, MD3Colors } from 'react-native-paper';
import { useAuthContext } from '../../../contexts/AuthContext'


export default function SearchTab({ navigation }) {
  const { isAuthenticated } = useAuthContext()
  const [text, setText] = React.useState('')
  const { post, setPost } = usePostContext()
  const [filteredData, setFilteredData] = React.useState([]);

  const [isFiltered, setIsFiltered] = React.useState('')


  const handleSearch = (text) => {

    if (text) {
      const newData = post.filter(item => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1;
      })
      setFilteredData(newData)
    }
    else {
      setFilteredData(post)
    }
  }



  const handleFavurite = (id) => {

    alert(id)
    setPost(
      post.map((item) => item.id == id ? { ...item, isLiked: !item.isLiked } : item)
    )
  }

  return (
    < >
      <View style={{
        flexDirection: 'row', justifyContent: 'center', marginTop: 0,
        backgroundColor: '#40916c', height: 80, alignItems: 'center'
      }}>
        <View style={{ backgroundColor: '#F4F8F9', flexDirection: 'row', borderRadius: 10, height: 50, width: 330 }}>

          <View >
            <Ionicons name='search-outline' size={25} style={{ marginTop: 11, marginLeft: 15 }} />
          </View>
          <TextInput style
            ={{ paddingLeft: 10, width: 280 }} placeholder='Search...'
            onChangeText={(text) => {
              handleSearch(text)
            }}

          />
        </View>

      </View>

      <ScrollView>
        <View style={{ marginBottom: 80 }}>
          {

            filteredData.map((item, i) => {
              return <View key={i} style={{ alignItems: 'center' }}>
                <TouchableWithoutFeedback key={i} onPress={() => {
                  isAuthenticated ?
                    navigation.navigate('ProductDetails', { item }) : navigation.navigate('Auth', { screen: "Auth", initial: false })
                }}>



                  <View style={[styles.box, styles.shadowProp]}>


                    {/* //PRODUCT iMAGE */}
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                      <Image
                        source={{
                          uri: item.newPost.url
                        }}
                        style={{ width: 128, borderRadius: 20, height: 100, objectFit: "cover" }}

                      />
                      <View style={styles.textBox}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.title}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>PKR  {item.price}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, marginTop: 5 }}>{item.address}</Text>




                      </View>
                      <View>


                      </View>
                    </View>

                  </View>

                </TouchableWithoutFeedback>
              </View>
            })

          }
        </View>
      </ScrollView>
    </>
  )
}