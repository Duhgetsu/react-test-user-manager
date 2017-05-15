/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from "react-native";
import Main from "./app/components/Main";
import { StackNavigator, DrawerNavigator } from "react-navigation";

const Screens = StackNavigator({
  Main: { screen: Main }
});

const Drawer = DrawerNavigator({
  Screens: { screen: Screens }
});

const UserManager = StackNavigator({
  Drawer: { screen: Drawer, navigationOptions: { header: null } }
});

AppRegistry.registerComponent("UserManager", () => UserManager);
