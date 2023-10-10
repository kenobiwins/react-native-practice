import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title="Increase" onPress={() => setCounter((prev) => (prev += 1))} />
      <Button title="Decrease" onPress={() => setCounter((prev) => (prev -= 1))} />
      <Text>Current counter {counter}</Text>
    </View>
  );
}
