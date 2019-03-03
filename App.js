// @flow

import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  AsyncStorage
} from "react-native";
// import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import { ApolloLink, concat } from "apollo-link";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-client-preset";
import { ApolloProvider } from "react-apollo";
import { setContext } from "apollo-link-context";
// import { createHttpLink } from "apollo-link-http";
// import gql from "graphql-tag";

/*
  NOTE: The GraphQL API endpoint to send queries/mutations
*/

const URI = "https://graphql-server-example-1.herokuapp.com/";
const httpLink = new HttpLink({ uri: URI });

const authLink = setContext((_, { headers }) => {
  const token = AsyncStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default class App extends React.Component {
  constructor(props) {
    console.log("App CONSTRUCTOR");
    super(props);

    this.state = {
      isLoadingComplete: false,
      loggedIn: false
    };
  }
  componentWillMount() {
    console.log("App WILL mount");
  }
  componentDidMount() {
    console.log("App DID mount");
    this._retrieveData();
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      const name = await AsyncStorage.getItem("name");
      if (value !== null) {
        this.setState({ name: name });
        // console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {
    console.log("App RENDER");
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </ApolloProvider>
    );
  }

  // _loadResourcesAsync = async () => {
  //   return Promise.all([
  //     Asset.loadAsync([
  //       require("./assets/images/robot-dev.png"),
  //       require("./assets/images/robot-prod.png")
  //     ]),
  //     Font.loadAsync({
  //       // This is the font that we are using for our tab bar
  //       ...Icon.Ionicons.font,
  //       // We include SpaceMono because we use it in HomeScreen.js. Feel free
  //       // to remove this if you are not using it in your app
  //       "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
  //     })
  //   ]);
  // };

  // _handleLoadingError = error => {
  //   // In this case, you might want to report the error to your error
  //   // reporting service, for example Sentry
  //   console.warn(error);
  // };

  // _handleFinishLoading = () => {
  //   this.setState({ isLoadingComplete: true });
  // };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
