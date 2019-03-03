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

const E1 = [JOLISA, IJUNG, YORLENY];
const E2 = [STEPHANIE, REBECCA, STEPHANIEJ];
const E3 = [ASIYE, AKUA, AMANDA];

const TCL = require("../../assets/dearest/university/tcl.png");
const HUNTER = require("../../assets/dearest/university/hunter.png");
const BANKSTREET = require("../../assets/dearest/university/bankStreet.png");
const JUILLIARD = require("../../assets/dearest/university/juilliard.png");
const STANFORD = require("../../assets/dearest/university/stanford.png");
const CORNELL = require("../../assets/dearest/university/cornell.png");

const S1 = [TCL, HUNTER, BANKSTREET];
const S2 = [JUILLIARD, STANFORD, CORNELL];

export default function CommunityOfEducators() {
  const renderEducatorSquare = (source, index) => (
    <Image source={source} style={styles.educatorSquare} key={index} />
  );

  const renderEducatorRow = array => {
    return (
      <Row>{array.map((each, index) => renderEducatorSquare(each, index))}</Row>
    );
  };

  const renderSchoolLogo = (source, index) => (
    <View style={{ flex: 1, aspectRatio: 6 }} key={index}>
      <Image source={source} style={styles.universityLogo} />
    </View>
  );

  const renderSchoolRow = array => {
    return (
      <Row>{array.map((each, index) => renderSchoolLogo(each, index))}</Row>
    );
  };

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
      {renderEducatorRow(E1)}
      {renderEducatorRow(E2)}
      {renderEducatorRow(E3)}

      <Row style={{ paddingBottom: 25 }} />

      {/* Univerity Banners */}
      {renderSchoolRow(S1)}
      {renderSchoolRow(S2)}
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
