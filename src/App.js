import React, { Component } from "react";
import { Text, View } from "react-native";

export default class App extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F5FCFF",
        }}
      >
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}
