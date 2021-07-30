import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  const { title } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#f7287b",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});

export default Header;