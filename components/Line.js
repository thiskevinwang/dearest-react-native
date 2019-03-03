// @flow
import * as React from "react";
import { View, StyleSheet } from "react-native";

type Props = {};

export default function Line(props: Props) {
  return <View style={[styles.line, props.style]} />;
}

const styles = StyleSheet.create({
  line: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1
  }
});
