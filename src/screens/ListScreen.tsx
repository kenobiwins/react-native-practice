import { StyleSheet, Text, FlatList } from "react-native";

export default function ListScreen() {
  const friends: { name: string; age: number }[] = [
    { name: "Ross", age: 12 },
    { name: "Joe", age: 6 },
    { name: "Chandler", age: 8 },
    { name: "Monika", age: 11 },
    { name: "Rachel", age: 1 },
    { name: "Feebee", age: 5 },
  ];

  return (
    <FlatList
      // horizontal // for horizontal scroll instead vertical
      // showsHorizontalScrollIndicator={false} // hide scroll bar
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 32,
    marginVertical: 50,
  },
});
