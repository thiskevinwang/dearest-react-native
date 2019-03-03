import React from "react";
import { Platform, View } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { ORANGE } from "../constants/Colors";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SearchScreen from "../screens/SearchScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import ProfileScreen from "../screens/ProfileScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    />
  )
};

const SearchStack = createStackNavigator({
  Links: SearchScreen
});

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-search" : "md-search"}
    />
  )
};

const SignupStack = createStackNavigator({
  Signup: {
    screen: SignupScreen,
    navigationOptions: () => ({
      title: `Sign up`,
      headerBackTitle: "back"
    })
  }
});

SignupStack.navigationOptions = {
  tabBarLabel: "Sign Up",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person-add" : "md-person-add"}
    />
  )
};

const LoginOrProfile = props => {
  return props.navigation.state.params ? LoginScreen : LoginScreen;
};

const LoginStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: `Login`
    })
  }
});

LoginStack.navigationOptions = {
  tabBarLabel: "Login",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};

// createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);
export default createBottomTabNavigator(
  {
    HomeStack,
    SearchStack,
    SignupStack,
    LoginStack
  },
  {
    // NOTE: Edit initialRouteName for ease during development
    initialRouteName: "HomeStack"
  }
);
