// ProfileScreen Component
// @flow

import React from "react";
import {
  Image,
  View,
  ScrollView,
  Text,
  StyleSheet,
  AsyncStorage,
  Dimensions
} from "react-native";
import { Button } from "react-native-elements";
import { LIGHTGRAY } from "../constants/Colors";

// Components
import Row from "../components/Row";

// native-tab-view ---
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import About from "./TabComponents/About";
import LittleOnes from "./TabComponents/LittleOnes";
import Info from "./TabComponents/Info";
// --- native-tab-view

const AVATAR = require("../assets/dearest/dearest_avatar.jpg");

type Props = {
  navigation: {}
};

type State = {
  name: string
};

export default class ProfileScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    console.log("Profile CONSTRUCTOR");
    super(props);

    this.state = {
      name: "",
      index: 0,
      routes: [
        { key: "first", title: "Info" },
        { key: "second", title: "Little Ones" },
        { key: "third", title: "About" }
      ]
    };
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  static navigationOptions = {};
  componentWillMount() {
    console.log("Profile WILL mount");
  }
  componentDidMount() {
    console.log("Profile DID mount");
    this._retrieveData();
  }
  componentWillUnmount() {
    console.log("Profile will UNMOUNT");
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
    console.log("Profile RENDER");
    return (
      <ScrollView style={styles.pageContainer}>
        <Row noGutters>
          <Image source={AVATAR} style={{ flex: 1, aspectRatio: 1 }} />
        </Row>
        <Row>
          <Text
            style={{
              ...styles.textHeader,
              fontWeight: "700",
              flex: 1,
              textAlign: "center",
              textTransform: "uppercase"
            }}
          >
            {this.state.name || "Failed to get username"}
          </Text>
        </Row>
        <TabView
          style={{}}
          navigationState={this.state}
          // NOTE: renderTabBar
          // to customize the TabBar
          renderTabBar={props => (
            <TabBar
              {...props}
              // activeColor={{ color: "black" }}
              // inactiveColor={LIGHTGRAY}
              indicatorStyle={{ backgroundColor: "white", height: 50 }}
              style={{ backgroundColor: LIGHTGRAY, borderBottomWidth: 0 o}}
              labelStyle={{ color: "black" }}
              bounces
            />
          )}
          renderScene={SceneMap({
            first: Info,
            second: LittleOnes,
            third: About
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get("window").width }}
        />
      </ScrollView>
    );
  }
}

// ProfileScreen.propTypes = {
//   children: PropTypes.node,
//   style: PropTypes.object
// };

const styles = StyleSheet.create({
  pageContainer: {
    paddingBottom: 50
  },
  textHeader: {
    fontSize: 34,
    fontWeight: "200",
    letterSpacing: 2,
    marginBottom: 30,
    marginLeft: 3.8,
    marginRight: 13.8,
    textAlign: "auto"
  },
  textBody: {
    fontSize: 16,
    fontWeight: "100",
    letterSpacing: 1,
    lineHeight: 23,
    marginBottom: 30,
    marginLeft: 3.8,
    // marginRight: 13.8,
    textAlign: "auto"
  },
  descriptionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1.5
  },
  descriptionBody: {
    fontSize: 16,
    fontWeight: "100",
    letterSpacing: 1.2,
    marginBottom: 30
  }
});
