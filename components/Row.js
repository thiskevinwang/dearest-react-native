// Row Component
// props.children need to specify a flex style value
//@flow
import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: { flexDirection: "row", paddingHorizontal: 15 },
  rowNoGutters: { flexDirection: "row" }
});

export default class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[
          this.props.noGutters ? styles.rowNoGutters : styles.row,
          this.props.style
        ]}
      >
        {this.props.children}
      </View>
    );
  }
}

Row.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  noGutters: PropTypes.bool
};
