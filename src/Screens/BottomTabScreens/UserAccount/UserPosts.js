import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { styles } from './style'
import { usePostContext } from '../../../contexts/PostContext'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import auth from '@react-native-firebase/auth'


export default function UserPosts() {
    const { post, handleDel } = usePostContext()

    const userId = auth().currentUser.uid


    return (
        <View>
            {post.filter((doc) => doc.userId == userId).length == 0 ?
                <Text style={{ fontWeight: 'bold', marginTop: 200 }}
                >No post yet</Text>


                //PRODUCT MAP FUNCTION
                : <>{
                    post.filter((doc) => doc.userId == userId).map((item, i) => {
                        return <TouchableWithoutFeedback key={i}>



                            <View style={[styles.box, styles.shadowProp]}>

                                {/* Delete post module */}
                                <TouchableOpacity
                                    style={{
                                        position: 'absolute', right: 10, top: 4
                                    }} onPress={() => {
                                        Alert.alert(
                                            "Delete",
                                            "Are you sure to delete post?",
                                            [

                                                {
                                                    text: "Cancel",
                                                    onPress: () => console.log("Cancel Pressed"),
                                                    style: "cancel"
                                                },
                                                { text: "OK", onPress: () => { handleDel(item) } }
                                            ]
                                        );
                                    }}
                                >
                                    <Icon
                                        name='delete'
                                        color='red'
                                        size={22}
                                    />
                                </TouchableOpacity>


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
                }</>

            }
        </View>
    )
}