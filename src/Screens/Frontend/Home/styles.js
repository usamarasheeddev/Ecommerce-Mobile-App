import { StyleSheet } from "react-native";
export const styles=StyleSheet.create({
    flexContainer: {
        flex: 1,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: 'wrap'
      },
      headigStyle: {
        textAlign: 'center',
        fontSize: 18
      },
      box: {
        // backgroundColor: "#38b000",
        width: 150,
        height: 240,
        borderRadius: 20,
        marginTop: 15,
        // padding: 6,
        borderColor: "#4e484f",
        // borderWidth: 1,
        // boxShadow:'#4e484f',
    
      },
      textBox: {
        padding: 8,
    
      },
      shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        // shadowRadius: 3,
    
      },
})