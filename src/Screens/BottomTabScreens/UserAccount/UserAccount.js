import { View, Text ,Button} from 'react-native'
import React from 'react'

export default function UserAccount({navigation}) {
  return (
    <View>
      <Button
      title='Add Products'
      onPress={()=>navigation.navigate('AddProducts')}
      />
    </View>
  )
}