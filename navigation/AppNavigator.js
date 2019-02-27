//@flow
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import AuthLoadingScreen from "./AuthLoadingScreen";
import AccountNavigator from "./AccountNavigator";

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Main: MainTabNavigator,
      AuthLoading: AuthLoadingScreen,
      // Auth: AuthStack
      Account: AccountNavigator
    },
    {
      initialRouteName: "Main"
    }
  )
);
