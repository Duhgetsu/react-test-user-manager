import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import UserCard from "./UserCard";
import Modal from "react-native-modalbox";
import UserMap from "../Modals/UserMapModal";
import ModalHeader from "../Modals/ModalHeader";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { dataApi: [] };
  }
  openMapModal = () => {
    this.refs.mapModal.open();
  };

  closeMapModal = () => {
    this.refs.mapModal.close();
  };

  componentDidMount() {
    fetch("http://172.16.0.193:3000/api/v1/user/all")
      .then(response =>
        response.json().then(users => {
          this.setState({ usersList: users });
        })
      )
      .catch(error => {
        this.setState({ usersList: getUsersData() });
      });

    this.props.store.subscribe(() => {
      this.setState({ searchValue: this.props.store.getState().searchText });
    });
  }

  render() {
    return (
      <View style={styles.userList}>
        <UserCard openMapModal={this.openMapModal} />
        <Modal
          style={[styles.modal, styles.modalBottomBackdrop]}
          position={"bottom"}
          ref={"mapModal"}
          swipeToClose={false}
        >
          <ModalHeader closeModal={this.closeMapModal} />
          <UserMap />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userList: {
    flex: 1
  },
  modal: {
    // justifyContent: "center",
    alignItems: "center"
  },
  modalBottomBackdrop: {
    height: 400
  },
  cardTitle: {
    fontSize: 20
  }
});
