import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    if (enteredGoal.length === 0) return;
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: enteredGoal,
      },
    ]);
    setModalVisible((currentModal) => !currentModal);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((item) => item.id !== goalId);
    });
  };

  const showModalHandler = () => {
    setModalVisible((currentModal) => !currentModal);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={showModalHandler} />
      <GoalInput
        addGoal={addGoalHandler}
        showModal={modalVisible}
        closeModal={showModalHandler}
      />
      <FlatList // For getting a scrollable view for dynamic contents. This is better than ScrollView component.optimizes the view by loading only visible items
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            onDelete={() => removeGoalHandler(itemData.item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
