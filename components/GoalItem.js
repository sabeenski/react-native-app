import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function GoalItem({ title, onDelete }) {
  return (
    <TouchableOpacity onPress={onDelete}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default GoalItem;
