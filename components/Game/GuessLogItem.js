import { View,Text,StyleSheet } from "react-native";
import color from "../constants/colors";
function GuessLogItem({roundNumber,guess}){
    return <View style={style.listItem}>
        <Text style={style.itemText}>#{roundNumber}</Text>
        <Text style={style.itemText}>Opponent's guess: {guess}</Text>
    </View>
}
export default GuessLogItem;

const style=StyleSheet.create({
    listItem:{
        borderColor:color.plumDark,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:color.yellow,
        flexDirection:'row',
        justifyContent:'space-between',
        width:"100%",
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0, height:0},
        shadowOpacity:0.25,
        shadowRadius:3
    },
    itemText:{
        fontFamily:'open-sans'
    }
})