import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

function GoalInput({ addGoal, showModal, closeModal }) {
  const [enteredGoal, setEnteredGoal] = useState('');

  const handleInput = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    addGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={showModal} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal?'
          style={styles.input}
          onChangeText={handleInput}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title={` Cancel `}
              color='red'
              onPress={closeModal}
              style={styles.button}
              transparent={true}
            />
          </View>
          <View style={styles.button}>
            <Button title={` Add `} onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // so that view takes the full available space and comes to the center of the screen
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
