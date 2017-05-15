import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class UserCard extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Image
            style={styles.cardAvatar}
            source={{
              uri: "https://success.salesforce.com/resource/1491350400000/sharedlayout/img/new-user-image-default.png"
            }}
          />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>
              Nome da Pessoa
            </Text>
            <Text style={styles.cardEmail}>
              email.da.pessoa@email.com
            </Text>
            <Text style={styles.cardSubtitle}>
              Gênero, idade - EMPRESA
            </Text>
            <View style={styles.cardButtons}>
              <Icon.Button
                name="phone"
                onPress={this.loginWithFacebook}
                backgroundColor="transparent"
                color="#555"
              />
              <Icon.Button
                name="map"
                onPress={() => {
                  this.props.openMapModal();
                }}
                backgroundColor="transparent"
                color="#555"
              />
              <Icon.Button
                name="external-link"
                onPress={this.loginWithFacebook}
                backgroundColor="transparent"
                color="#555"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    maxHeight: 120
  },
  cardContent: {
    flexDirection: "row",
    margin: 5
    // backgroundColor: "yellow"
  },
  cardAvatar: {
    maxHeight: 120,
    width: 90,
    height: 90,
    margin: 10,
    borderRadius: 140
  },
  cardInfo: {
    flex: 2,
    alignItems: "center"
    // backgroundColor: "red"
  },
  cardTitle: {
    fontSize: 20
  },
  cardSubtitle: {
    fontSize: 12
  },
  cardEmail: {
    fontSize: 12
  },
  cardButtons: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginTop: 10
  }
});
