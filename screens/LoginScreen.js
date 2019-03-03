// LoginScreen Component
// @flow

import React from "react";
import PropTypes from "prop-types";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from "react-native";
import { Button, Input, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Row from "../components/Row";
import Line from "../components/Line";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import {
  ORANGE,
  FACEBOOKBG,
  LINKEDINBG,
  DARKGRAY,
  LIGHTGRAY
} from "../constants/Colors";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        name
        email
      }
    }
  }
`;

// React.Component
type Props = {
  navigation: { any: any }
};
type State = {
  isLoading: boolean,
  checked: boolean,
  token: ?string,
  email: string,
  password: string,
  emailLabel: string,
  passwordLabel: string
};

// GraphQL response
type Data = {
  login: {
    token: string,
    user: {
      name: string,
      email: string,
      __typename: "User"
    },
    __typename: string
  }
};
type ApolloError = {
  graphQLErrors: [
    {
      message: string,
      locations: [
        {
          line: number,
          column: number
        }
      ],
      path: [string]
    }
  ],
  networkError: ?{
    line: number,
    column: number,
    sourceURL: string
  },
  message: string,
  line: number,
  column: number,
  sourceURL: string
};

export default class LoginScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    console.log("Login CONSTRUCTOR");
    super(props);

    this.state = {
      isLoading: false,
      checked: false,
      token: null,
      email: "",
      password: "",
      emailLabel: " ",
      passwordLabel: " "
    };
  }

  componentWillMount() {
    console.log("Login WILL mount");
    this._retrieveData();
  }
  componentDidMount() {
    console.log("Login DID mount");
  }
  componentWillUnmount() {
    console.log("Login will UNMOUNT");
  }

  _retrieveData = async () => {
    try {
      const token = await AsyncStorage.getItem("token", (err, res) => {
        if (res !== null) {
          this.props.navigation.navigate("Account");
        }
      });
      const name = await AsyncStorage.getItem("name");
      if (value !== null) {
        this.setState({ name, token });
        // console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  _setToken = async (token: string) => {
    try {
      await AsyncStorage.setItem("token", token);
    } catch (error) {}
  };

  render() {
    console.log("Login RENDER");
    return (
      <Mutation
        mutation={LOGIN_MUTATION}
        onCompleted={async (data: Data) => {
          // console.log(
          //   "Mutation.onCompleted: " + JSON.stringify(data.login.user)
          // );
          let token = data.login.token;
          let user = data.login.user;
          await AsyncStorage.setItem("email", user.email);
          await AsyncStorage.setItem("name", user.name);
          this.props.navigation.setParams({ token: token });
          this._setToken(token);
          this.props.navigation.navigate("Account");
        }}
        onError={(error: ApolloError) => {
          this.setState({ isLoading: !this.state.isLoading });
          Alert.alert(
            (!!error.networkError &&
              "Please double check your network and try again.") ||
              error.graphQLErrors[0].message
          );
        }}
      >
        {/* NOTE: Mutation API
            { (Mutate function, Mutate result) => ...etc
        */}
        {(
          foobar: (options?: MutationOptions) => Promise,
          { data, loading, error, called, client }
        ) => (
          <KeyboardAvoidingView
            behavior={"position"}
            style={[styles.container, this.props.style]}
          >
            <View style={styles.marginBottom}>
              <Button
                raised
                onPress={null}
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
              style={{
                ...styles.marginBottom,
                height: 30,
                alignItems: "center"
              }}
            >
              <Line style={{ flex: 3 }} />
              <Text style={{ color: DARKGRAY, flex: 1, textAlign: "center" }}>
                OR
              </Text>
              <Line style={{ flex: 3 }} />
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
                  borderColor: LIGHTGRAY,
                  borderWidth: 1,
                  paddingLeft: 10
                }}
                autoCorrect={false}
                autoCapitalize={false}
              />
            </Row>
            {/* TODO: error feedback */}
            <Row noGutters style={{ height: 70 }}>
              <Input
                name="password"
                label={this.state.password ? "Password" : " "}
                value={this.state.password}
                placeholder="Password"
                secureTextEntry // NOTE: NICE ;)
                onChangeText={password => {
                  this.setState({ password: password });
                }}
                containerStyle={{ paddingHorizontal: 0 }}
                inputContainerStyle={{
                  ...styles.marginBottom,
                  borderColor: LIGHTGRAY,
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
            {/* TODO: GRAPHQL / APOLLO LOGIN */}
            <Button
              raised
              loading={this.state.isLoading}
              // disabled={!this.state.email || !this.state.password}
              onPress={e => {
                this.setState({ isLoading: !this.state.isLoading });
                foobar({
                  variables: {
                    email: this.state.email,
                    password: this.state.password
                  }
                });
                // console.log(data);
                // console.log(loading);
                // console.log(error);
                // console.log(called);
                // console.log(client);
              }}
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
          </KeyboardAvoidingView>
        )}
      </Mutation>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  },
  marginBottom: { marginBottom: 15 }
});
