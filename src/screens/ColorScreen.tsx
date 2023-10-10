import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

export default function ColorScreen() {
  const [colors, setColors] = useState([randomRgb()]);

  function handleAddColor() {
    setColors((prev) => {
      return [...prev, randomRgb()];
    });
  }

  return (
    <View>
      <Button title="Add color" onPress={handleAddColor} />
      <FlatList
        renderItem={({ item: color }) => {
          return <View style={{ width: 100, height: 100, backgroundColor: color }}></View>;
        }}
        data={colors}
        keyExtractor={(color) => color}
      />
    </View>
  );
}

function randomRgb() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}

const styles = StyleSheet.create({});
