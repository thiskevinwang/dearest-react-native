// @flow
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Row from "../../components/Row";
import { styles } from "./Styles";

type Props = {};

export default function About(props: Props) {
  return (
    <View style={styles.scene}>
      <Row>
        <Text style={styles.title}>About Me</Text>
      </Row>
    </View>
  );
}
