import React from "react";
import { Platform, View, Button } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import DashboardScreen from "../screens/DashboardScreen";
import ProfileScreen from "../screens/ProfileScreen";

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: () => ({
      title: `Dashboard`
    })
  }
});

DashboardStack.navigationOptions = {
  tabBarLabel: "Dashboard",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-construct" : "md-construct"}
    />
  )
};

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: `Profile`
    })
  }
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
    />
  )
};

// const LoginStack = createStackNavigator({
//   Login: {
//     screen: LoginScreen,
//     navigationOptions: () => ({
//       title: `Login`,
//       headerBackTitle: "back"
//     })
//   }
// });
//
// LoginStack.navigationOptions = {
//   tabBarLabel: "Login",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-person" : "md-person"}
//     />
//   )
// };

// NOTE: Update initialRouteName for ease during Development
export default createBottomTabNavigator(
  {
    DashboardStack,
    ProfileStack
  },
  { initialRouteName: "ProfileStack" }
);
