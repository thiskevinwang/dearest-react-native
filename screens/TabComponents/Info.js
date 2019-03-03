// @flow
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Row from "../../components/Row";
import { styles } from "./Styles";
import { FACEBOOKBG, LINKEDINBG } from "../../constants/Colors";

type Props = {};

export default function Info(props: Props) {
  return (
    <View style={styles.scene}>
      <Row style={{ alignItems: "baseline", justifyContent: "space-between" }}>
        <Text style={styles.title}>Information</Text>
        <TouchableOpacity>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </Row>

      <Row>
        <Text style={styles.sectionHeader}>Email</Text>
      </Row>
      <Row>
        <Text style={styles.sectionBody}>{props.email || "foo@gmail.com"}</Text>
      </Row>

      <Row>
        <Text style={styles.sectionHeader}>Phone</Text>
      </Row>
      <Row>
        <Text style={styles.sectionBody}>{props.phone || "888-123-4567"}</Text>
      </Row>

      <Row>
        <Text style={styles.sectionHeader}>Address</Text>
      </Row>
      <Row>
        <Text style={styles.sectionBody}>
          {props.address || `9000 E. 9 St. \nBrooklyn, NY 00000`}
        </Text>
      </Row>

      <Row>
        <Text style={styles.sectionHeader}>Connected Accounts</Text>
      </Row>
      <Row>
        <Text style={styles.sectionBody}>
          {props.accounts || (
            <>
              <Ionicons name={"logo-facebook"} size={48} color={FACEBOOKBG} />
              <Ionicons name={"logo-linkedin"} size={48} color={LINKEDINBG} />
            </>
          )}
        </Text>
      </Row>

      <Row>
        <Text style={styles.sectionHeader}>Payment Method</Text>
      </Row>
      <Row>
        <Text style={styles.sectionBody}>{props.payment || "STRIPE"}</Text>
      </Row>
    </View>
  );
}
