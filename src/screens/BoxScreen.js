import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.boxOne}></View>

      <View style={styles.viewTwoParent}>
        <View style={styles.boxTwo}></View>
      </View>
      <View style={styles.boxThree}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 200,
    // alignItems: "flex-end",
  },

  boxOne: {
    // borderWidth: 1,
    backgroundColor: "lightpink",
    height: 50,
    width: 50,
  },
  boxTwo: {
    backgroundColor: "mediumseagreen",
    height: 50,
    width: 50,
    // marginTop: 50,
    alignSelf: "flex-end",
  },
  boxThree: {
    backgroundColor: "mediumorchid",
    height: 50,
    width: 50,
  },
  viewTwoParent: {
    height: 100,
    justifyContent: "flex-end",
  },
});

export default BoxScreen;
