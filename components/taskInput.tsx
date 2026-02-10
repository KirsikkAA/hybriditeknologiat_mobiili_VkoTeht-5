import { useState } from "react"
import {StyleSheet, View, TextInput, Button} from "react-native"

interface TaskInputProps {
  onAdd: (text: string) => void
}

export default function TaskInput({ onAdd }: TaskInputProps) {
  const [input, setInput] = useState<string>("")

  const addTask = (): void => {
    if (input.trim()) {
      onAdd(input.trim());
      setInput("");
    }
  }

  return (
    <View style={styles.inputRow}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Enter Task"
      />
      <Button title="Add" onPress={addTask} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection:'row',
    marginBottom: 16
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginRight: 8
  }
});