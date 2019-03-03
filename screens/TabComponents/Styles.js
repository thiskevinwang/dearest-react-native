import { StyleSheet } from "react-native";
import { ORANGE } from "../../constants/Colors";

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    letterSpacing: 5,
    textTransform: "uppercase",
    marginBottom: 20
  },
  edit: {
    fontSize: 18,
    color: ORANGE
  },
  scene: {
    paddingVertical: 30,
    height: 600
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: "300",
    marginBottom: 10
  },
  sectionBody: {
    fontSize: 24,
    fontWeight: "100",
    marginBottom: 30
  }
});
