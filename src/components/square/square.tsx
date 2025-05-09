import { Text, StyleSheet, TouchableOpacity } from "react-native"
import { SquareProps } from "./square.types"

function Square({ id, value, onSquareClick, isDisabled }: SquareProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onSquareClick(id)}
      disabled={isDisabled}
    >
      <Text>{value}</Text>
    </TouchableOpacity>
  )
}

export { Square }

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  }
})
