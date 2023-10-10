import { View } from "react-native";
import ImageDetails from "../components/ImageDetails";

export default function ImageScreen() {
  return (
    <View>
      <ImageDetails score={1} imageSource={require("../../assets/beach.jpg")} title="beach" />
      <ImageDetails score={12} imageSource={require("../../assets/forest.jpg")} title="forest" />
      <ImageDetails
        score={13}
        imageSource={require("../../assets/mountain.jpg")}
        title="mountain"
      />
    </View>
  );
}
