// WeHelpParents Component
// @flow

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Row from "../Row";
import { ORANGE } from "../../constants/Colors";

// TODO: refactor styles

export default function WeHelpParents() {
  return (
    <View style={styles.pageContainer}>
      <Row>
        <Text style={styles.textHeader}>We help parents have it all.</Text>
      </Row>

      <Row>
        <Text style={styles.textBody}>
          The quality of early childhood experience determines your child’s
          future well-being. Access the best learning experience that supports
          your unique lifestyle.
        </Text>
      </Row>

      {/* pic 1*/}
      <Row>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/vetted.png")}
          />
        </View>

        <View style={{ flex: 3 }}>
          <Text style={styles.descriptionHeader}>
            Highly-Vetted Early Childhood Educators
          </Text>

          <Text style={styles.descriptionBody}>
            Access expert educators who have passed Dearest's seven-step
            screening process, including in person interviews and practical
            assessments.
          </Text>
        </View>
      </Row>

      {/* pic 2*/}
      <Row>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/research.png")}
          />
        </View>

        <View style={{ flex: 3 }}>
          <Text style={styles.descriptionHeader}>
            Research-based Dearest Curriculum
          </Text>

          <Text style={styles.descriptionBody}>
            Strengthen your child’s cognitive and socio-emotional development
            with research-based, developmentally-appropriate content.{" "}
            <Text style={{ color: ORANGE }}>Learn more</Text> about our
            approach.
          </Text>
        </View>
      </Row>

      {/* pic 3*/}
      <Row>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/quality.png")}
          />
        </View>

        <View style={{ flex: 3 }}>
          <Text style={styles.descriptionHeader}>
            Quality That Doesn't Cost a Fortune
          </Text>

          <Text style={styles.descriptionBody}>
            Set up or join our{" "}
            <Text style={{ color: ORANGE }}>group programs</Text> and pay up to
            60% less than other quality options.
          </Text>
        </View>
      </Row>
    </View>
  );
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
  }
});
