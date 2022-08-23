import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function ProdutcDetailsScreen({ navigation, route }) {
    const { item } = route.params


    return (
        <ScrollView>

            <View style={styles.flexContainer}>
                <View >
                    <Image sty
                        source={{
                            uri: item.url
                        }}
                        style={{ flex: 1, width: "100%", borderRadius: 20, height: 500, objectFit: "cover", marginTop: 2, resizeMode: 'cover' }}

                    />
                    <View style={styles.textBox}>
                        <Text style={styles.heading}>{item.title.toLowerCase()
                            .split(' ')
                            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                            .join(' ')}</Text>
                        {/* <Text style={styles.text}>$200</Text> */}
                        <Text style={{
                            color: 'black', fontSize: 20, marginTop: 35,marginBottom:20
                        }}>Details</Text>

                        <Text style={styles.text}>{item.details}</Text>
                    </View>
                </View>


                <View style={styles.buttonBox}>
                    <Text style={{padding:8,fontSize:20}}>$200</Text>
                    <TouchableOpacity style={styles.button}
                   
                    >
                        <Text style={{ textAlign: "center",color:'white' }}> Add To Cart</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}
