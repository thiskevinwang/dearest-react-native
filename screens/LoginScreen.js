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
    console.log(JSON.stringify(this.props.navigation));
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.marginBottom}>
          <Button
            raised
            onPress={null}
            title={
              this.props.navigation.state.routeName == "Login"
                ? " Log in with Facebook"
                : " Sign up with Facebook"
            }
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
            title={
              this.props.navigation.state.routeName == "Login"
                ? " Log in with LinkedIn"
                : " Sign up with LinkedIn"
            }
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
        {/*
          NOTE:
          Conditionally render the next part based on routeName
        */}

        {/* TODO: erorr feedback */}
        {this.props.navigation.state.routeName == "Login" ? (
          <>
            <Row noGutters style={{ height: 70 }}>
              <Input
                name="email"
                label={this.state.email ? "Email" : " "}
                value={this.state.email}
                placeholder="Email"
                onChangeText={email => {
                  this.setState({ email: email });
                }}
                containerStyle={{ paddingHorizontal: 0 }}
                inputContainerStyle={{
                  ...styles.marginBottom,
                  borderColor: GRAY,
                  borderWidth: 1,
                  paddingLeft: 10
                }}
                autoCorrect={false}
                autoCapitalize={false}
              />
            </Row>

            {/* TODO: erorr feedback */}
            <Row noGutters style={{ height: 70 }}>
              <Input
                name="password"
                label={this.state.password ? "Password" : " "}
                value={this.state.password}
                placeholder="Password"
                onChangeText={password => {
                  this.setState({ password: password });
                }}
                containerStyle={{ paddingHorizontal: 0 }}
                inputContainerStyle={{
                  ...styles.marginBottom,
                  borderColor: GRAY,
                  borderWidth: 1,
                  paddingLeft: 10
                }}
                autoCorrect={false}
                autoCapitalize={false}
              />
            </Row>

            {/* Remember me | Forgot Password? */}
            <Row noGutters style={{ alignItems: "center" }}>
              <CheckBox
                title="Remember me"
                checked={this.state.checked}
                onPress={() => this.setState({ checked: !this.state.checked })}
                containerStyle={{
                  backgroundColor: "none",
                  borderWidth: 0,
                  flex: 1,
                  paddingHorizontal: 0,
                  marginHorizontal: 0
                }}
                textStyle={{ fontWeight: "100", marginLeft: 0 }}
              />
              <Button
                type="clear"
                title="Forgot password?"
                titleStyle={{ color: ORANGE, fontSize: 16 }}
              />
            </Row>

            <Button
              raised
              onPress={null}
              title=" Log in"
              buttonStyle={{
                paddingLeft: 0,
                backgroundColor: ORANGE,
                borderRadius: 0,
                height: 60
              }}
            />

            <Row
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 20
              }}
            >
              <Text style={{ letterSpacing: 1 }}>
                Don't have an account?{" "}
                <Text style={{ color: ORANGE }}>Sign up</Text>
              </Text>
            </Row>
          </>
        ) : (
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
                and <Text style={{ color: ORANGE }}>Privacy Policy</Text>, and
                to receive marketing communications from Dearest.
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
        )}
      </View>
    );
  }
}

LoginScreen.propTypes = {
  // children: PropTypes.node,
  style: PropTypes.object
};
