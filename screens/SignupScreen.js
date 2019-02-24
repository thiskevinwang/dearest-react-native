// LoginScreen Component
// OR
// SignUp, depending on this.props.navigation.state.routeName

import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { Button, Input, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Row from "../components/Row";

const FACEBOOKBG = "#3b5998";
const LINKEDINBG = "#008bc2";
const ORANGE = "#fc9038";
const GRAY = "#bfbfbf";

const HR = props => (
  <View
    style={[
      {
        borderBottomColor: "#eee",
        borderBottomWidth: 1
      },
      props.style
    ]}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  },
  marginBottom: { marginBottom: 15 }
});

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      isError: false,
      email: "",
      password: "",
      emailLabel: " ",
      passwordLabel: " "
    };
  }

  componentDidMount() {
    // console.log(JSON.stringify(this.props.navigation));
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("AuthLoading");
  };

  _storeData = async () => {
    try {
      await AsyncStorage.setItem("userToken", this.state.email);
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
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
          <HR style={{ flex: 3 }} />
          <Text style={{ color: GRAY, flex: 1, textAlign: "center" }}>OR</Text>
          <HR style={{ flex: 3 }} />
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
            icon={<Icon name="mail" type="ionicon" size={25} color="white" />}
            containerStyle={styles.marginBottom}
          />

          <Row noGutters>
            <Text style={{ letterSpacing: 0.6 }}>
              By creating an account, you agree to our{" "}
              <Text onPress={null} style={{ color: ORANGE }}>
                Terms of Use
              </Text>{" "}
              and <Text style={{ color: ORANGE }}>Privacy Policy</Text>, and to
              receive marketing communications from Dearest.
            </Text>
          </Row>

          <Row
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 20
            }}
          >
            <Text style={{ letterSpacing: 1 }}>
              Already have an account?{" "}
              <Text style={{ color: ORANGE }}>Log in</Text>
            </Text>
          </Row>
        </>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  // children: PropTypes.node,
  style: PropTypes.object
};
