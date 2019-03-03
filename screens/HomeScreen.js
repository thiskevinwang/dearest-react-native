// @flow

import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  AsyncStorage
} from "react-native";
// import { WebBrowser } from "expo";

// Components
import Row from "../components/Row";

// Pages
import WeHelpParents from "../components/pages/WeHelpParents";
import CommunityOfEducators from "../components/pages/CommunityOfEducators";
import PreschoolProgram from "../components/pages/PreschoolProgram";
import AfterschoolProgram from "../components/pages/AfterschoolProgram";

const { width, height } = Dimensions.get("window");

let pkg = require("../package.json");

type State = {
  token: string
};

export default class HomeScreen extends React.Component<null, State> {
  constructor() {
    console.log("Home CONSTRUCTOR");
    super();

    this.state = {
      token: "",
      email: "",
      name: ""
    };
  }

  static navigationOptions = {
    header: null
  };
  componentWillMount() {
    console.log("Home WILL mount");
  }
  componentDidMount() {
    console.log("Home DID mount");
    this._retrieveData();
  }
  componentWillUnmount() {
    console.log("Home will UNMOUNT");
  }

  _retrieveData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const email = await AsyncStorage.getItem("email");
      const name = await AsyncStorage.getItem("name");
      if (token !== null) {
        this.setState({ token, email, name });
        // console.log(token);
      }
    } catch (error) {
      // console.log(error);
    }
  };

  render() {
    console.log("Home RENDER");
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.welcomeImage}
            />
          </View>

          <Text style={{ textAlign: "center" }}>
            {this.state.email || "Not Signed In"}{" "}
            {("_ " && this.state.name) || ""}
          </Text>
          <Text style={{ textAlign: "center" }}>ver. {pkg.version}</Text>

          <Row style={{ paddingHorizontal: 0 }}>
            <Image
              source={require("../assets/dearest/home_15.jpg")}
              style={{ flex: 1, aspectRatio: 4 / 3 }}
            />
          </Row>

          {/* PAGES */}
          <WeHelpParents />
          <CommunityOfEducators />
          <PreschoolProgram />
          <AfterschoolProgram />
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
