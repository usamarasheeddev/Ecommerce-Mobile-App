import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
// import { TextInput } from 'react-native-paper';


export default function UserCredsScreen({ navigation }) {
  const [orderCreds, setOrderCreds] = React.useState("");
  const handleOrderCreds = () => {
    navigation.navigate('CheckOutScreen', { orderCreds })

  }

  return (
    <ScrollView>
      <View style={{ flex: 1, marginBottom: 80 }}>
        {/* <View style={styles.header}>
        <Text style={{ fontSize: 18, }}>$567</Text>

      </View> */}
        {/* UserCreds Form */}
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 26, marginTop: 60 }}>Order Credentials</Text>
        <View style={{ alignItems: 'center', marginTop: 30 }}>

          <View>
            <Text style={styles.inputLabel}>UserName*</Text>
            <TextInput
              placeholder='UserName'
              onChangeText={text => setOrderCreds(s => ({ ...s, ['username']: text }))}
              style={{ backgroundColor: "white", color: 'black', width: 300, borderRadius: 50, padding: 10 }}


            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Email*</Text>
            <TextInput
              placeholder='Email'
              onChangeText={text => setOrderCreds(s => ({ ...s, ['email']: text }))}
              style={{ backgroundColor: "white", color: 'black', width: 300, borderRadius: 50, padding: 10, paddingLeft: 20 }}
              keyboardType='email-address'

            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Phone Number*</Text>
            <TextInput
              placeholder='+92'
              onChangeText={text => setOrderCreds(s => ({ ...s, ['number']: text }))}
              style={{ backgroundColor: "white", color: 'black', width: 300, borderRadius: 50, padding: 10, paddingLeft: 20 }}
              keyboardType="numeric"
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>City*</Text>
            <TextInput
              placeholder='City Name'
              onChangeText={text => setOrderCreds(s => ({ ...s, ['city']: text }))}
              style={{ backgroundColor: "white", color: 'black', width: 300, borderRadius: 50, padding: 10, paddingLeft: 20 }}

            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Address*</Text>
            <TextInput
              placeholder='Full Address'
              onChangeText={text => setOrderCreds(s => ({ ...s, ['address']: text }))}
              style={{ backgroundColor: "white", color: 'black', width: 300, borderRadius: 50, padding: 10, paddingLeft: 20 }}
              keyboardType='email-address'
            />
          </View>

          <View style={{ marginTop: 30 }}>
            <TouchableOpacity onPress={handleOrderCreds}>
              <Text style={styles.button}>CheckOut</Text>
            </TouchableOpacity>
          </View>


        </View>


      </View>
    </ScrollView>
  )
}
