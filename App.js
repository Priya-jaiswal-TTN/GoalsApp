import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.length === 0) {
      return;
    }
    setGoalList((prevgoals) => [
      ...prevgoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function onDeleteHandler(id) {
    setGoalList((prevgoals) => {
      return prevgoals.filter((item) => item.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => {
            return (
              <GoalItem item={itemData.item} onDeleteItem={onDeleteHandler} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: "90%",
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    flex: 1,
  },
  goalsContainer: {
    marginTop: 15,
    flex: 6,
  },
});
