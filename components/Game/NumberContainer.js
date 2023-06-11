import { Text, View, StyleSheet, Dimensions } from "react-native";
import colors from "../constants/colors";
function NumberContainer({ children }) {
  return (
    <View style={style.container}>
      <Text style={style.numberText}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const style = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.yellow,
    color: colors.yellow,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.yellow,
    fontSize: deviceWidth < 380 ? 28 : 36,
    //fontWeight:'bold'
    fontFamily: "open-sans-bold",
  },
});
