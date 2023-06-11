import { Text,StyleSheet } from "react-native";
import color from "../constants/colors";

function InstrunctionText({children,style}){
   return <Text style={[styles.instructionText,style]}>{children}</Text>
}
export default InstrunctionText;

const styles=StyleSheet.create({
    instructionText:{
        color:color.yellow,
        fontSize:24,
        fontFamily:'open-sans',
      }
})