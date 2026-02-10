import { View, StyleSheet, Pressable, Text} from "react-native"
import { SwipeListView } from "react-native-swipe-list-view"
import { Task } from "./taskItem"

interface TaskListProps {
  tasks: Task[]
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export default function TaskList({ tasks, onToggle, onRemove }: TaskListProps) {
  return (
    <SwipeListView
      data={tasks}
      keyExtractor={(task) => task.id}

      renderItem={({ item }) => (
        <Pressable
          onPress={() => onToggle(item.id)}
          style={[styles.rowFront, item.done && styles.doneRow]}
        >
        <Text style={item.done && styles.doneText}>{item.name}</Text>
        </Pressable>
      )}

      renderHiddenItem={({item}) => (
        <View style={styles.rowBack}>
          <Pressable
          style={styles.deleteBtn}
          onPress={() => onRemove(item.id)}
          >
            <Text style={styles.deleteText}>Delete</Text>
          </Pressable>
        </View>
      )}
      rightOpenValue={-100}
      disableRightSwipe
    />
  )
}

const styles = StyleSheet.create({
  rowFront:{
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    padding: 16
  },
  rowBack: {
    backgroundColor: '#ddd',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
  },
  doneRow: {
    backgroundColor: '#bbdfc3'
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
  deleteBtn:{
    backgroundColor: '#ffafaf',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 5
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold'
  }
});