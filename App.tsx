import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';

import TaskInput from './components/taskInput'
import TaskList from  './components/taskList'
import { useTodos } from './hooks/useTodos'

export default function App() {
  const {state, handleAdd, handleToggle, handleRemove} = useTodos()

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Todo List</Text>
  
      <TaskInput onAdd={handleAdd} />
      <TaskList 
        tasks={state.tasks} 
        onToggle={handleToggle}
        onRemove={handleRemove} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
