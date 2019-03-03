// AfterschoolProgram Component
// @flow

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import Row from "../Row";
import { ORANGE, RED, GRAY } from "../../constants/Colors";

type Props = {
  style: {}
};

export default function AfterschoolProgram(props: Props) {
  return (
    <View style={[props.style, styles.pageContainer]}>
      <Row style={{ justifyContent: "center" }}>
        <Text style={styles.textHeader}>Afterschool program</Text>
      </Row>
      <Row>
        <Text style={{ flex: 1, paddingHorizontal: 20, ...styles.textBody }}>
          Accelerate your child’s learning with our specialized programs
          designed for 4 - 8 year olds. Our{" "}
          <Text style={{ color: ORANGE }}>Dearest curriculum</Text> focuses on
          building future-ready skills to help your child succeed in the
          ever-changing world.
        </Text>
      </Row>

      <Row>
        <Text style={{ flex: 1, paddingHorizontal: 20, ...styles.textBody }}>
          3 - 4 students per group | 3 - 6pm | Semester-based | In the hosting
          student’s home | Option of pick-up available | Reports & milestone
          tracking
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
        {/* <Image source={PIC} style={{ flex: 1, aspectRatio: 4 / 3 }} /> */}
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingVertical: 50,
    backgroundColor: GRAY
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
