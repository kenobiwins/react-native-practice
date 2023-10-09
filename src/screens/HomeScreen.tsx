import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, FlatList } from "react-native";
import { NavigationComponent } from "react-navigation";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { Routes } from "../../routes";

interface Props {
  navigation: StackNavigationProp<Routes, "Home">;
}

const HomeScreen = ({ navigation }: Props) => {
  const routes = Object.values(Routes);

  return (
    <View>
      <Text style={styles.text}>hello home</Text>
      <FlatList
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Button onPress={() => navigation.navigate(item)} title={item} />}
        data={routes}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
