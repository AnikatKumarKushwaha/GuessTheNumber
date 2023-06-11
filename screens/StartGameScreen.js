import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstrunctionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();

  function numberInputHandeler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetinputHandeler() {
    setEnteredNumber("");
  }
  function confirmInputHandeler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be a number between 1-99", [
        { text: "Okay", style: "destructive", onPress: resetinputHandeler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }

  const marginTopDistance = height < 380 ? 30 : 100;
  return (
    <ScrollView>
      <KeyboardAvoidingView style={style.screen} behavior="position">
        <View style={[style.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess my Number</Title>
          <Card>
            <InstrunctionText>Enter a number</InstrunctionText>
            <TextInput
              style={style.numberInput}
              onChangeText={numberInputHandeler}
              maxLength={2}
              keyboardType="number-pad"
              value={enteredNumber}
            />
            <View style={style.buttonsContainer}>
              <View style={style.buttonContainer}>
                <PrimaryButton onPress={resetinputHandeler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={style.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandeler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const style = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    padding: 16,
    marginTop: 36,
    backgroundColor: "#3b021f",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
