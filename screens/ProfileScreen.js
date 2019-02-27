// ProfileScreen Component

import React from "react";
import PropTypes from "prop-types";
import { Image, View, Text, StyleSheet, AsyncStorage } from "react-native";
import { Button } from "react-native-elements";

// Components
import Row from "../components/Row";
const AVATAR = require("../assets/dearest/dearest_avatar.jpg");
const styles = StyleSheet.create({
  pageContainer: {
    paddingVertical: 50
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

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "" };
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  static navigationOptions = {
    headerLeft: (
      <Button type="clear" onPress={null} title="Logout" color="#fff" />
    )
  };

  componentDidMount() {
    this._retrieveData();
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("userToken");
      if (value !== null) {
        this.setState({ name: value });
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {
    return (
      <View style={styles.pageContainer}>
        <Row noGutters>
          <Image source={AVATAR} style={{ flex: 1, aspectRatio: 1 }} />
        </Row>
        <Row>
          <Text
            style={{
              ...styles.textHeader,
              fontWeight: "900",
              flex: 1,
              textAlign: "center"
            }}
          >
            {this.state.name.toUpperCase() || "Failed to get username"}
          </Text>
        </Row>
      </View>
    );
  }
}

ProfileScreen.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};
