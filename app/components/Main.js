import React, { Component } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import UserList from "./UserList/UserList";

export default class Main extends Component {
  static navigationOptions = {
    title: "Usuários",
    headerStyle: {
      backgroundColor: "#084A80"
    },
    headerTitleStyle: {
      color: "#fff"
    },
    headerLeft: null,
    drawerLabel: "Home"
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#084A80" barStyle="light-content" />
        <UserList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#005BA0"
  }
});
