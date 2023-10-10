import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  imageSource: ImageSourcePropType;
  score:number
}

export default function ImageDetails({ title, score,imageSource }: Props) {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>image score - {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
