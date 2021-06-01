import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.boxOne}></View>
      <View style={styles.boxTwo}></View>
      <View style={styles.boxThree}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    // borderWidth: 3,
    // borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    // height: 200,
    // alignItems: "flex-end",
  },

  boxOne: {
    borderWidth: 1,
    backgroundColor: "lightpink",
    height: 50,
    width: 50,
    borderColor: "red",
  },
  boxTwo: {
    borderWidth: 1,
    backgroundColor: "mediumseagreen",
    height: 50,
    width: 50,
    borderColor: "green",
    // position: "absolute",
    top: 80,
    alignSelf: "center",
  },
  boxThree: {
    borderWidth: 1,
    backgroundColor: "mediumorchid",
    height: 50,
    width: 50,
  },
});

export default BoxScreen;
