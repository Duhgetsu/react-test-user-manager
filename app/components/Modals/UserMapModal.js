import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

export default class UserMap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 48.58751,
            longitude: 17.58749,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: 48.58751,
              longitude: 17.58749
            }}
            title="Casa do Felipe"
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "green"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
