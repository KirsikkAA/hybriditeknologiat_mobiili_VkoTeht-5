import { Text, Pressable, StyleSheet } from 'react-native'

export interface Task {
  id: string
  name: string
  done: boolean
}

interface TaskItemProps {
  task: Task
  toggleTask: (id: string) => void
}

export default function TaskItem({ task, toggleTask }: TaskItemProps) {
  return (
    <Pressable
      onPress={() => toggleTask(task.id)}
      style = {[styles.rowFront, task.done && styles.doneRow]}
      >
      <Text style = {task.done && styles.doneText}>
        {task.name}
      </Text>
  </Pressable>
  )
}

const styles = StyleSheet.create({
  rowFront: {
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    padding: 16
  },
  doneRow: {
    backgroundColor: '#bbdfc3'
  },
  doneText: {
    textDecorationLine: 'line-through'
  }
})