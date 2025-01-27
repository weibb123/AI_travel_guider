import React from 'react';
import { View, Text } from 'react-native';
import TodoList from '../components/TodoList';
import { styles } from '../styles/styles';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-do List</Text>
      <TodoList />
    </View>
  );
}
