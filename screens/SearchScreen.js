import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Button } from "react-native-elements";
import { createDrawerNavigator } from "react-navigation";
import { ORANGE, RED } from "../constants/Colors";

// Components
import Row from "../components/Row";

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: "Search"
  };

  render() {
    return (
      <View style={styles.pageContainer}>
        <Row>
          <Text
            style={[
              styles.textHeader,
              { flex: 1, textAlign: "center", fontWeight: "bold" }
            ]}
          >
            What are you looking for today?
          </Text>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Button
            title="GROUP PROGRAM"
            type="outline"
            buttonStyle={{
              borderWidth: 2,
              borderRadius: 0,
              borderColor: ORANGE,
              padding: 30
            }}
            containerStyle={{ flex: 1, marginHorizontal: 40, marginBottom: 25 }}
            titleStyle={{ color: "black", fontWeight: "bold" }}
          />
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Button
            title="PRIVATE SESSION"
            type="outline"
            buttonStyle={{
              borderWidth: 2,
              borderRadius: 0,
              borderColor: RED,
              padding: 30
            }}
            containerStyle={{ flex: 1, marginHorizontal: 40, marginBottom: 25 }}
            titleStyle={{ color: "black", fontWeight: "bold" }}
          />
        </Row>
      </View>
    );
  }
}

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
  },
  button: {}
});
