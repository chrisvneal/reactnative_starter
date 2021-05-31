import React from "react";
import { View, Text, Stylesheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        image={require("../../assets/forest.jpg")}
        score={7}
      />
      <ImageDetail
        title="Beach"
        image={require("../../assets/beach.jpg")}
        score={10}
      />
      <ImageDetail
        title="Mountain"
        image={require("../../assets/mountain.jpg")}
        score={3}
      />
    </View>
  );
};
// const styles = StyleSheet.create({});

export default ImageScreen;
