import React from "react";
import { Button, Text, View } from "react-native";

interface Props {
  color: string;
  onIncrease: ()=>void;
  onDecrease: ()=>void;
}

export default function ColorCounter({ color, onDecrease, onIncrease }: Props) {
    
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={onIncrease} title={`Increase ${color}`} />
      <Button onPress={onDecrease} title={`Decrease ${color}`} />
    </View>
  );
}
