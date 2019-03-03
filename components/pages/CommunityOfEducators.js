// CommunityOfEducators Component
// @flow

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Row from "../Row";
import { GRAY } from "../../constants/Colors";
// const GRAY = "#f1f1f1";

const JOLISA = require("../../assets/dearest/jolisa-square.jpg");
const IJUNG = require("../../assets/dearest/ijung-square.jpg");
const YORLENY = require("../../assets/dearest/yorleny-square.jpg");

const STEPHANIE = require("../../assets/dearest/stephanie-square.jpg");
const REBECCA = require("../../assets/dearest/rebecca-square.jpg");
const STEPHANIEJ = require("../../assets/dearest/stephaniej-square.jpg");

const ASIYE = require("../../assets/dearest/asiye-square.jpg");
const AKUA = require("../../assets/dearest/akua-square.jpg");
const AMANDA = require("../../assets/dearest/amanda-square.jpg");

const TCL = require("../../assets/dearest/university/tcl.png");
const HUNTER = require("../../assets/dearest/university/hunter.png");
const BANKSTREET = require("../../assets/dearest/university/bankStreet.png");

const JUILLIARD = require("../../assets/dearest/university/juilliard.png");
const STANFORD = require("../../assets/dearest/university/stanford.png");
const CORNELL = require("../../assets/dearest/university/cornell.png");

export default function CommunityOfEducators() {
  const renderEducatorSquare = source => (
    <Image source={source} style={styles.educatorSquare} />
  );

  return (
    <View style={[styles.pageContainer, { backgroundColor: GRAY }]}>
      <Row>
        <Text style={styles.textHeader}>Community of passionate educators</Text>
      </Row>

      <Row>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{ width: 20, height: 20, marginBottom: 30 }}
            source={require("../../assets/dearest/check-plain-opt.png")}
          />
        </View>

        <View style={{ flex: 3 }}>
          <Text style={styles.descriptionBody}>
            Every Dearest educator has been carefully selected from thousands of
            applicants, resulting in {"<"}3% acceptance rate.
          </Text>
        </View>
      </Row>

      <Row>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{ width: 20, height: 20, marginBottom: 30 }}
            source={require("../../assets/dearest/check-plain-opt.png")}
          />
        </View>

        <View style={{ flex: 3 }}>
          <Text style={styles.descriptionBody}>
            Each applicant is vetted through our rigorous seven-step screening
            process, including in-person interviews and practical assessments.
          </Text>
        </View>
      </Row>

      <Row>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{ width: 20, height: 20, marginBottom: 30 }}
            source={require("../../assets/dearest/check-plain-opt.png")}
          />
        </View>

        <View style={{ flex: 3 }}>
          <Text style={styles.descriptionBody}>
            All educators are required to have a proven track record of quality
            teaching and childcare experience.
          </Text>
        </View>
      </Row>

      {/* TODO: Clickable Image Grid */}
      <Row>
        {renderEducatorSquare(JOLISA)}
        {renderEducatorSquare(IJUNG)}
        {renderEducatorSquare(YORLENY)}
      </Row>
      <Row>
        {renderEducatorSquare(STEPHANIE)}
        {renderEducatorSquare(REBECCA)}
        {renderEducatorSquare(STEPHANIEJ)}
      </Row>
      <Row style={{ paddingBottom: 25 }}>
        {renderEducatorSquare(ASIYE)}
        {renderEducatorSquare(AMANDA)}
        {renderEducatorSquare(AKUA)}
      </Row>

      {/* Univerity Banners */}
      <Row>
        <View style={{ flex: 1, aspectRatio: 6 }}>
          <Image source={TCL} style={styles.universityLogo} />
        </View>
        <View style={{ flex: 1, aspectRatio: 6 }}>
          <Image source={HUNTER} style={styles.universityLogo} />
        </View>
        <View style={{ flex: 1, aspectRatio: 6 }}>
          <Image source={BANKSTREET} style={styles.universityLogo} />
        </View>
      </Row>

      <Row>
        <View style={{ flex: 1, aspectRatio: 6 }}>
          <Image source={JUILLIARD} style={styles.universityLogo} />
        </View>
        <View style={{ flex: 1, aspectRatio: 6 }}>
          <Image source={STANFORD} style={styles.universityLogo} />
        </View>
        <View style={{ flex: 1, aspectRatio: 6 }}>
          <Image source={CORNELL} style={styles.universityLogo} />
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
    fontSize: 22,
    fontWeight: "200",
    letterSpacing: 2,
    marginBottom: 30,
    marginLeft: 3.8,
    marginRight: 13.8,
    paddingLeft: 20,
    textAlign: "auto"
  },
  textBody: {
    fontSize: 16,
    fontWeight: "100",
    letterSpacing: 1,
    lineHeight: 23,
    marginBottom: 30,
    marginLeft: 3.8,
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
  educatorSquare: { flex: 1, aspectRatio: 1 },
  universityLogo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  }
});
