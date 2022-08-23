import { View, Text, ScrollView, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native'
import React from 'react'
import shopProducts from './data'

export default function Products() {
    return (
        <ScrollView >
            <View style={styles.flexContainer}>
                {
                    shopProducts.map((item) => {
                        return <TouchableWithoutFeedback key={item.id} onPress={() => alert(item.id)}>

                            <View style={[styles.box, styles.shadowProp]}>
                                <Image
                                    source={{
                                        uri: item.url
                                    }}
                                    style={{ width: 148, borderRadius: 20, height: 180, objectFit: "cover" }}

                                />
                                <View style={styles.textBox}>
                                    <Text>{item.title}</Text>
                                    <Text>$200</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    })
                }



            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: 'wrap'
    },
    box: {
        // backgroundColor: "#38b000",
        width: 150,
        height: 240,
        borderRadius: 20,
        marginTop: 19,
        // padding: 6,
        borderColor: "#4e484f",
        borderWidth: 1,
        // boxShadow:'#4e484f',

    },
    textBox: {
        padding: 8,

    },
    shadowProp: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },

})