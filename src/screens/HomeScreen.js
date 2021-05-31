import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Chris' Major Production!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List demo"
      />
      <Button
        onPress={() => navigation.navigate("Images")}
        title="Go to Image screen"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Colors Demo"
      />
      <Button
        title="Go to SquareScreen Demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Text Screen Demo"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to Text box Screen Demo"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
