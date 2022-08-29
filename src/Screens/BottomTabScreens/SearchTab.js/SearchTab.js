import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { usePostContext } from '../../../contexts/PostContext'

export default function SearchTab() {
  const [text, setText] = React.useState('')
  return (
    <View >
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop:0,
      backgroundColor:'#40916c',height:80,alignItems:'center'}}>
        <View style={{ backgroundColor: '#F4F8F9', flexDirection: 'row', borderRadius: 30,height:50, width: 330 }}>
          <Ionicons name='search-outline' size={20} style={{ padding: 10, marginTop: 2 }} />
          <TextInput placeholder='Search...' 
                  onChangeText={newText => setText(newText)}

          />
        </View>
        {/* <View style={{ backgroundColor: '#023047', width: "15%", padding: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
          <TouchableOpacity>

            <Ionicons name='options-outline' color='#fff' size={20} />
          </TouchableOpacity>
        </View> */}
      </View>
      <Text>SearchTab</Text>
    </View>
  )
}