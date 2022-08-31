import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        marginBottom:10,
        // alignItems:'center'
    },
    heading: {
        fontSize: 18,
        fontWeight:"bold",
        color:"black",
        fontFamily:"roboto"
        
    },
   
    textBox: {
        margin: 15,
        marginBottom:80
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

    },
    detaileScreenIcons:{
        textAlign: 'center', fontSize: 10,fontWeight:'bold'
    }
})