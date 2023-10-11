import { StyleSheet, Text, View } from "react-native";

export default function BoxScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>1</Text>
      <Text style={styles.textStyle}>2</Text>
      <Text style={styles.textStyle}>3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    flexGrow: 1,
    // backgroundColor: "blue",
  },
  textStyle: {
    borderWidth: 1,
      borderColor: "red",
    ...StyleSheet.absoluteFillObject
  },
});
