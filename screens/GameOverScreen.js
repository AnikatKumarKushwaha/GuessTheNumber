import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import color from "../components/constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
function GameOverScreen({ roundNumber, userNumber, onStartNewGame }) {
  return (
    <View style={style.rootContainer}>
      <Title>Game Over!</Title>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={style.sumaryText}>
        Your phone needed <Text style={style.heighlight}>{roundNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={style.heighlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}
export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const style = StyleSheet.create({
  rootContainer: {
    padding: 23,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 300 ? 150 : 300,
    height: deviceWidth < 300 ? 150 : 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: color.plumDark,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  sumaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  heighlight: {
    fontFamily: "open-sans-bold",
    color: color.plum,
  },
});
