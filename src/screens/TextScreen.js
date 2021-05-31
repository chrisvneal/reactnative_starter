import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter password (4 or more characters)</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newValue) => setPassword(newValue)}
        value={password}
      />

      {password.length < 4 ? (
        <Text>Password should be at least than 4 characters</Text>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
