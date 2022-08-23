import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        // alignItems:"center",
        // justifyContent:'center'
    },
    heading: {
        fontSize: 21,
        fontWeight:"600",
        color:"black",
        fontFamily:"roboto"
        
    },
    textBox: {
        margin: 15
    },
    text:{
        fontSize:14
    },
    button:{
        backgroundColor:'blue',
        padding:10,
        width:150,
        margin:"auto",
        borderRadius:7
    },
    buttonBox:{
        margin:5,
        flexDirection:'row',
        justifyContent:'space-around'

    }
})