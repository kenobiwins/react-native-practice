import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function TextScreen() {
  const [value, setValue] = useState("");

  function handleInput(newValue: string) {
    setValue(newValue);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={handleInput}
      />
      {value.length > 4 ? <Text>{`my name is ${value}`}</Text> : null}
      {/* <Text>{value.length > 5 ? "woow" : `my name is ${value}`}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
