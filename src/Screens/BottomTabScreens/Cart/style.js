import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        height: 60,
        width:"100%",
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // position: "absolute",
        borderBottomColor:"#ccc5b9",
        borderBottomWidth:1,
        // left:150
    }, button: {
        backgroundColor: "blue",
        // height:20,
        width: 120,
        textAlign: 'center',
        color: 'white',
        padding: 7,
        borderRadius: 5,

    },

    cartItem: {

        height: 130,
        flexDirection: 'row',
        alignItems: "center",
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc5b9'
    },
    headign: {
        fontSize: 16
    },
    img: {
        // height: 100,
        // width: 100,
        // backgroundColor: "red",
        borderRadius: 20
    },
    productTitle: {
        width: 230,
        height: 140,
        padding: 13,
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    quantity: {
        flexDirection: 'row'
    },

    btn: {
        borderRadius: 10,
        width: 30,
        borderColor: 'black',
        borderWidth: 1,
        height: 30

    },
    btnFont: {
        fontSize: 14,
        color: "black",
        textAlign: 'center',
        padding: 4
    },
    cross: {
        position: "absolute",
        left: 320,
        top: 10
    },text:{
        
    },



    inputLabel:{
        fontSize:16,
        padding:5,
        marginLeft:10
    }
})