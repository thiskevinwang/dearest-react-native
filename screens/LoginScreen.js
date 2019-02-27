// LoginScreen Component
//@flow

import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { Button, Input, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Row from "../components/Row";
import gql from "graphql-tag";

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

// const query = gql`
//   query {
//     getDearestUserLoginCredentials(username: 'trungdoestasks@gmail.com'){
//       _id
//       username
//       password
//       email_verified
//       mobile_verified
//       is_first_logged_in
//       parent_id
//       provider_id
//       register_type
//     }
//   }`;

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
    await AsyncStorage.setItem("userToken", this.state.email, () => {
      console.log(AsyncStorage.getItem("userToken"));
    });
    this.props.navigation.navigate("Account");
  };

  fetchQuery = async query => {
    return await fetch("http://www.dearest.io/graphql", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTUzOTNjZTQ5YmEwYmNmMWNmMWUzYWIiLCJ1c2VybmFtZSI6InRydW5nLnRydW1hbi50cmFuQGdtYWlsLmNvbV90ZXN0IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJtb2JpbGVfdmVyaWZpZWQiOnRydWUsImlzX2ZpcnN0X2xvZ2dlZF9pbiI6ZmFsc2UsInBhcmVudF9pZCI6IjVhNTM5M2NlNDliYTBiY2YxY2YxZTNhYyIsInByb3ZpZGVyX2lkIjpudWxsLCJyZWdpc3Rlcl90eXBlIjoxLCJpc0ZpcnN0VGltZSI6ZmFsc2UsImlhdCI6MTUyOTk1NzA0OSwiZXhwIjo0MTIxOTU3MDQ5fQ.TZl9dR0AZATmEiCEMXEeQrD2xO6sXyZajFY-jlKA6ZM"
      },
      body: JSON.stringify({
        query: query
      }),
      credentials: "include"
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        return data.data;
      });
  };

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.marginBottom}>
          <Button
            raised
            onPress={this._signInAsync}
            title={" Log in with Facebook"}
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
            title={" Log in with LinkedIn"}
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

        {/* TODO: erorr feedback */}

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

        {/* BOOT STRAP LOGIN */}
        <Button
          raised
          onPress={this._signInAsync}
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
      </View>
    );
  }
}

LoginScreen.propTypes = {
  // children: PropTypes.node,
  style: PropTypes.object
};
