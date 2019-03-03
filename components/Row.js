// Row Component
// props.children need to specify a flex style value
// @flow

import React from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  noGutters?: boolean,
  style?: {},
  children: [React$Element<any>] | React$Element<any>
};

const styles = StyleSheet.create({
  row: { flexDirection: "row", paddingHorizontal: 15 },
  rowNoGutters: { flexDirection: "row" }
});

export default function Row(props: Props) {
  return (
    <View
      style={[props.noGutters ? styles.rowNoGutters : styles.row, props.style]}
    >
      {props.children}
    </View>
  );
}
