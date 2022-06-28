import { StyleSheet, View, Text, Button, Pressable } from "react-native";

function GoalItem(props) {
  function onDeleteItemHandler() {
    props.onDeleteItem(props.item.id);
  }
  return (
    // <Pressable android_ripple={{ color: "#000000" }}>
    <View style={styles.goalItem}>
      <Text style={styles.text}>{props.item.text}</Text>
      <Button color="red" title="X" onPress={onDeleteItemHandler} />
    </View>
    //  </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "#2c99f8",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
