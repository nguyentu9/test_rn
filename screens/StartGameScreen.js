import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game Screen!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitaline="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={4}
        />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} color={Colors.accent} />
          <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    alignItems: "center",
    width: 300,
    maxWidth: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});
