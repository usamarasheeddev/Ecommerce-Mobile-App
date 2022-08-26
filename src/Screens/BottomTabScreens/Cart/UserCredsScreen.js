import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
import Form from './Form';
// import { TextInput } from 'react-native-paper';


export default function UserCredsScreen({ navigation }) {


  return (
    <ScrollView>
      <View style={{ flex: 1, marginBottom: 80 }}>
        {/* <View style={styles.header}>
        <Text style={{ fontSize: 18, }}>$567</Text>

      </View> */}
        {/* UserCreds Form */}
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 26, marginTop: 20, }}>Order Credentials</Text>


        <Form navigation={navigation} />

      </View>
    </ScrollView>
  )
}
