// PreschoolProgram Component

import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import Row from "../Row";

const ORANGE = "#fc9038";
const RED = "#f95f3b";

const PIC = require("../../assets/dearest/preschoolprogram.jpg");

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
  }
});

export default class PreschoolProgram extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[this.props.style, styles.pageContainer]}>
        <Row style={{ justifyContent: "center" }}>
          <Text style={styles.textHeader}>Preschool program</Text>
        </Row>
        <Row>
          <Text style={{ flex: 1, paddingHorizontal: 20, ...styles.textBody }}>
            The Dearest Preschool Program is specifically designed for ages 2 -
            4 with our <Text style={{ color: ORANGE }}>Dearest curriculum</Text>
            . Spark your child’s love for learning and help them become
            school-ready through a quality in-home experience.
          </Text>
        </Row>

        <Row>
          <Text style={{ flex: 1, paddingHorizontal: 20, ...styles.textBody }}>
            3 - 4 students per group | 3-hour program | Semester-based | In the
            hosting student’s home | Options for 2 or 3 days a week, AM
            (9am-12pm) or PM (3pm-6pm) | Reports & milestone tracking
          </Text>
        </Row>

        <Button
          title="HOST GROUP"
          titleStyle={{
            fontWeight: "bold",
            letterSpacing: 1
          }}
          buttonStyle={{
            backgroundColor: RED,
            borderRadius: 0,
            height: 60,
            marginBottom: 20,
            marginHorizontal: 60
          }}
        />
        <Button
          title="JOIN GROUP"
          titleStyle={{ fontWeight: "bold", letterSpacing: 1, color: ORANGE }}
          type="outline"
          buttonStyle={{
            borderRadius: 0,
            borderColor: ORANGE,
            borderWidth: 2,
            height: 60,
            marginBottom: 20,
            marginHorizontal: 60
          }}
        />
        <Row noGutters style={{ paddingHorizontal: 60 }}>
          <Image source={PIC} style={{ flex: 1, aspectRatio: 4 / 3 }} />
        </Row>
      </View>
    );
  }
}

PreschoolProgram.propTypes = {
  // children: PropTypes.node,
  style: PropTypes.object
};
