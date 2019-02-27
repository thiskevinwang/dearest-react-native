// DashboardScreen Component

import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

// Components
import Row from "../components/Row";

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

export default class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {};

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View style={styles.pageContainer}>
        <Row>
          <Text style={{ ...styles.textBody, flex: 1, textAlign: "center" }}>
            LITTLE ONE'S PROGRESS
          </Text>
        </Row>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

DashboardScreen.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};
