// SignupScreen Component
// @flow

import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import { Button, Input, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Row from "../components/Row";
import Line from "../components/Line";
import { ORANGE, FACEBOOKBG, LINKEDINBG, DARKGRAY } from "../constants/Colors";

export default function SignupScreen(props: Props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.marginBottom}>
        <Button
          raised
          onPress={null}
          title={" Sign up with Facebook"}
          buttonStyle={{
            backgroundColor: FACEBOOKBG,
            borderRadius: 0,
            height: 60
          }}
          icon={<Icon name="facebook" size={25} color="white" />}
        />
      </View>

      <View style={styles.marginBottom}>
        <Button
          raised
          onPress={null}
          title={" Sign up with LinkedIn"}
          buttonStyle={{
            backgroundColor: LINKEDINBG,
            borderRadius: 0,
            height: 60
          }}
          icon={<Icon name="linkedin" size={25} color="white" />}
        />
      </View>
      <Row
        noGutters
        style={{ ...styles.marginBottom, height: 30, alignItems: "center" }}
      >
        <Line style={{ flex: 3 }} />
        <Text style={{ color: DARKGRAY, flex: 1, textAlign: "center" }}>
          OR
        </Text>
        <Line style={{ flex: 3 }} />
      </Row>

      <>
        <Button
          raised
          onPress={null}
          title=" Sign up with Email"
          buttonStyle={{
            paddingLeft: 0,
            backgroundColor: ORANGE,
            borderRadius: 0,
            height: 60
          }}
          icon={<Icon name="envelope" size={25} color="white" />}
          containerStyle={styles.marginBottom}
        />

        <Row noGutters>
          <View style={{ display: "inline" }}>
            <Text style={{ letterSpacing: 0.6 }}>
              By creating an account, you agree to our{" "}
            </Text>
            <TouchableOpacity>
              <Text style={{ color: ORANGE }}>Terms of Use</Text>
            </TouchableOpacity>
            <Text style={{ letterSpacing: 0.6 }}>and</Text>
            <TouchableOpacity>
              <Text style={{ color: ORANGE }}>Privacy Policy</Text>
            </TouchableOpacity>
            <Text style={{ letterSpacing: 0.6 }}>
              , and to receive marketing communications from Dearest.
            </Text>
          </View>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20
          }}
        >
          <Text style={{ letterSpacing: 1 }}>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={{ color: ORANGE }}>Log in</Text>
          </TouchableOpacity>
        </Row>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  },
  marginBottom: { marginBottom: 15 }
});
