import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game Screen!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
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
});
