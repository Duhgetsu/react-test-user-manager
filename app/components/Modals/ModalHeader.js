import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class ModalHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Local da pessoa
        </Text>
        <Icon.Button
          style={styles.closeButton}
          size={22}
          name="close"
          onPress={() => {
            this.props.closeModal();
          }}
          backgroundColor="transparent"
          color="#fff"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    backgroundColor: "#084A80",
    justifyContent: "center"
  },
  headerTitle: {
    flex: 1,
    margin: 10,
    fontSize: 20,
    color: "#fff"
  },
  closeButton: {
    flex: 1,
    alignContent: "center"
  }
});
