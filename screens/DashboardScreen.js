// DashboardScreen Component
// @flow

import React from "react";
import PropTypes from "prop-types";
import { ScrollView, View, Text, StyleSheet, AsyncStorage } from "react-native";
import { Button } from "react-native-elements";
import gql from "graphql-tag";
import { Query } from "react-apollo";

// Components
import Row from "../components/Row";

export const FEED_QUERY = gql`
  query FeedQuery($first: Int, $skip: Int, $orderBy: LinkOrderByInput) {
    feed(first: $first, skip: $skip, orderBy: $orderBy) {
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
      count
    }
  }
`;
type TData = {
  feed: {
    links: [
      {
        id: string,
        createdAt: string,
        url: string,
        description: string,
        postedBy: {
          id: string,
          name: string
        },
        votes: []
      }
    ]
  }
};
type Props = {
  navigation: { any: any }
};
type State = {
  name: ?string,
  email: ?string
};
export default class DashboardScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    console.log("Dashboard CONSTRUCTOR");
    super(props);

    this.state = {
      name: null,
      email: null
    };
  }

  static navigationOptions = {};

  _retrieveData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const email = await AsyncStorage.getItem("email");
      const name = await AsyncStorage.getItem("name");
      if (token !== null) {
        this.setState({ email, name });
      }
    } catch (error) {
      // console.log(error);
    }
  };

  _signOutAsync = async () => {
    // await AsyncStorage.removeItem("token");
    await AsyncStorage.clear();
    this.props.navigation.navigate("Login");
    console.log("PLEASE WORK");
  };

  componentWillMount() {
    console.log("Dashboard WILL mount");
    this._retrieveData();
  }
  componentDidMount() {
    console.log("Dashboard DID mount");
  }
  componentWillUnmount() {
    console.log("Dashboard will UNMOUNT");
  }

  render() {
    console.log("Dashboard RENDER");
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <View>
                <Text>Loading...</Text>
              </View>
            );
          }
          return (
            <ScrollView style={styles.pageContainer}>
              <Row>
                <Text
                  style={{ ...styles.textBody, flex: 1, textAlign: "center" }}
                >
                  WELCOME BACK,
                </Text>
              </Row>
              <Row>
                <Text
                  style={{ ...styles.textHeader, flex: 1, textAlign: "center" }}
                >
                  {this.state.name || "😌"}
                </Text>
              </Row>
              <Row style={{ justifyContent: "space-around", marginBottom: 20 }}>
                <Button
                  title="Home"
                  raised
                  onPress={() => {
                    this.props.navigation.navigate("Home");
                  }}
                />
                <Button
                  title="Log Out"
                  raised
                  type="Outline"
                  onPress={this._signOutAsync}
                />
              </Row>
              <>
                {data.feed.links.map(x => (
                  <>
                    <Row
                      style={{
                        backgroundColor: "#E4E7EB",
                        marginHorizontal: 10
                      }}
                    >
                      <Text style={{ flex: 1, fontSize: 18 }}>
                        {x.description.slice(0, 100)}
                      </Text>
                    </Row>
                    <Row
                      style={{
                        backgroundColor: "#E4E7EB",
                        marginBottom: 15,
                        marginHorizontal: 10,
                        justifyContent: "flex-end"
                      }}
                    >
                      <Text style={{ color: "#14B5D0", fontWeight: "bold" }}>
                        {(x.postedBy && x.postedBy.name) || "?"}
                      </Text>
                    </Row>
                  </>
                ))}
              </>
            </ScrollView>
          );
        }}
      </Query>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingVertical: 50
  },
  textHeader: {
    fontSize: 34,
    fontWeight: "200",
    letterSpacing: 2,
    marginBottom: 30,
    marginLeft: 3.8,
    marginRight: 13.8,
    textAlign: "auto"
  },
  textBody: {
    fontSize: 16,
    fontWeight: "100",
    letterSpacing: 1,
    lineHeight: 23,
    marginBottom: 30,
    marginLeft: 3.8,
    // marginRight: 13.8,
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
  }
});
